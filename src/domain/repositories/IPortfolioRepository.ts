import type { ProjectEntity } from "../entities/Project";
import type { ExperienceEntity, ActivityEntity } from "../entities/Experience";
import type { SkillGroupEntity } from "../entities/Skill";
import type { CertificationGroupEntity, CertificationItemEntity } from "../entities/Certification";
import type { EducationEntity } from "../entities/Education";
import type { StatEntity } from "../entities/Stats";

export interface PortfolioData {
  projects: ProjectEntity[];
  experience: ExperienceEntity[];
  skills: SkillGroupEntity[];
  certifications: CertificationGroupEntity[];
  activities: ActivityEntity[];
  education: EducationEntity[];
  stats: StatEntity[];
}

export interface IPortfolioRepository {
  getPortfolioData(): PortfolioData;
  saveProjects(projects: ProjectEntity[]): void;
  saveExperience(experience: ExperienceEntity[]): void;
  saveSkills(skills: SkillGroupEntity[]): void;
  saveCertifications(certifications: CertificationGroupEntity[]): void;
  addProject(project: ProjectEntity): ProjectEntity[];
  deleteProject(index: number): ProjectEntity[];
  addExperience(exp: ExperienceEntity): ExperienceEntity[];
  deleteExperience(index: number): ExperienceEntity[];
  addSkillItem(groupName: string, item: string): SkillGroupEntity[];
  deleteSkillItem(groupName: string, item: string): SkillGroupEntity[];
  addCertification(orgName: string, cert: CertificationItemEntity): CertificationGroupEntity[];
  deleteCertification(orgName: string, certIndex: number): CertificationGroupEntity[];
  resetAllData(): PortfolioData;
  exportJSON(): string;
}
