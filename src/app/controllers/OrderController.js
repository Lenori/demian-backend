import * as Yup from 'yup';
import msg from '../../msgs';

import Order from '../models/Order';
import User from '../models/User';
import Planos from '../models/Planos';
import Aulas from '../models/Aulas';

import {createWirecardOrder, createWirecardBoletoPayment, createWirecardCardPayment, getWirecardPayment} from '../../config/wirecard';

class OrderController {
    async store(req, res) {
        const schema = Yup.object().shape({
            plan_type: Yup.number().required(),
            plan_id: Yup.number().required(),
            user_id: Yup.number().required(),
            payment_method: Yup.string().required(),
            price: Yup.number().required(),
            status: Yup.string().required()
        });

        try {            
            await schema.validate(req.body);
        } catch(err) {
            return res
                .status(400)
                .json({error: err.errors});
        }

        let userExists = await User.findOne({
            where: {
                id: req.body.user_id
            }
        });

        if (!userExists) {
            return res
                .status(400)
                .json({error: msg.orders.create.error.err_user_not_exists});
        }

        let newOrder = await Order.create(req.body);
        let pedido = null;        
        let payment = null;

        if (newOrder.plan_type == '1') {
            pedido = await Planos.findByPk(newOrder.plan_id);
        } else if (newOrder.plan_type == '2') {
            pedido = await Aulas.findByPk(newOrder.plan_id);
        }

        let customer = await User.findByPk(newOrder.user_id);

        if (newOrder.payment_method == 'card' || newOrder.payment_method == 'boleto') {

            const orderID = await createWirecardOrder(newOrder, pedido, customer.wirecard_id);

            await Order.update(
                {
                    order_id: orderID
                },
                {where: {
                    id: newOrder.id
                }}
            );

            if (newOrder.payment_method == 'boleto') {
                payment = await createWirecardBoletoPayment(orderID);
            } else if (newOrder.payment_method == 'card') {
                payment = await createWirecardCardPayment(orderID, req.body.cchash, req.body.holder);
            }

            await Order.update(
                {
                    payment_id: payment.id
                },
                {where: {
                    id: newOrder.id
                }}
            );
        }

        return res
            .status(200)
            .json({
                success: msg.orders.create.success,
                order: {
                        id: newOrder.id,
                        wirecard_payment_id: payment.id
                    }
                })
    }

    async read(req, res) {
        const order = await Order.findOne({
            where: {
                order_id: req.params.id
            },
            include: [{
                model: User,
                as: 'user'
            }]
        });

        let plan = [];

        if (order.plan_type == '1') {
            plan = await Planos.findByPk(order.plan_id);
        } else if (order.plan_type == '2') {
            plan = await Aulas.findByPk(order.plan_id);
        }

        const payment = await getWirecardPayment(order.payment_id);

        if (!order) {
            return res
                .status(400)
                .json({error: msg.orders.read.error.err_order_not_exists});
        }

        return res
            .status(200)
            .json({order, plan, payment})
    }
}

export default new OrderController();