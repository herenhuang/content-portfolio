import { projects } from '@/data/projects'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Props = {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find(p => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Back Button */}
      <Link href="/" className="inline-flex items-center text-sm mb-8 hover:underline">
        ← Back to projects
      </Link>

      {/* Project Header */}
      <h1 className="text-3xl font-medium mb-2">{project.name}</h1>
      <p className="text-gray-600 mb-8">{project.description}</p>

      {/* Project Image */}
      <div className="relative aspect-video mb-8">
        <Image
          src={project.thumbnail}
          alt={project.name}
          fill
          className="object-cover rounded-sm"
        />
      </div>

      {/* Project Details */}
      <div className="prose max-w-none">
        <h2>About this project</h2>
        <p>
          This is a placeholder for the detailed project description. Each project page
          will have its own unique content, including multiple images, videos, and
          detailed descriptions as needed.
        </p>
      </div>
    </div>
  )
} 