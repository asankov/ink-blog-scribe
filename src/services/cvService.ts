
import * as yaml from 'js-yaml';

export interface CVData {
  personal: {
    name: string;
    title: string;
    description: string;
  };
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    linkedinLink: string;
    github: string;
  };
  summary: string;
  experience: Array<{
    title: string;
    company: string;
    location: string;
    period: string;
    responsibilities: string[];
  }>;
  skills: {
    frontend: string[];
    backend: string[];
  };
  education: Array<{
    degree: string;
    school: string;
    period: string;
    description: string;
  }>;
  projects: Array<{
    title: string;
    description: string;
    technologies: string[];
  }>;
  certifications: string[];
}

let cachedCVData: CVData | null = null;

const getBasePath = (): string => {
  if (import.meta.env.PROD) {
    const basePath = import.meta.env.VITE_BASE_PATH || 'ink-blog-scribe';
    return `/${basePath}`;
  }
  return '';
};

export const loadCVData = async (): Promise<CVData> => {
  if (cachedCVData) {
    return cachedCVData;
  }

  try {
    const basePath = getBasePath();
    const response = await fetch(`${basePath}/cv-data.yaml`);
    if (!response.ok) {
      throw new Error('Failed to load CV data');
    }
    
    const yamlContent = await response.text();
    cachedCVData = yaml.load(yamlContent) as CVData;
    return cachedCVData;
  } catch (error) {
    console.error('Failed to load CV data:', error);
    throw error;
  }
};

export const clearCVCache = (): void => {
  cachedCVData = null;
};
