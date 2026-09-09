import type { ProjectEntity } from "@/domain/entities/Project";
import type { ExperienceEntity } from "@/domain/entities/Experience";
import type { SkillGroupEntity } from "@/domain/entities/Skill";
import type { CertificationGroupEntity } from "@/domain/entities/Certification";
import {
  experienceSeed,
  projectsSeed,
  skillsSeed,
  certificationsSeed,
} from "./StaticDataSeed";

const STORAGE_KEYS = {
  EXPERIENCE: "portfolio_exp_v1",
  PROJECTS: "portfolio_proj_v1",
  SKILLS: "portfolio_skills_v1",
  CERTS: "portfolio_certs_v1",
};

export class LocalStorageDataSource {
  getExperience(): ExperienceEntity[] {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.EXPERIENCE);
      return saved ? JSON.parse(saved) : experienceSeed;
    } catch {
      return experienceSeed;
    }
  }

  saveExperience(items: ExperienceEntity[]): void {
    localStorage.setItem(STORAGE_KEYS.EXPERIENCE, JSON.stringify(items));
  }

  getProjects(): ProjectEntity[] {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROJECTS);
      return saved ? JSON.parse(saved) : projectsSeed;
    } catch {
      return projectsSeed;
    }
  }

  saveProjects(items: ProjectEntity[]): void {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(items));
  }

  getSkills(): SkillGroupEntity[] {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SKILLS);
      return saved ? JSON.parse(saved) : skillsSeed;
    } catch {
      return skillsSeed;
    }
  }

  saveSkills(items: SkillGroupEntity[]): void {
    localStorage.setItem(STORAGE_KEYS.SKILLS, JSON.stringify(items));
  }

  getCertifications(): CertificationGroupEntity[] {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CERTS);
      return saved ? JSON.parse(saved) : certificationsSeed;
    } catch {
      return certificationsSeed;
    }
  }

  saveCertifications(items: CertificationGroupEntity[]): void {
    localStorage.setItem(STORAGE_KEYS.CERTS, JSON.stringify(items));
  }

  clearAll(): void {
    localStorage.removeItem(STORAGE_KEYS.EXPERIENCE);
    localStorage.removeItem(STORAGE_KEYS.PROJECTS);
    localStorage.removeItem(STORAGE_KEYS.SKILLS);
    localStorage.removeItem(STORAGE_KEYS.CERTS);
  }
}
