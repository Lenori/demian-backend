
import {getWirecardPayment} from '../../config/wirecard';

class WirecardPaymentController { 
    async read(req, res) {
        const order = await getWirecardPayment(req.params.id);
        return res
            .status(200)
            .json({
                method: order.fundingInstrument.method,
                links: order._links
            })
    }
}

export default new WirecardPaymentController();