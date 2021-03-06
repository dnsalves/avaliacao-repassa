const bcrypt = require('bcryptjs');

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Administrator',
          email: 'admin@repassa.com.br',
          password_hash: bcrypt.hashSync('123456', 8),
          is_admin: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Employee',
          email: 'employee@repassa.com.br',
          password_hash: bcrypt.hashSync('123456', 8),
          is_admin: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
