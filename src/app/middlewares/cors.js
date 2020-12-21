export default async (req, res, next) => {
    const whiteList = ['https://escolademianmaia.com.br'];

    if (req.header('Origin') && whiteList.indexOf(req.header('Origin')) === -1) {
        return res
            .status(401)
            .json({error: 'Origin not allowed.'});
    }

    return next();
}