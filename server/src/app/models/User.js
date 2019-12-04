import Sequelize, { Model } from 'sequelize';
import bcript from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        passwordHash: Sequelize.STRING,
        isAdmin: Sequelize.BOOLEAN,
      },
      { sequelize }
    );

    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.passwordHash = await bcript.hash(user.password, 8);
      }
    });

    return this;
  }

  checkPassword(pwd) {
    return bcript.compare(pwd, this.passwordHash);
  }
}

export default User;
