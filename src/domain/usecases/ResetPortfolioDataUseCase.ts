import type { IPortfolioRepository, PortfolioData } from "../repositories/IPortfolioRepository";

export class ResetPortfolioDataUseCase {
  private repo: IPortfolioRepository;

  constructor(repo: IPortfolioRepository) {
    this.repo = repo;
  }

  reset(): PortfolioData {
    return this.repo.resetAllData();
  }

  exportJSON(): string {
    return this.repo.exportJSON();
  }
}
