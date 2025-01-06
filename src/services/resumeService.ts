// resumeService.ts
import Resume  from '../models/resume-schema';
import { Op,Model } from 'sequelize';
import { ResumeAttributes } from '../models/resume-schema';

interface ResumeInstance extends Model<ResumeAttributes>, ResumeAttributes {
    toJSON: () => ResumeAttributes;
    id?: number;
  }

  export const resumeService = {
    createResume: async (resumeData: ResumeAttributes): Promise<ResumeInstance> => {
      try {
        const createdResume = await Resume.create(resumeData);  
        return createdResume;  
      } catch (error) {
        throw error;
      }
    },

  getResumeById: async (resumeId: number): Promise<ResumeAttributes[]> => {
    try {
      const resume = await Resume.findByPk(resumeId);
      if (resume) {
        return [resume.toJSON()];
      } else {
        throw new Error('Resume not found');
      }
    } catch (error) {
      throw error;
    }
  },

  getResumesByName: async (name: string): Promise<ResumeAttributes[]> => {
    try {
      const [firstName, lastName] = name.split('+');
      const resumes = await Resume.findAll({
        where: {
          [Op.and]: [
            { firstName: { [Op.like]: `%${firstName}%` } },
            { lastName: { [Op.like]: `%${lastName}%` } },
          ],
        },
      });

      if (resumes.length === 0) {
        const alternativeResumes = await Resume.findAll({
          where: {
            [Op.or]: [
              { firstName: { [Op.like]: `%${firstName}%` } },
              { lastName: { [Op.like]: `%${lastName}%` } },
            ],
          },
        });

        return alternativeResumes.map(resume => resume.toJSON());
      }

      return resumes.map(resume => resume.toJSON());
    } catch (error) {
      throw error;
    }
  }
};

// Ensure that the functions are exported properly
export const { createResume, getResumeById, getResumesByName } = resumeService;
