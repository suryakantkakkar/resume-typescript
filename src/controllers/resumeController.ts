import { Request, Response } from 'express';
import { createResume, getResumeById, getResumesByName } from '../services/resumeService';

export const uploadResumeDetails = async (req: Request, res: Response) => {
  try {
    const resumeData = req.body;
    const createdResume = await createResume(resumeData);
    res.status(201).json(createdResume.id);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

export const getResumeByIdController = async (req: Request, res: Response) => {
  try {
    const resumeId = parseInt(req.params.id, 10);
    const resume = await getResumeById(resumeId);
    res.status(200).json(resume);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

export const getResumeByNameController = async (req: Request, res: Response) => {
  try {
    const name = req.params.name;
    const resumes = await getResumesByName(name);
    res.status(200).json(resumes);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};
