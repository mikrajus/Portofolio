import React, { createContext, useContext, useEffect, useState } from "react";
import {
  experience as initialExperience,
  projectList as initialProjects,
  skills as initialSkills,
  certifications as initialCertifications,
  activities as initialActivities,
  education as initialEducation,
} from "@/lib/data";

interface ExperienceItem {
  period: string;
  role: string;
  org: string;
  desc: string;
  tags: string[];
  icon?: string;
}

interface ProjectItem {
  name: string;
  flag?: string | null;
  badge?: string | null;
  tabCategory: string;
  category: string;
  desc: string;
  features?: { strong: string; text: string }[];
  architectureFlow?: string[];
  stack: string[];
  github?: string;
  image?: string;
  imageAlt?: string;
}

interface SkillGroup {
  group: string;
  icon: string;
  items: string[];
}

interface CertGroup {
  org: string;
  items: { name: string; date: string; tag?: string }[];
}

interface PortfolioContextType {
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillGroup[];
  certifications: CertGroup[];
  adminOpen: boolean;
  setAdminOpen: (open: boolean) => void;
  toggleAdmin: () => void;
  addExperience: (item: ExperienceItem) => void;
  deleteExperience: (index: number) => void;
  addProject: (item: ProjectItem) => void;
  deleteProject: (index: number) => void;
  addCertification: (org: string, cert: { name: string; date: string; tag?: string }) => void;
  deleteCertification: (org: string, certIndex: number) => void;
  addSkillItem: (groupName: string, item: string) => void;
  deleteSkillItem: (groupName: string, item: string) => void;
  resetAllData: () => void;
  exportJSON: () => string;
}

const STORAGE_KEYS = {
  EXPERIENCE: "portfolio_exp_v1",
  PROJECTS: "portfolio_proj_v1",
  SKILLS: "portfolio_skills_v1",
  CERTS: "portfolio_certs_v1",
};

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [adminOpen, setAdminOpen] = useState(false);

  const [experience, setExperience] = useState<ExperienceItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.EXPERIENCE);
      return saved ? JSON.parse(saved) : initialExperience;
    } catch (e) {
      return initialExperience;
    }
  });

  const [projects, setProjects] = useState<ProjectItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROJECTS);
      return saved ? JSON.parse(saved) : initialProjects;
    } catch (e) {
      return initialProjects;
    }
  });

  const [skills, setSkills] = useState<SkillGroup[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SKILLS);
      return saved ? JSON.parse(saved) : initialSkills;
    } catch (e) {
      return initialSkills;
    }
  });

  const [certifications, setCertifications] = useState<CertGroup[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CERTS);
      return saved ? JSON.parse(saved) : initialCertifications;
    } catch (e) {
      return initialCertifications;
    }
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.EXPERIENCE, JSON.stringify(experience));
  }, [experience]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SKILLS, JSON.stringify(skills));
  }, [skills]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CERTS, JSON.stringify(certifications));
  }, [certifications]);

  const toggleAdmin = () => setAdminOpen((prev) => !prev);

  // Experience handlers
  const addExperience = (item: ExperienceItem) => {
    setExperience((prev) => [item, ...prev]);
  };
  const deleteExperience = (index: number) => {
    setExperience((prev) => prev.filter((_, i) => i !== index));
  };

  // Project handlers
  const addProject = (item: ProjectItem) => {
    setProjects((prev) => [item, ...prev]);
  };
  const deleteProject = (index: number) => {
    setProjects((prev) => prev.filter((_, i) => i !== index));
  };

  // Certification handlers
  const addCertification = (orgName: string, cert: { name: string; date: string; tag?: string }) => {
    setCertifications((prev) =>
      prev.map((c) => {
        if (c.org === orgName) {
          return { ...c, items: [cert, ...c.items] };
        }
        return c;
      })
    );
  };
  const deleteCertification = (orgName: string, certIndex: number) => {
    setCertifications((prev) =>
      prev.map((c) => {
        if (c.org === orgName) {
          return { ...c, items: c.items.filter((_, i) => i !== certIndex) };
        }
        return c;
      })
    );
  };

  // Skill handlers
  const addSkillItem = (groupName: string, item: string) => {
    setSkills((prev) =>
      prev.map((group) => {
        if (group.group === groupName && !group.items.includes(item)) {
          return { ...group, items: [...group.items, item] };
        }
        return group;
      })
    );
  };
  const deleteSkillItem = (groupName: string, itemToDelete: string) => {
    setSkills((prev) =>
      prev.map((group) => {
        if (group.group === groupName) {
          return { ...group, items: group.items.filter((i) => i !== itemToDelete) };
        }
        return group;
      })
    );
  };

  const resetAllData = () => {
    localStorage.removeItem(STORAGE_KEYS.EXPERIENCE);
    localStorage.removeItem(STORAGE_KEYS.PROJECTS);
    localStorage.removeItem(STORAGE_KEYS.SKILLS);
    localStorage.removeItem(STORAGE_KEYS.CERTS);
    setExperience(initialExperience);
    setProjects(initialProjects);
    setSkills(initialSkills);
    setCertifications(initialCertifications);
  };

  const exportJSON = () => {
    return JSON.stringify(
      {
        experience,
        projects,
        skills,
        certifications,
        activities: initialActivities,
        education: initialEducation,
      },
      null,
      2
    );
  };

  return (
    <PortfolioContext.Provider
      value={{
        experience,
        projects,
        skills,
        certifications,
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
