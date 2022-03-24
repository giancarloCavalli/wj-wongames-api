module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '153af51fcdf97d7cc6b18d54c32b3615'),
  },
});
