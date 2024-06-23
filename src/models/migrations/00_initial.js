import { Sequelize } from "sequelize";

const TABLE_NAME = "users";

const up = async ({ context: queryInterface }) => {
  return queryInterface.createTable(
    TABLE_NAME,
    {
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      balance: {
        type: Sequelize.INTEGER,
        min: 0,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      createdAt: false,
    }
  );

};

const down = async ({ context: queryInterface }) => {
  return queryInterface.dropTable(TABLE_NAME);
};

export default { up, down };
