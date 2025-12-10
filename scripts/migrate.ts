// Load environment variables from .env.local
import { config } from 'dotenv';
import { resolve } from 'path';

// Load .env.local file
config({ path: resolve(process.cwd(), '.env.local') });

import connectDB from '../lib/mongodb';
import BlogPost from '../models/BlogPost';
import Project from '../models/Project';
import { blogPosts } from '../data/blog';
import { portfolioProjects } from '../data/portfolio';

async function migrate() {
  try {
    console.log('🚀 Starting data migration...\n');
    console.log('Connecting to database...');
    await connectDB();
    console.log('✅ Connected to database!\n');

    // Migrate blog posts
    console.log('📝 Migrating blog posts...');
    let blogCount = 0;
    let blogSkipped = 0;
    
    for (const post of blogPosts) {
      const existing = await BlogPost.findOne({ slug: post.slug });
      if (existing) {
        console.log(`  ⏭️  Skipping existing: ${post.title}`);
        blogSkipped++;
        continue;
      }

      await BlogPost.create({
        id: post.id,
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        author: post.author,
        date: new Date(post.date),
        readTime: post.readTime,
        category: post.category,
        image: post.image,
        published: true,
        views: 0,
      });
      console.log(`  ✓ Migrated: ${post.title}`);
      blogCount++;
    }

    console.log(`\n📊 Blog Posts: ${blogCount} migrated, ${blogSkipped} skipped`);

    // Migrate portfolio projects
    console.log('\n🎨 Migrating portfolio projects...');
    let projectCount = 0;
    let projectSkipped = 0;
    
    for (const project of portfolioProjects) {
      const existing = await Project.findOne({ slug: project.slug });
      if (existing) {
        console.log(`  ⏭️  Skipping existing: ${project.title}`);
        projectSkipped++;
        continue;
      }

      // Exclude icon field (React component, can't be stored in DB)
      const { icon, ...projectData } = project;

      await Project.create({
        id: project.id,
        title: project.title,
        slug: project.slug,
        description: project.description,
        longDescription: project.longDescription,
        category: project.category,
        technologies: project.technologies,
        liveUrl: project.liveUrl,
        githubUrl: project.githubUrl,
        featured: project.featured,
        color: project.color,
        image: project.image,
        year: project.year,
        client: project.client,
        challenges: project.challenges,
        solutions: project.solutions,
        results: project.results,
        views: 0,
        clicks: 0,
      });
      console.log(`  ✓ Migrated: ${project.title}`);
      projectCount++;
    }

    console.log(`\n📊 Projects: ${projectCount} migrated, ${projectSkipped} skipped`);

    console.log('\n✅ Migration completed successfully!');
    console.log(`\n📈 Summary:`);
    console.log(`   - Blog Posts: ${blogCount} new, ${blogSkipped} existing`);
    console.log(`   - Projects: ${projectCount} new, ${projectSkipped} existing`);
    console.log(`   - Total: ${blogCount + projectCount} new items migrated`);
    
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Migration failed:', error);
    if (error instanceof Error) {
      console.error('Error details:', error.message);
      console.error('Stack:', error.stack);
    }
    process.exit(1);
  }
}

migrate();

