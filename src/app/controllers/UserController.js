import * as Yup from 'yup';
import msg from '../../msgs';

import User from '../models/User';

class UserController {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            pass: Yup.string().required().min(4),
            confirmPass: Yup.string().required().oneOf([Yup.ref('pass')])
        });

        try {            
            await schema.validate(req.body);
        } catch(err) {
            return res
                .status(400)
                .json({error: err.errors});
        }

        const userExists = await User.findOne({
            where: {
                email: req.body.email
            }
        });

        if (userExists) {
            return res
                .status(400)
                .json({error: msg.user.create.error.err_email_already_exists});
        }

        const {id, name, email, admin} = await User.create(req.body);        

        return res
            .status(200)
            .json({
                success: msg.user.create.success,
                user: {
                    id: id,
                    name: name,
                    email: email,
                    admin: admin
                    }
                })
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string(),
            email: Yup.string().email(),
            oldPassword: Yup.string().min(4),
            pass: Yup.string().min(4).when('oldPassword', (oldPassword, field) => oldPassword ? field.required() : field),
            confirmPass: Yup.string().when('pass', (pass, field) => pass ? field.required().oneOf([Yup.ref('pass')]) : field)
        });

        try {            
            await schema.validate(req.body);
        } catch(err) {
            return res
                .status(400)
                .json({error: err.errors});
        }

        const {email, oldPassword} = req.body;

        const user = await User.findByPk(req.userId);

        if (email !== user.email) {
            const userExists = await User.findOne({
                where: {
                    email: req.body.email
                }
            });
    
            if (userExists) {
                return res
                    .status(400)
                    .json({error: msg.user.update.error.err_email_already_exists});
            }
        }

        if (oldPassword && !(await user.checkPassword(oldPassword))) {
            return res
                .status(401)
                .json({error: msg.user.update.error.err_password_not_match});
        }

        const newUser = await user.update(req.body);

        const newName = newUser.name;
        const newEmail = newUser.email;

        return res
            .json({
                success: msg.user.update.success,
                user: {
                    newName,
                    newEmail
                }
            });
    }
}

export default new UserController();