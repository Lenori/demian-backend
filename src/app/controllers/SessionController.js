import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import auth from '../../config/auth';
import msg from '../../msgs';

import User from '../models/User';

class SessionController {
    async store(req, res) {
        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            pass: Yup.string().required()
        });

        try {            
            await schema.validate(req.body);
        } catch(err) {
            return res
                .status(400)
                .json({error: err.errors});
        }

        const {email, pass} = req.body;

        const user = await User.findOne({
            where: {
                email: email
            }
        });

        if (!user) {
            return res
                .status(400)
                .json({error: msg.session.create.error.err_email_not_found});
        }

        if (!(await user.checkPassword(pass))) {
            return res
                .status(401)
                .json({error: msg.session.create.error.err_password_not_match});
        }

        const {id, name, admin} = user;

        return res
            .status(200)
            .json({
                success: msg.session.create.success,
                user: {
                    id: id,
                    name: name,
                    email: email,
                    admin: admin,
                    token: jwt.sign({id, admin}, auth.secret, {
                            expiresIn: auth.expiresIn
                        })
                    }
                })
    }
}

export default new SessionController();