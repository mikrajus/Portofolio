import type { IPortfolioRepository } from "../repositories/IPortfolioRepository";
import type { CertificationGroupEntity, CertificationItemEntity } from "../entities/Certification";

export class ManageCertificationsUseCase {
  private repo: IPortfolioRepository;

  constructor(repo: IPortfolioRepository) {
    this.repo = repo;
  }

  addCertification(orgName: string, cert: CertificationItemEntity): CertificationGroupEntity[] {
    return this.repo.addCertification(orgName, cert);
  }

  deleteCertification(orgName: string, certIndex: number): CertificationGroupEntity[] {
    return this.repo.deleteCertification(orgName, certIndex);
  }
}
