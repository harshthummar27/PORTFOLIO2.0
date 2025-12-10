export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Next.js 14 App Router",
    excerpt: "Learn how to build modern web applications using Next.js 14's new App Router and React Server Components.",
    content: `Next.js 14 introduced the App Router, a revolutionary approach to building React applications. This new routing system is built on React Server Components, providing better performance and developer experience.

## What is the App Router?

The App Router is Next.js's new file-system based router that uses React Server Components by default. It allows you to build applications with better performance, smaller client bundles, and improved developer experience.

## Key Features

### Server Components
Server Components allow you to fetch data directly in your components without needing to use \`getServerSideProps\` or \`getStaticProps\`. This reduces the amount of JavaScript sent to the client and improves performance.

### Layouts
The App Router introduces a new \`layout.tsx\` file that allows you to create shared layouts that persist across routes. This is perfect for navigation, headers, and footers.

### Loading States
With the App Router, you can create loading states using the \`loading.tsx\` file. This provides a better user experience while data is being fetched.

### Error Handling
Error boundaries are now easier to implement with the \`error.tsx\` file. This allows you to catch and handle errors gracefully.

## Getting Started

To start using the App Router, you need to create an \`app\` directory in your Next.js project. Inside this directory, you can create routes using folders and files.

The App Router is the future of Next.js development, and it's worth learning if you want to build modern, performant web applications.`,
    author: "Harsh Thummar",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Web Development",
    slug: "getting-started-with-nextjs-14",
    image: "/images/Blog/web.jpg",
  },
  {
    id: 2,
    title: "Building Scalable React Applications",
    excerpt: "Best practices and patterns for building large-scale React applications that are maintainable and performant.",
    content: `Building scalable React applications requires careful planning and the use of best practices. In this article, we'll explore key patterns and techniques that will help you build applications that can grow with your needs.

## Component Architecture

### Component Composition
One of the most important principles in React is component composition. By breaking down your UI into smaller, reusable components, you can build more maintainable applications.

### Custom Hooks
Custom hooks allow you to extract component logic into reusable functions. This helps reduce code duplication and makes your components easier to test.

## State Management

### Context API
For smaller applications, the Context API can be sufficient for state management. However, for larger applications, you might want to consider using a state management library like Redux or Zustand.

### Server State
For server state, consider using libraries like React Query or SWR. These libraries provide excellent caching, synchronization, and error handling out of the box.

## Performance Optimization

### Code Splitting
Use \`React.lazy()\` and \`Suspense\` to split your code into smaller chunks. This reduces the initial bundle size and improves load times.

### Memoization
Use \`React.memo()\`, \`useMemo()\`, and \`useCallback()\` to prevent unnecessary re-renders. However, use these tools judiciously, as overuse can actually hurt performance.

## Testing

Writing tests is crucial for maintaining large applications. Use tools like Jest and React Testing Library to write comprehensive tests for your components.

By following these practices, you can build React applications that are scalable, maintainable, and performant.`,
    author: "Harsh Thummar",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "React",
    slug: "building-scalable-react-applications",
    image: "/images/Blog/react.jpg",
  },
  {
    id: 3,
    title: "Laravel Best Practices for API Development",
    excerpt: "Explore advanced Laravel techniques for building robust RESTful APIs with authentication and validation.",
    content: `Laravel is an excellent framework for building RESTful APIs. In this article, we'll explore best practices for building robust, secure, and maintainable APIs with Laravel.

## API Structure

### RESTful Conventions
Follow RESTful conventions for your API endpoints. Use proper HTTP methods (GET, POST, PUT, DELETE) and status codes to make your API intuitive and predictable.

### API Versioning
Consider versioning your API from the start. This allows you to make breaking changes without affecting existing clients. You can version your API using URL prefixes or headers.

## Authentication

### Laravel Sanctum
Laravel Sanctum is perfect for SPA and mobile applications. It provides a simple way to authenticate users and issue API tokens.

### Laravel Passport
For more complex scenarios, Laravel Passport provides a full OAuth2 server implementation. This is ideal if you need to support third-party applications.

## Validation

### Form Requests
Use Form Requests for validation. This keeps your controllers clean and makes validation logic reusable.

### API Resources
Use API Resources to transform your models into JSON responses. This gives you fine-grained control over what data is returned to clients.

## Error Handling

### Consistent Error Responses
Return consistent error responses across your API. Use a standard format for errors, including error codes and messages.

### Exception Handling
Use Laravel's exception handling to catch and format errors appropriately. Consider using custom exceptions for domain-specific errors.

## Performance

### Eager Loading
Use eager loading to prevent N+1 query problems. Use \`with()\` to load relationships efficiently.

### Caching
Implement caching for frequently accessed data. Laravel provides excellent caching support out of the box.

### Rate Limiting
Implement rate limiting to protect your API from abuse. Laravel makes this easy with middleware.

By following these best practices, you can build Laravel APIs that are secure, performant, and maintainable.`,
    author: "Harsh Thummar",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Backend",
    slug: "laravel-best-practices-api",
    image: "/images/Blog/backend.jpg",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostById(id: number): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}

