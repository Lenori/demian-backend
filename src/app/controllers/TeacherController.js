import User from '../models/User';

class TeacherController {
    async index(req, res) {
        const teachers = await User.findAll({
            where: {
                admin: false
            },            
            attributes: ['id', 'name', 'email', 'updatedAt']
        })

        return res.json(teachers);
    }
}

export default new TeacherController();