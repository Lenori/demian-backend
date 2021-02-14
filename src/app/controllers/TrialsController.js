import * as Yup from 'yup';
import msg from '../../msgs';

import Trials from '../models/Trials';

class TrialsController {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            phone: Yup.string().required(),
            email: Yup.string().email().required()
        });

        try {            
            await schema.validate(req.body);
        } catch(err) {
            return res
                .status(400)
                .json({error: err.errors});
        }

        const newTrial = await Trials.create(req.body);

        return res
            .status(200)
            .json({
                success: msg.trial.create.success,
                user: {
                        id: newTrial.id,
                        name: newTrial.name,
                        email: newTrial.email,
                        phone: newTrial.phone
                    }
                })
    }

    async read(req, res) {
        const trialExists = await Trials.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!trialExists) {
            return res
                .status(400)
                .json({error: msg.trial.read.error.err_trial_not_exists});
        }

        const trial = await Trials.findByPk(req.params.id)
        return res
            .status(200)
            .json(trial)
    }

    async index(req, res) {
        const trials = await Trials.findAll({order: [['id', 'DESC']]});
        return res
            .status(200)
            .json(trials)
    }
}

export default new TrialsController();