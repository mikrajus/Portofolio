import type { IPortfolioRepository, PortfolioData } from "../repositories/IPortfolioRepository";

export class GetPortfolioDataUseCase {
  private repo: IPortfolioRepository;

  constructor(repo: IPortfolioRepository) {
    this.repo = repo;
  }

  execute(): PortfolioData {
    return this.repo.getPortfolioData();
  }
}
