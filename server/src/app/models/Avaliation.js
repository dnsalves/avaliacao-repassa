import Sequelize, { Model } from 'sequelize';

class Avaliation extends Model {
  static init(sequelize) {
    super.init(
      {
        adminId: Sequelize.INTEGER,
        employeeId: Sequelize.INTEGER,
        avaliation: Sequelize.STRING,
        deletedAt: Sequelize.DATE,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'adminId', as: 'admin' });
    this.belongsTo(models.User, {
      foreignKey: 'employeeId',
      as: 'employee',
    });
  }
}

export default Avaliation;
