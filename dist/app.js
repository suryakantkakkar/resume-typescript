"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./config/db");
const resumeRoutes_1 = __importDefault(require("./routes/resumeRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// Debugging import
console.log('resumeRoutes:', resumeRoutes_1.default);
app.use('/api', resumeRoutes_1.default);
const PORT = parseInt(process.env.PORT || '8000', 10);
const startServer = async () => {
    try {
        await (0, db_1.connectToDatabase)();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch (error) {
        console.error('Failed to start the server:', error);
    }
};
startServer();
