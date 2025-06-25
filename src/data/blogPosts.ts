
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  slug: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Art of Clean Code: Lessons from the Trenches",
    excerpt: "After years of writing code, debugging nightmares, and refactoring legacy systems, I've learned that clean code isn't just about following rules—it's about empathy for future developers.",
    date: "March 15, 2024",
    slug: "clean-code-lessons",
    readTime: "8 min read",
    content: `# The Art of Clean Code: Lessons from the Trenches

After five years of professional software development, I've come to realize that writing clean code is less about following rigid rules and more about developing empathy—empathy for your future self, your teammates, and anyone who might touch your code in the months or years to come.

## What Makes Code "Clean"?

Clean code reads like well-written prose. It's not just about proper indentation or following naming conventions (though those matter). It's about creating code that tells a story, where the intent is clear and the complexity is managed thoughtfully.

Here are the principles I've found most valuable:

### 1. Names Should Reveal Intent

\`\`\`javascript
// Bad
const d = new Date();
const u = users.filter(u => u.a);

// Good
const currentDate = new Date();
const activeUsers = users.filter(user => user.isActive);
\`\`\`

### 2. Functions Should Do One Thing

The single responsibility principle isn't just for classes—it applies to functions too. If you can't describe what your function does without using the word "and," it's probably doing too much.

### 3. Comments Should Explain Why, Not What

Code should be self-documenting. Comments should provide context that the code itself cannot convey.

\`\`\`javascript
// Bad
// Increment i by 1
i++;

// Good
// Retry connection after brief delay to handle temporary network issues
await sleep(1000);
retryConnection();
\`\`\`

## The Real-World Impact

I learned this lesson the hard way when I inherited a codebase with functions spanning hundreds of lines, variables named \`data1\` and \`temp\`, and no documentation. What should have been a simple feature addition turned into a three-week archaeology expedition.

> "Indeed, the ratio of time spent reading versus writing is well over 10 to 1. We are constantly reading old code as part of the effort to write new code." - Robert C. Martin

## Practical Steps to Cleaner Code

1. **Start with good names** - Spend time thinking about variable and function names
2. **Keep functions small** - Aim for functions that fit on your screen
3. **Eliminate duplication** - DRY (Don't Repeat Yourself) is still relevant
4. **Write tests** - They serve as documentation and safety nets
5. **Refactor regularly** - Clean code is not a destination, it's a journey

## Conclusion

Clean code is an investment in your future productivity and your team's sanity. It might take a bit longer to write initially, but it pays dividends in reduced debugging time, easier feature additions, and fewer 2 AM production incidents.

Remember: you're not just writing code for the computer—you're writing it for humans. Make it count.`
  },
  {
    id: "2",
    title: "Building Scalable React Applications: Architecture Patterns That Work",
    excerpt: "Explore proven architectural patterns for React applications that can grow from prototype to production without falling apart. Learn from real-world examples and avoid common pitfalls.",
    date: "March 8, 2024",
    slug: "scalable-react-architecture",
    readTime: "12 min read",
    content: `# Building Scalable React Applications: Architecture Patterns That Work

Building a React application that can scale from a small prototype to a production system serving thousands of users requires thoughtful architecture from day one. I've seen too many projects start simple and beautiful, only to become unmaintainable messes as they grow.

## The Problem with "Just Start Coding"

When we start a new React project, it's tempting to jump straight into components and start building features. This works great for the first few weeks, but as the application grows, we start encountering problems:

- Components become massive and difficult to test
- State management becomes chaotic
- Business logic gets scattered throughout the UI
- Code reuse becomes nearly impossible

## Core Architectural Principles

### 1. Separation of Concerns

Keep your business logic separate from your UI logic. Your components should focus on rendering and user interactions, not on complex data transformations or API calls.

\`\`\`typescript
// Bad: Business logic mixed with UI
const UserProfile = () => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(data => {
        // Complex data transformation logic here
        const transformedUser = {
          ...data,
          fullName: \`\${data.firstName} \${data.lastName}\`,
          isVip: data.purchases > 1000
        };
        setUser(transformedUser);
      });
  }, []);

  return <div>{user?.fullName}</div>;
};

// Good: Separated concerns
const UserProfile = () => {
  const { user, isLoading } = useUser();
  
  if (isLoading) return <Spinner />;
  
  return <div>{user?.fullName}</div>;
};
\`\`\`

### 2. Custom Hooks for Logic Reuse

Custom hooks are React's way of sharing stateful logic between components. They're perfect for encapsulating data fetching, form handling, and other common patterns.

### 3. Component Composition Over Props Drilling

Instead of passing props through multiple levels, use composition patterns and context where appropriate.

## Folder Structure That Scales

Here's a folder structure I've found works well for teams:

\`\`\`
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI elements (Button, Input, etc.)
│   └── common/         # Common business components
├── features/           # Feature-based organization
│   ├── auth/
│   ├── dashboard/
│   └── settings/
├── hooks/              # Custom hooks
├── services/           # API calls and external services
├── utils/              # Pure utility functions
└── types/              # TypeScript type definitions
\`\`\`

## State Management Strategy

Not every application needs Redux. Here's my decision tree:

1. **Local state** - For component-specific data
2. **Context** - For sharing data across a component tree
3. **URL state** - For data that should be shareable/bookmarkable
4. **Server state** - For data from APIs (use React Query or SWR)
5. **Global state** - Only when the above aren't sufficient

## Testing Strategy

A scalable application needs a solid testing strategy:

- **Unit tests** for pure functions and custom hooks
- **Integration tests** for feature workflows
- **End-to-end tests** for critical user journeys

## Key Takeaways

1. **Plan your architecture early** - It's easier to start with good patterns than to refactor later
2. **Keep components small and focused** - They should have a single responsibility
3. **Invest in developer experience** - Good tooling and patterns make the team more productive
4. **Test the right things** - Focus on behavior, not implementation details

Building scalable React applications is as much about discipline as it is about technical knowledge. Start with good patterns, and your future self will thank you.`
  },
  {
    id: "3",
    title: "TypeScript Tips: Advanced Patterns for Better Developer Experience",
    excerpt: "Discover advanced TypeScript patterns that can dramatically improve your development workflow. From utility types to conditional types, learn how to leverage TypeScript's type system effectively.",
    date: "February 28, 2024",
    slug: "typescript-advanced-patterns",
    readTime: "10 min read",
    content: `# TypeScript Tips: Advanced Patterns for Better Developer Experience

TypeScript has transformed how I write JavaScript. Beyond basic type annotations, there's a rich type system that can catch bugs at compile time, improve IDE support, and make refactoring safer. Here are some advanced patterns I use daily.

## Utility Types That Save Time

TypeScript comes with built-in utility types that can save you from writing repetitive type definitions.

### Pick and Omit

\`\`\`typescript
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

// Create a type for API responses (excluding sensitive data)
type PublicUser = Omit<User, 'password'>;

// Create a type for user creation (excluding generated fields)
type CreateUserInput = Pick<User, 'name' | 'email' | 'password'>;
\`\`\`

### Partial for Updates

\`\`\`typescript
type UpdateUserInput = Partial<Pick<User, 'name' | 'email'>>;
// Equivalent to: { name?: string; email?: string; }
\`\`\`

## Conditional Types for Flexibility

Conditional types allow you to create types that depend on other types.

\`\`\`typescript
type ApiResponse<T> = T extends string 
  ? { message: T } 
  : { data: T };

// Usage
type StringResponse = ApiResponse<string>;     // { message: string }
type UserResponse = ApiResponse<User>;         // { data: User }
\`\`\`

## Template Literal Types

One of my favorite TypeScript 4.1+ features:

\`\`\`typescript
type EventNames = 'click' | 'focus' | 'blur';
type EventHandlers = \`on\${Capitalize<EventNames>}\`;
// Result: 'onClick' | 'onFocus' | 'onBlur'

// Practical example for CSS-in-JS
type CSSProperties = 'margin' | 'padding' | 'border';
type ResponsiveProp<T extends string> = T | \`\${T}-sm\` | \`\${T}-md\` | \`\${T}-lg\`;
type ResponsiveCSS = ResponsiveProp<CSSProperties>;
// Result: 'margin' | 'margin-sm' | 'margin-md' | ... etc
\`\`\`

## Brand Types for Type Safety

Sometimes you need to distinguish between values that have the same runtime type but different semantic meanings:

\`\`\`typescript
type UserId = string & { readonly brand: unique symbol };
type ProductId = string & { readonly brand: unique symbol };

const createUserId = (id: string): UserId => id as UserId;
const createProductId = (id: string): ProductId => id as ProductId;

// This prevents accidentally mixing up IDs
function getUser(userId: UserId) { /* ... */ }
function getProduct(productId: ProductId) { /* ... */ }

const userId = createUserId('user-123');
const productId = createProductId('product-456');

getUser(userId);        // ✅ Works
getUser(productId);     // ❌ TypeScript error!
\`\`\`

## Mapped Types for Consistency

Create consistent patterns across your types:

\`\`\`typescript
type LoadingState<T> = {
  [K in keyof T]: {
    data: T[K];
    loading: boolean;
    error: string | null;
  }
};

type UserState = LoadingState<{
  profile: User;
  settings: UserSettings;
}>;
// Result: {
//   profile: { data: User; loading: boolean; error: string | null };
//   settings: { data: UserSettings; loading: boolean; error: string | null };
// }
\`\`\`

## Type Guards for Runtime Safety

Type guards help bridge the gap between compile-time and runtime type safety:

\`\`\`typescript
function isUser(obj: unknown): obj is User {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    'name' in obj &&
    'email' in obj
  );
}

// Usage
function processData(data: unknown) {
  if (isUser(data)) {
    // TypeScript knows 'data' is User here
    console.log(data.name);
  }
}
\`\`\`

## The Bottom Line

These patterns might seem complex at first, but they pay huge dividends in:

- **Catching bugs early** - Many runtime errors become compile-time errors
- **Better IDE support** - Autocomplete and refactoring work better
- **Self-documenting code** - Types serve as inline documentation
- **Safer refactoring** - TypeScript catches breaking changes

The key is to start simple and gradually adopt more advanced patterns as your codebase grows. TypeScript's type system is incredibly powerful, but you don't need to use every feature on day one.

Remember: the goal isn't to write the most clever types possible—it's to write types that make your code more maintainable and your development experience better.`
  }
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
