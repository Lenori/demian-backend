export default async (req, res, next) => {
    const whiteList = [
        'https://escolademianmaia.com.br',
        'http://localhost:3000',
        'https://dmescolajj.com.br',
        'https://dmescolajjb.com.br',
        'https://escolademianmaiajj.com.br',
        'https://escoladmjj.com.br',
        'https://escoladmjjb.com.br'
    ];

    if (!req.header('Origin') && process.env.NODE_ENV === 'development') {
        return next();
    }

    if (!req.header('Origin') || req.header('Origin') && whiteList.indexOf(req.header('Origin')) === -1) {
        return res
            .status(401)
            .json({error: 'Request blocked.'});
    }

    return next();
}