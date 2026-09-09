export interface CertificationItemEntity {
  id?: string;
  name: string;
  date: string;
  tag?: string;
}

export interface CertificationGroupEntity {
  id?: string;
  org: string;
  items: CertificationItemEntity[];
}
