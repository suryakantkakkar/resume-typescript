import { Router } from 'express';
import {
  uploadResumeDetails,
  getResumeByIdController,
  getResumeByNameController,
} from '../controllers/resumeController';

const router = Router();

router.post('/resumes', uploadResumeDetails);
router.get('/resumes/:id', getResumeByIdController);
router.get('/resumes/name/:name', getResumeByNameController);

module.exports = router ;
export default router