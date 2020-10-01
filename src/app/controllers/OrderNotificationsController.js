import Order from '../models/Order';
import User from '../models/User';

class OrderNotificationsController {  
    async read(req, res) {
        if (req.params.source == 'wirecard') {
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
    }
}

export default new OrderNotificationsController();