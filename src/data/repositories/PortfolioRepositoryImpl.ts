import type { IPortfolioRepository, PortfolioData } from "@/domain/repositories/IPortfolioRepository";
import type { ProjectEntity } from "@/domain/entities/Project";
import type { ExperienceEntity } from "@/domain/entities/Experience";
import type { SkillGroupEntity } from "@/domain/entities/Skill";
import type { CertificationGroupEntity, CertificationItemEntity } from "@/domain/entities/Certification";
import { LocalStorageDataSource } from "../datasources/LocalStorageDataSource";
import {
  activitiesSeed,
  educationSeed,
  statsSeed,
  experienceSeed,
  projectsSeed,
  skillsSeed,
  certificationsSeed,
} from "../datasources/StaticDataSeed";

export class PortfolioRepositoryImpl implements IPortfolioRepository {
  private dataSource: LocalStorageDataSource;

  constructor(dataSource?: LocalStorageDataSource) {
    this.dataSource = dataSource || new LocalStorageDataSource();
  }

  getPortfolioData(): PortfolioData {
    return {
      projects: this.dataSource.getProjects(),
      experience: this.dataSource.getExperience(),
      skills: this.dataSource.getSkills(),
      certifications: this.dataSource.getCertifications(),
      activities: activitiesSeed,
      education: educationSeed,
      stats: statsSeed,
    };
  }

  saveProjects(projects: ProjectEntity[]): void {
    this.dataSource.saveProjects(projects);
  }

  saveExperience(experience: ExperienceEntity[]): void {
    this.dataSource.saveExperience(experience);
  }

  saveSkills(skills: SkillGroupEntity[]): void {
    this.dataSource.saveSkills(skills);
  }

  saveCertifications(certifications: CertificationGroupEntity[]): void {
    this.dataSource.saveCertifications(certifications);
  }

  addProject(project: ProjectEntity): ProjectEntity[] {
    const current = this.dataSource.getProjects();
    const updated = [project, ...current];
    this.dataSource.saveProjects(updated);
    return updated;
  }

  deleteProject(index: number): ProjectEntity[] {
    const current = this.dataSource.getProjects();
    const updated = current.filter((_, i) => i !== index);
    this.dataSource.saveProjects(updated);
    return updated;
  }

  addExperience(exp: ExperienceEntity): ExperienceEntity[] {
    const current = this.dataSource.getExperience();
    const updated = [exp, ...current];
    this.dataSource.saveExperience(updated);
    return updated;
  }

  deleteExperience(index: number): ExperienceEntity[] {
    const current = this.dataSource.getExperience();
    const updated = current.filter((_, i) => i !== index);
    this.dataSource.saveExperience(updated);
    return updated;
  }

  addSkillItem(groupName: string, item: string): SkillGroupEntity[] {
    const current = this.dataSource.getSkills();
    const updated = current.map((group) => {
      if (group.group === groupName && !group.items.includes(item)) {
        return { ...group, items: [...group.items, item] };
      }
      return group;
    });
    this.dataSource.saveSkills(updated);
    return updated;
  }

  deleteSkillItem(groupName: string, itemToDelete: string): SkillGroupEntity[] {
    const current = this.dataSource.getSkills();
    const updated = current.map((group) => {
      if (group.group === groupName) {
        return { ...group, items: group.items.filter((i) => i !== itemToDelete) };
      }
      return group;
    });
    this.dataSource.saveSkills(updated);
    return updated;
  }

  addCertification(orgName: string, cert: CertificationItemEntity): CertificationGroupEntity[] {
    const current = this.dataSource.getCertifications();
    const updated = current.map((c) => {
      if (c.org === orgName) {
        return { ...c, items: [cert, ...c.items] };
      }
      return c;
    });
    this.dataSource.saveCertifications(updated);
    return updated;
  }

  deleteCertification(orgName: string, certIndex: number): CertificationGroupEntity[] {
    const current = this.dataSource.getCertifications();
    const updated = current.map((c) => {
      if (c.org === orgName) {
        return { ...c, items: c.items.filter((_, i) => i !== certIndex) };
      }
      return c;
    });
    this.dataSource.saveCertifications(updated);
    return updated;
  }

  resetAllData(): PortfolioData {
    this.dataSource.clearAll();
    return {
      projects: projectsSeed,
      experience: experienceSeed,
      skills: skillsSeed,
      certifications: certificationsSeed,
      activities: activitiesSeed,
      education: educationSeed,
      stats: statsSeed,
    };
  }

  exportJSON(): string {
    const data = this.getPortfolioData();
    return JSON.stringify(data, null, 2);
  }
}
