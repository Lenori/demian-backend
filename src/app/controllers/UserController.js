import * as Yup from 'yup';
import msg from '../../msgs';

import User from '../models/User';
import Info from '../models/Info';

import {createWirecardCustomer} from '../../config/wirecard';

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

        let userExists = await User.findOne({
            where: {
                email: req.body.email
            }
        });

        if (userExists) {
            return res
                .status(400)
                .json({error: msg.user.create.error.err_email_already_exists});
        }
        
        userExists = await User.findOne({
            where: {
                rg: req.body.rg
            }
        });

        if (userExists) {
            return res
                .status(400)
                .json({error: msg.user.create.error.err_rg_already_exists});
        }

        userExists = await User.findOne({
            where: {
                cpf: req.body.cpf
            }
        });

        if (userExists) {
            return res
                .status(400)
                .json({error: msg.user.create.error.err_cpf_already_exists});
        } 

        let newUser = await User.create(req.body);

        const infoData = {
            user: newUser.id,
            already_practice: req.body.already_practice,
            other_sport: req.body.other_sport,
            hobbies: req.body.hobbies,
            opinion: req.body.opinion,
        }

        await Info.create(infoData);

        return res
            .status(200)
            .json({
                success: msg.user.create.success,
                user: {
                    id: newUser.id,
                    name: newUser.name,
                    email: newUser.email
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

    async index(req, res) {
        const users = await User.findAll(
                {
                    order: ['id'],
                    include: [{
                        model: Info,
                        as: 'userInfo'
                    }]
                }            
            );
        return res
            .status(200)
            .json(users)
    }
}

export default new UserController();