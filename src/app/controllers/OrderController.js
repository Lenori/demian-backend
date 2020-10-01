import * as Yup from 'yup';
import msg from '../../msgs';

import Order from '../models/Order';
import User from '../models/User';
import Planos from '../models/Planos';
import Aulas from '../models/Aulas';

import {createWirecardOrder, createWirecardBoletoPayment, createWirecardCardPayment} from '../../config/wirecard';

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

            console.log('cchash', req.body.cchash);

            if (newOrder.payment_method == 'boleto') {
                payment = await createWirecardBoletoPayment(orderID);
            } else if (newOrder.payment_method == 'card') {
                payment = await createWirecardCardPayment(orderID, req.body.cchash);
            }

            await Order.update(
                {
                    order_id: orderID,
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
        const orderExists = await Order.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!orderExists) {
            return res
                .status(400)
                .json({error: msg.order.read.error.err_order_not_exists});
        }

        const order = await Order.findByPk(req.params.id)
        return res
            .status(200)
            .json(order)
    }
}

export default new OrderController();