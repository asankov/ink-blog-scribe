
// Simple YAML parser for browser environment
const parseYAML = (yamlString: string): any => {
  const lines = yamlString.split('\n');
  const result: any = {};
  const stack: any[] = [result];
  let currentIndent = 0;

  for (let line of lines) {
    if (line.trim() === '' || line.trim().startsWith('#')) continue;

    const indent = line.length - line.trimStart().length;
    const trimmedLine = line.trim();

    if (trimmedLine.includes(':')) {
      const [key, ...valueParts] = trimmedLine.split(':');
      const value = valueParts.join(':').trim();

      // Handle indent changes
      while (stack.length > 1 && indent <= currentIndent) {
        stack.pop();
        currentIndent -= 2;
      }

      if (value === '' || value === '[]') {
        // This is a parent key
        const newObj = {};
        stack[stack.length - 1][key.trim()] = newObj;
        stack.push(newObj);
        currentIndent = indent;
      } else {
        // This is a key-value pair
        let finalValue: any = value;
        
        // Remove quotes if present
        if ((value.startsWith('"') && value.endsWith('"')) || 
            (value.startsWith("'") && value.endsWith("'"))) {
          finalValue = value.slice(1, -1);
        }
        
        stack[stack.length - 1][key.trim()] = finalValue;
      }
    } else if (trimmedLine.startsWith('- ')) {
      // Handle array items
      const item = trimmedLine.substring(2).trim();
      let finalItem: any = item;
      
      // Remove quotes if present
      if ((item.startsWith('"') && item.endsWith('"')) || 
          (item.startsWith("'") && item.endsWith("'"))) {
        finalItem = item.slice(1, -1);
      }

      const parent = stack[stack.length - 1];
      const keys = Object.keys(parent);
      const lastKey = keys[keys.length - 1];
      
      if (!Array.isArray(parent[lastKey])) {
        parent[lastKey] = [];
      }
      parent[lastKey].push(finalItem);
    }
  }

  return result;
};

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
    cachedCVData = parseYAML(yamlContent) as CVData;
    return cachedCVData;
  } catch (error) {
    console.error('Failed to load CV data:', error);
    throw error;
  }
};

export const clearCVCache = (): void => {
  cachedCVData = null;
};
