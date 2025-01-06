import { DataTypes, Model, Optional } from 'sequelize';
import{ sequelizeInstance} from '../config/db';

export interface ResumeAttributes {
  id?: number;  // Make 'id' optional
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  mobile: string;
  nationality: string;
  college: string;
  course: string;
  location: string;
  startDate: string;
  endDate: string;
  currentCompany: string;
  currentLocation: string;
  totalExperience: string;
  jobDescription: string;
  skills: string;
}

type ResumeCreationAttributes = Optional<ResumeAttributes, 'id'>;

class Resume extends Model<ResumeAttributes, ResumeCreationAttributes> implements ResumeAttributes {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public gender!: string;
  public mobile!: string;
  public nationality!: string;
  public college!: string;
  public course!: string;
  public location!: string;
  public startDate!: string;
  public endDate!: string;
  public currentCompany!: string;
  public currentLocation!: string;
  public totalExperience!: string;
  public jobDescription!: string;
  public skills!: string;
}

Resume.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    gender: { type: DataTypes.STRING, allowNull: true },
    mobile: { type: DataTypes.STRING, allowNull: true },
    nationality: { type: DataTypes.STRING, allowNull: true },
    college: { type: DataTypes.STRING, allowNull: true },
    course: { type: DataTypes.STRING, allowNull: true },
    location: { type: DataTypes.STRING, allowNull: true },
    startDate: { type: DataTypes.STRING, allowNull: true },
    endDate: { type: DataTypes.STRING, allowNull: true },
    currentCompany: { type: DataTypes.STRING, allowNull: true },
    currentLocation: { type: DataTypes.STRING, allowNull: true },
    totalExperience: { type: DataTypes.STRING, allowNull: true },
    jobDescription: { type: DataTypes.TEXT, allowNull: true },
    skills: { type: DataTypes.TEXT, allowNull: true },
  },
  {
    sequelize: sequelizeInstance,
    tableName: 'resumes',
  }
);

export default Resume;
