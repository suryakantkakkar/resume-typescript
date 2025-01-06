"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResumeByNameController = exports.getResumeByIdController = exports.uploadResumeDetails = void 0;
const resumeService_1 = require("../services/resumeService");
const uploadResumeDetails = async (req, res) => {
    try {
        const resumeData = req.body;
        const createdResume = await (0, resumeService_1.createResume)(resumeData);
        res.status(201).json(createdResume.id);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.status(400).json({ error: 'An unknown error occurred' });
        }
    }
};
exports.uploadResumeDetails = uploadResumeDetails;
const getResumeByIdController = async (req, res) => {
    try {
        const resumeId = parseInt(req.params.id, 10);
        const resume = await (0, resumeService_1.getResumeById)(resumeId);
        res.status(200).json(resume);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.status(400).json({ error: 'An unknown error occurred' });
        }
    }
};
exports.getResumeByIdController = getResumeByIdController;
const getResumeByNameController = async (req, res) => {
    try {
        const name = req.params.name;
        const resumes = await (0, resumeService_1.getResumesByName)(name);
        res.status(200).json(resumes);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.status(400).json({ error: 'An unknown error occurred' });
        }
    }
};
exports.getResumeByNameController = getResumeByNameController;
