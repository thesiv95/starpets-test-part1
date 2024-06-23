import { DataTypes } from "sequelize";
import sequelize from "../../db.config.js";

const TABLE_NAME = "users";

const User = sequelize.define(
  TABLE_NAME,
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    balance: {
      type: DataTypes.INTEGER,
      min: 0,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    createdAt: false,
  }
);

export default User;
