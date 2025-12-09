import { Globe, Briefcase, TrendingUp } from "lucide-react";

export interface PortfolioProject {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  icon: any;
  color: string;
  image: string;
  slug: string;
  year?: string;
  client?: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "VettedPool",
    slug: "vettedpool",
    description:
      "A comprehensive job portal platform connecting job seekers with employers, featuring advanced search, application tracking, and employer dashboard.",
    longDescription:
      "VettedPool is a full-stack job portal application built with React and Laravel. The platform provides a seamless experience for both job seekers and employers. Features include user authentication, job posting and management, advanced search and filtering, application tracking, resume upload, employer dashboard, candidate management, email notifications, and responsive design. The platform helps streamline the hiring process and connects talented professionals with opportunities.",
    category: "Full-Stack",
    technologies: [
      "React",
      "Laravel",
      "PHP",
      "MySQL",
      "REST API",
      "Tailwind CSS",
    ],
    liveUrl: "https://vettedpool.com",
    githubUrl: "https://github.com",
    featured: true,
    icon: Briefcase,
    color: "from-purple-500 to-blue-500",
    image: "/images/vettedpool.png",
    year: "2024",
    client: "Job Portal Platform",
    challenges: [
      "Handling large number of job listings and applications",
      "Real-time application status updates",
      "Efficient search and filtering system",
    ],
    solutions: [
      "Implemented pagination and caching for performance",
      "Built real-time notification system",
      "Created optimized database queries with indexing",
    ],
    results: [
      "Improved job search efficiency",
      "Better user experience for both job seekers and employers",
      "Streamlined application process",
    ],
  },
  {
    id: 2,
    title: "HSFIN",
    slug: "hsfin",
    description:
      "A personal finance management application for tracking expenses, income, budgets, and financial goals with comprehensive analytics.",
    longDescription:
      "HSFIN is a personal finance management application built with React.js, Node.js, and MongoDB Atlas. The platform helps users manage their finances effectively with features including expense tracking, income management, budget creation and monitoring, financial goal setting, transaction categorization, detailed analytics and reports, data visualization with charts, secure user authentication, and cloud storage with MongoDB Atlas. The application provides insights into spending patterns and helps users achieve their financial goals.",
    category: "Full-Stack",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB Atlas",
      "Express",
      "JWT",
      "Chart.js",
    ],
    liveUrl: "https://hsfin.vercel.app/",
    githubUrl: "https://github.com",
    featured: true,
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
    image: "/images/HSFIN.png",
    year: "2024",
    client: "Personal Finance Platform",
    challenges: [
      "Secure handling of financial data",
      "Real-time budget calculations",
      "Scalable data storage with MongoDB Atlas",
    ],
    solutions: [
      "Implemented JWT authentication and data encryption",
      "Built efficient calculation engine for budgets",
      "Optimized MongoDB queries and used Atlas cloud features",
    ],
    results: [
      "Improved financial tracking and awareness",
      "Better budget management for users",
      "Secure and reliable data storage",
    ],
  },
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((project) => project.slug === slug);
}

export function getProjectById(id: number): PortfolioProject | undefined {
  return portfolioProjects.find((project) => project.id === id);
}
