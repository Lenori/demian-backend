export default async (req, res, next) => {
    const whiteList = ['https://escolademianmaia.com.br'];

    if (req.header('Origin') && whiteList.indexOf(req.header('Origin')) === -1) {
        return res
            .status(401)
            .json({error: 'Origin not allowed.'});
    }
    
    if (!req.header('Origin')) {
        if (!process.env.NODE_ENV === 'development') {
            return res
                .status(401)
                .json({error: 'Request denied.'});
        }
    }

    return next();
}