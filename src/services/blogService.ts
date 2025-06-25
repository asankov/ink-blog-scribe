// Simple front matter parser for browser environment
const parseFrontMatter = (content: string) => {
  const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontMatterRegex);
  
  if (!match) {
    return { data: {}, content };
  }
  
  const [, yamlString, markdownContent] = match;
  
  // Simple YAML parser for our specific use case
  const data: Record<string, string> = {};
  yamlString.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      data[key] = value;
    }
  });
  
  return { data, content: markdownContent };
};

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  slug: string;
  readTime: string;
}

export interface BlogPostFrontMatter {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  readTime: string;
}

// List of available article files - this would ideally be generated during build
const ARTICLE_FILES = [
  'clean-code-lessons.md',
  'scalable-react-architecture.md',
  'typescript-advanced-patterns.md',
];

let cachedPosts: BlogPost[] | null = null;

export const loadMarkdownFile = async (filename: string): Promise<string> => {
  const response = await fetch(`/articles/${filename}`);
  if (!response.ok) {
    throw new Error(`Failed to load article: ${filename}`);
  }
  return response.text();
};

export const parseMarkdownWithFrontMatter = (content: string, filename: string): BlogPost => {
  const { data, content: markdownContent } = parseFrontMatter(content);
  const frontMatter = data as BlogPostFrontMatter;
  
  // Generate ID from filename
  const id = filename.replace('.md', '');
  
  return {
    id,
    title: frontMatter.title,
    excerpt: frontMatter.excerpt,
    content: markdownContent,
    date: frontMatter.date,
    slug: frontMatter.slug,
    readTime: frontMatter.readTime,
  };
};

export const loadAllBlogPosts = async (): Promise<BlogPost[]> => {
  if (cachedPosts) {
    return cachedPosts;
  }

  try {
    const posts = await Promise.all(
      ARTICLE_FILES.map(async (filename) => {
        const content = await loadMarkdownFile(filename);
        return parseMarkdownWithFrontMatter(content, filename);
      })
    );

    // Sort posts by date (newest first)
    cachedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return cachedPosts;
  } catch (error) {
    console.error('Failed to load blog posts:', error);
    return [];
  }
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
  const posts = await loadAllBlogPosts();
  return posts.find(post => post.slug === slug);
};

// Clear cache when needed (useful for development)
export const clearCache = (): void => {
  cachedPosts = null;
}; 