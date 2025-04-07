import { Project } from '../types/project';
import Tweet from './Tweet';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectContentProps {
  project?: Project;
}

function renderDescription(description: string) {
  // Simple markdown link regex: [text](url)
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = description.split(linkRegex);
  
  return parts.map((part, i) => {
    if (i % 3 === 1) {
      // This is the link text
      const url = parts[i + 1];
      return (
        <a 
          key={i} 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 hover:text-black underline underline-offset-4"
        >
          {part}
        </a>
      );
    } else if (i % 3 === 0) {
      // This is regular text
      return <span key={i}>{part}</span>;
    }
    // Skip URLs (i % 3 === 2)
    return null;
  });
}

export default function ProjectContent({ project }: ProjectContentProps) {
  if (!project) {
    return (
      <div className="text-neutral-500">
        Select a project to view details
      </div>
    );
  }

  return (
    <div className="w-full h-screen overflow-y-auto">
      {/* Text Content */}
      <div className="px-12 pt-12 pb-6">
        {/* Project Info */}
        <div className="mb-12">
          <h1 className="text-2xl font-light mb-2">{project.name}</h1>
          <div className="text-neutral-500">
            {project.type}, {project.year}
          </div>
        </div>
        
        {/* Description */}
        <div className="prose prose-neutral max-w-none text-sm leading-relaxed">
          {project.content?.description && renderDescription(project.content.description)}
        </div>
      </div>

      {/* Images */}
      {project.content?.images?.map((image, index) => (
        <div key={index} className="relative h-[600px]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover object-center"
            sizes="50vw"
            priority={index === 0}
          />
        </div>
      ))}
      
      {/* Tweet */}
      <div className="px-12 pt-6">
        {project.content?.tweetId && (
          <div className="transform scale-90 origin-top-left -ml-6">
            <Tweet id={project.content.tweetId} />
          </div>
        )}
      </div>
    </div>
  );
} 