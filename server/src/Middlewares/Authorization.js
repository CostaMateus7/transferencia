const jwt = require('jsonwebtoken');

const { promisify } = require('util');
// const LoginRepository = require('../Repositories/LoginRepository');

module.exports = {
  async eAdmin(req, res, next) {
    const AuthHeader = req.headers.authorization;
    
    if (!AuthHeader) {
      return res.status(400).json('Usuário não tem token');
    }

    const [bearer, token] = AuthHeader.split(' ');
    if (!token) {
      return res.status(400).json('Usuário não tem token');
    }
    try {
      const decode = await promisify(jwt.verify)(token, 'MAKSJDEN3945N23MN2MSOO123455DLOWMD');
      req.userId = decode.id;
      return (
        next()
      );
    } catch (err) {
      return (
        res.status(400).json('Token inválido!')
      );
    }
  },
};
