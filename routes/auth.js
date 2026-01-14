const authController = require("../controllers/authController.js");

module.exports = async function (fastify, opts) {
  fastify.post("/register", authController.register);
  fastify.post("/login", authController.login);
  fastify.post("/forgot-password", authController.forgotPassword);
  fastify.post("/reset-password/:token", authController.resetPassword);
// Protected route and hence using preHandler to authenticate
  fastify.post(
    "/logout",
    { preHandler: [fastify.authenticate] },
    authController.logout
  );
};
