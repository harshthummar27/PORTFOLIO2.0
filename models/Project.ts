import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProject extends Document {
  id: number;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  category: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  color: string;
  image: string;
  year?: string;
  client?: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
  views: number;
  clicks: number;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    longDescription: { type: String },
    category: { type: String, required: true },
    technologies: [{ type: String }],
    liveUrl: { type: String, required: true },
    githubUrl: { type: String, required: true },
    featured: { type: Boolean, default: false },
    color: { type: String, required: true },
    image: { type: String, required: true },
    year: { type: String },
    client: { type: String },
    challenges: [{ type: String }],
    solutions: [{ type: String }],
    results: [{ type: String }],
    views: { type: Number, default: 0 },
    clicks: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

// Create indexes for faster queries
ProjectSchema.index({ slug: 1 });
ProjectSchema.index({ featured: 1 });
ProjectSchema.index({ category: 1 });

const Project: Model<IProject> =
  mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);

export default Project;

