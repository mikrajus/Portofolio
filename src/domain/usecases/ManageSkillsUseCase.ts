import type { IPortfolioRepository } from "../repositories/IPortfolioRepository";
import type { SkillGroupEntity } from "../entities/Skill";

export class ManageSkillsUseCase {
  private repo: IPortfolioRepository;

  constructor(repo: IPortfolioRepository) {
    this.repo = repo;
  }

  addSkillItem(groupName: string, item: string): SkillGroupEntity[] {
    return this.repo.addSkillItem(groupName, item);
  }

  deleteSkillItem(groupName: string, item: string): SkillGroupEntity[] {
    return this.repo.deleteSkillItem(groupName, item);
  }
}
