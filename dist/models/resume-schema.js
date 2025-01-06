"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../config/db");
class Resume extends sequelize_1.Model {
}
Resume.init({
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    firstName: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    lastName: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    email: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    gender: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    mobile: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    nationality: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    college: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    course: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    location: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    startDate: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    endDate: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    currentCompany: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    currentLocation: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    totalExperience: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    jobDescription: { type: sequelize_1.DataTypes.TEXT, allowNull: true },
    skills: { type: sequelize_1.DataTypes.TEXT, allowNull: true },
}, {
    sequelize: db_1.sequelizeInstance,
    tableName: 'resumes',
});
exports.default = Resume;
