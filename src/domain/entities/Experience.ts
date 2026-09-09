export interface ExperienceEntity {
  id?: string;
  period: string;
  role: string;
  org: string;
  desc: string;
  tags: string[];
  icon: string;
}

export interface ActivityEntity {
  id?: string;
  period: string;
  title: string;
  org: string;
  desc: string;
}
