import msgs from '../../msgs';

export default async (req, res, next) => {
    if (!req.isAdmin) {
        return res
            .status(401)
            .json({error: msgs.auth.read.error.err_admin_only});
    }

    return next();
}