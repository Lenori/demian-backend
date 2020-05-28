import 'dotenv/config';

export default {
    secret: process.env.GAME_SECRET,
    expiresIn: '1d'
}