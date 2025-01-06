"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResumesByName = exports.getResumeById = exports.createResume = exports.resumeService = void 0;
// resumeService.ts
const resume_schema_1 = __importDefault(require("../models/resume-schema"));
const sequelize_1 = require("sequelize");
exports.resumeService = {
    createResume: async (resumeData) => {
        try {
            const createdResume = await resume_schema_1.default.create(resumeData);
            return createdResume;
        }
        catch (error) {
            throw error;
        }
    },
    getResumeById: async (resumeId) => {
        try {
            const resume = await resume_schema_1.default.findByPk(resumeId);
            if (resume) {
                return [resume.toJSON()];
            }
            else {
                throw new Error('Resume not found');
            }
        }
        catch (error) {
            throw error;
        }
    },
    getResumesByName: async (name) => {
        try {
            const [firstName, lastName] = name.split('+');
            const resumes = await resume_schema_1.default.findAll({
                where: {
                    [sequelize_1.Op.and]: [
                        { firstName: { [sequelize_1.Op.like]: `%${firstName}%` } },
                        { lastName: { [sequelize_1.Op.like]: `%${lastName}%` } },
                    ],
                },
            });
            if (resumes.length === 0) {
                const alternativeResumes = await resume_schema_1.default.findAll({
                    where: {
                        [sequelize_1.Op.or]: [
                            { firstName: { [sequelize_1.Op.like]: `%${firstName}%` } },
                            { lastName: { [sequelize_1.Op.like]: `%${lastName}%` } },
                        ],
                    },
                });
                return alternativeResumes.map(resume => resume.toJSON());
            }
            return resumes.map(resume => resume.toJSON());
        }
        catch (error) {
            throw error;
        }
    }
};
// Ensure that the functions are exported properly
exports.createResume = exports.resumeService.createResume, exports.getResumeById = exports.resumeService.getResumeById, exports.getResumesByName = exports.resumeService.getResumesByName;
