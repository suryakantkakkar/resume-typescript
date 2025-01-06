"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const resumeController_1 = require("../controllers/resumeController");
const router = (0, express_1.Router)();
router.post('/resumes', resumeController_1.uploadResumeDetails);
router.get('/resumes/:id', resumeController_1.getResumeByIdController);
router.get('/resumes/name/:name', resumeController_1.getResumeByNameController);
exports.default = router; // Ensure this is a default export
