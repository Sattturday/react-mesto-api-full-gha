const jsonwebtoken = require('jsonwebtoken');
const { messages } = require('../utils/constants');
const UnauthorizedError = require('../errors/UnauthorizedError');

const auth = (req, res, next) => {
  // const { jwt } = req.cookies;

  // if (!jwt) {
  //   next(new UnauthorizedError(messages.shared.badToken));
  //   return;
  // }
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer')) {
    next(new UnauthorizedError(messages.shared.badToken));
    return;
  }

  const token = authorization.split('Bearer ')[1];
  let payload;

  try {
    payload = jsonwebtoken.verify(token, 'some-secret-key');
  } catch (err) {
    next(new UnauthorizedError(messages.shared.badToken));
    return;
  }

  req.user = {
    _id: payload._id,
  };

  next();
};

module.exports = { auth };
