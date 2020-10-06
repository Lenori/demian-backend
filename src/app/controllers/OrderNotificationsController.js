import Order from '../models/Order';
import User from '../models/User';

class OrderNotificationsController {  
    async read(req, res) {
        if (req.params.source == 'wirecard') {
            const event = req.body.event;

            // POSSIBLE EVENTS

            // ORDER.CREATED
            // ORDER.WAITING
            // ORDER.PAID
            // ORDER.NOT_PAID

            const orderID = req.body.resource.order.ownId;

            await Order.update(
                {
                    status: req.body.resource.order.status
                },
                {where: {
                    id: orderID
                }}
            );
        }

        if (req.params.source == 'picpay') {
            await Order.update(
                {
                    status: req.body.status
                },
                {where: {
                    id: req.body.referenceId
                }}
            );
        }
    }
}

export default new OrderNotificationsController();