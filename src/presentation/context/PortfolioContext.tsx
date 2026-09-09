import React, { createContext, useContext, useState, useMemo } from "react";
import type { ProjectEntity } from "@/domain/entities/Project";
import type { ExperienceEntity, ActivityEntity } from "@/domain/entities/Experience";
import type { SkillGroupEntity } from "@/domain/entities/Skill";
import type { CertificationGroupEntity, CertificationItemEntity } from "@/domain/entities/Certification";
import type { EducationEntity } from "@/domain/entities/Education";
import type { StatEntity } from "@/domain/entities/Stats";

import { PortfolioRepositoryImpl } from "@/data/repositories/PortfolioRepositoryImpl";
import { GetPortfolioDataUseCase } from "@/domain/usecases/GetPortfolioDataUseCase";
import { ManageProjectsUseCase } from "@/domain/usecases/ManageProjectsUseCase";
import { ManageExperienceUseCase } from "@/domain/usecases/ManageExperienceUseCase";
import { ManageSkillsUseCase } from "@/domain/usecases/ManageSkillsUseCase";
import { ManageCertificationsUseCase } from "@/domain/usecases/ManageCertificationsUseCase";
import { ResetPortfolioDataUseCase } from "@/domain/usecases/ResetPortfolioDataUseCase";

interface PortfolioContextType {
  experience: ExperienceEntity[];
  projects: ProjectEntity[];
  skills: SkillGroupEntity[];
  certifications: CertificationGroupEntity[];
  activities: ActivityEntity[];
  education: EducationEntity[];
  stats: StatEntity[];
  adminOpen: boolean;
  setAdminOpen: (open: boolean) => void;
  toggleAdmin: () => void;
  addExperience: (item: ExperienceEntity) => void;
  deleteExperience: (index: number) => void;
  addProject: (item: ProjectEntity) => void;
  deleteProject: (index: number) => void;
  addCertification: (org: string, cert: CertificationItemEntity) => void;
  deleteCertification: (org: string, certIndex: number) => void;
  addSkillItem: (groupName: string, item: string) => void;
  deleteSkillItem: (groupName: string, item: string) => void;
  resetAllData: () => void;
  exportJSON: () => string;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const repository = useMemo(() => new PortfolioRepositoryImpl(), []);

  const getPortfolioDataUC = useMemo(() => new GetPortfolioDataUseCase(repository), [repository]);
  const manageProjectsUC = useMemo(() => new ManageProjectsUseCase(repository), [repository]);
  const manageExperienceUC = useMemo(() => new ManageExperienceUseCase(repository), [repository]);
  const manageSkillsUC = useMemo(() => new ManageSkillsUseCase(repository), [repository]);
  const manageCertificationsUC = useMemo(() => new ManageCertificationsUseCase(repository), [repository]);
  const resetPortfolioDataUC = useMemo(() => new ResetPortfolioDataUseCase(repository), [repository]);

  const [adminOpen, setAdminOpen] = useState(false);
  const [data, setData] = useState(() => getPortfolioDataUC.execute());

  const toggleAdmin = () => setAdminOpen((prev) => !prev);

  const addExperience = (item: ExperienceEntity) => {
    const updated = manageExperienceUC.addExperience(item);
    setData((prev) => ({ ...prev, experience: updated }));
  };

  const deleteExperience = (index: number) => {
    const updated = manageExperienceUC.deleteExperience(index);
    setData((prev) => ({ ...prev, experience: updated }));
  };

  const addProject = (item: ProjectEntity) => {
    const updated = manageProjectsUC.addProject(item);
    setData((prev) => ({ ...prev, projects: updated }));
  };

  const deleteProject = (index: number) => {
    const updated = manageProjectsUC.deleteProject(index);
    setData((prev) => ({ ...prev, projects: updated }));
  };

  const addCertification = (orgName: string, cert: CertificationItemEntity) => {
    const updated = manageCertificationsUC.addCertification(orgName, cert);
    setData((prev) => ({ ...prev, certifications: updated }));
  };

  const deleteCertification = (orgName: string, certIndex: number) => {
    const updated = manageCertificationsUC.deleteCertification(orgName, certIndex);
    setData((prev) => ({ ...prev, certifications: updated }));
  };

  const addSkillItem = (groupName: string, item: string) => {
    const updated = manageSkillsUC.addSkillItem(groupName, item);
    setData((prev) => ({ ...prev, skills: updated }));
  };

  const deleteSkillItem = (groupName: string, itemToDelete: string) => {
    const updated = manageSkillsUC.deleteSkillItem(groupName, itemToDelete);
    setData((prev) => ({ ...prev, skills: updated }));
  };

  const resetAllData = () => {
    const resetData = resetPortfolioDataUC.reset();
    setData(resetData);
  };

  const exportJSON = () => {
    return resetPortfolioDataUC.exportJSON();
  };

  return (
    <PortfolioContext.Provider
      value={{
        experience: data.experience,
        projects: data.projects,
        skills: data.skills,
        certifications: data.certifications,
        activities: data.activities,
        education: data.education,
        stats: data.stats,
        adminOpen,
        setAdminOpen,
        toggleAdmin,
        addExperience,
        deleteExperience,
        addProject,
        deleteProject,
        addCertification,
        deleteCertification,
        addSkillItem,
        deleteSkillItem,
        resetAllData,
        exportJSON,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolioData = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolioData must be used within a PortfolioProvider");
  }
  return context;
};
