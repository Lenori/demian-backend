import * as Yup from 'yup';
import msg from '../../msgs';

import User from '../models/User';

class UserController {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            birthday: Yup.date().required(),
            sex: Yup.number().required(),
            rg: Yup.string().required(),
            cpf: Yup.string().required(),
            address: Yup.string().required(),
            number: Yup.number().required(),
            cep: Yup.string().required(),
            cidade: Yup.string().required(),
            estado: Yup.string().required(),
            email: Yup.string().email().required()
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

        const {id, name, email} = await User.create(req.body);        

        return res
            .status(200)
            .json({
                success: msg.user.create.success,
                user: {
                    id: id,
                    name: name,
                    email: email
                    }
                })
    }

    async read(req, res) {
        const userExists = await User.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!userExists) {
            return res
                .status(400)
                .json({error: msg.user.read.error.err_user_not_exists});
        }

        const user = await User.findByPk(req.params.id)
        return res
            .status(200)
            .json(user)
    }
}

export default new UserController();