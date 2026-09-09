import type { IPortfolioRepository } from "../repositories/IPortfolioRepository";
import type { ExperienceEntity } from "../entities/Experience";

export class ManageExperienceUseCase {
  private repo: IPortfolioRepository;

  constructor(repo: IPortfolioRepository) {
    this.repo = repo;
  }

  addExperience(exp: ExperienceEntity): ExperienceEntity[] {
    return this.repo.addExperience(exp);
  }

  deleteExperience(index: number): ExperienceEntity[] {
    return this.repo.deleteExperience(index);
  }
}
