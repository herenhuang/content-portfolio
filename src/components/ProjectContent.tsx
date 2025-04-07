import { Project } from '../types/project';
import Tweet from './Tweet';
import Image from 'next/image';

interface ProjectContentProps {
  project?: Project;
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
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-light mb-2">{project.name}</h1>
        <div className="text-neutral-500">
          {project.type}, {project.year}
        </div>
      </div>
      
      {/* Content Grid */}
      <div className="grid grid-cols-2 gap-8">
        {/* Left Column - Text and Tweet */}
        <div className="space-y-8">
          <div className="prose prose-neutral max-w-none text-sm leading-relaxed">
            <p>{project.content.description}</p>
          </div>
          
          {project.content.tweetId && (
            <div className="scale-90 origin-top-left -ml-4">
              <Tweet id={project.content.tweetId} />
            </div>
          )}
        </div>

        {/* Right Column - Image */}
        {project.content.images && project.content.images[0] && (
          <div className="h-[600px] relative">
            <Image
              src={project.content.images[0].src}
              alt={project.content.images[0].alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        )}
      </div>
    </div>
  );
} 