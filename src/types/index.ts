export type Language = 'de' | 'en';
export type Theme = 'dark' | 'light';

export type ProjectCategory = 'all' | 'hardware' | 'embedded' | 'cloud' | 'web';

export interface ProjectMetric {
  label: {
    de: string;
    en: string;
  };
  value: string;
}

export interface ProjectSpec {
  key: {
    de: string;
    en: string;
  };
  value: string;
}

export interface Project {
  id: string;
  title: {
    de: string;
    en: string;
  };
  headline: {
    de: string;
    en: string;
  };
  shortDescription: {
    de: string;
    en: string;
  };
  longDescription: {
    de: string;
    en: string;
  };
  linkedinPitch: {
    de: string;
    en: string;
  };
  category: ProjectCategory;
  techStack: string[];
  metrics: ProjectMetric[];
  specs: ProjectSpec[];
  image: string;
  imageAlt: string;
  gridSpan: string;
  isOpenSource: boolean;
  repoUrlLabel: {
    de: string;
    en: string;
  };
  featured: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: {
    de: string;
    en: string;
  };
  bio: {
    de: string;
    en: string;
  };
  focusAreas: {
    de: string;
    en: string;
  }[];
  socials: {
    label: string;
    url: string;
    type: 'github' | 'linkedin' | 'email';
  }[];
}
