import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IBlogPost extends Document {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: Date;
  readTime: string;
  category: string;
  image?: string;
  published: boolean;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

const BlogPostSchema = new Schema<IBlogPost>(
  {
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true, default: 'Harsh Thummar' },
    date: { type: Date, required: true, default: Date.now },
    readTime: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String },
    published: { type: Boolean, default: true },
    views: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

// Create indexes for faster queries
BlogPostSchema.index({ slug: 1 });
BlogPostSchema.index({ published: 1, date: -1 });
BlogPostSchema.index({ category: 1 });

const BlogPost: Model<IBlogPost> =
  mongoose.models.BlogPost || mongoose.model<IBlogPost>('BlogPost', BlogPostSchema);

export default BlogPost;

