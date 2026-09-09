import type { IPortfolioRepository } from "../repositories/IPortfolioRepository";
import type { ProjectEntity } from "../entities/Project";

export class ManageProjectsUseCase {
  private repo: IPortfolioRepository;

  constructor(repo: IPortfolioRepository) {
    this.repo = repo;
  }

  addProject(project: ProjectEntity): ProjectEntity[] {
    return this.repo.addProject(project);
  }

  deleteProject(index: number): ProjectEntity[] {
    return this.repo.deleteProject(index);
  }
}
