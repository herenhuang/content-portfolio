'use client';

import { useState } from 'react';
import { projects } from '../data/projects';
import ProjectTable from '../components/ProjectTable';
import ProjectContent from '../components/ProjectContent';
import { Project } from '../types/project';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | undefined>();

  const handleProjectSelect = (project: Project) => {
    if (project.externalUrl) {
      window.open(project.externalUrl, '_blank', 'noopener,noreferrer');
    } else {
      setSelectedProject(project);
    }
  };

  return (
    <main className="flex min-h-screen">
      {/* Left Panel - Project Table */}
      <div className="w-[30%] border-r border-neutral-200">
        {/* Navigation Header */}
        <div className="p-8 border-b border-neutral-200 space-y-2">
          <h1 className="text-2xl font-light">Helen Huang</h1>
          <p className="text-base text-neutral-600">Here you can see my work, beyond my resume.</p>
        </div>
        
        {/* Project Table */}
        <div className="p-8">
          <div className="text-xs mb-8">Selected works:</div>
          <ProjectTable 
            projects={projects} 
            selectedProjectId={selectedProject?.id}
            onProjectSelect={handleProjectSelect}
          />
        </div>
      </div>
      
      {/* Right Panel - Project Content */}
      <div className="w-[70%] p-12">
        <ProjectContent project={selectedProject} />
      </div>
    </main>
  );
}
