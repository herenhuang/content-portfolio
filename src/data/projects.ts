import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'baggy',
    name: 'BAGGY',
    type: 'Video Series',
    year: 2024,
    content: {
      description: 'A video series exploring the intersection of streetwear and culture.',
    }
  },
  {
    id: 'tech-together',
    name: 'Tech Together',
    type: 'Event Series',
    year: 2023,
    content: {
      description: 'Community events bringing together diverse voices in technology.',
    }
  },
  {
    id: 'you-belong-in-tech',
    name: 'You Belong in Tech',
    type: 'Publication',
    year: 2023,
    content: {
      description: 'A guide for underrepresented individuals entering the tech industry.',
    }
  },
  {
    id: 'solana-portraits',
    name: 'Solana Portraits',
    type: 'Digital Art',
    year: 2023,
    content: {
      description: 'A series of digital portraits exploring blockchain culture.',
      tweetId: '1234567890'
    }
  },
  {
    id: 'india-dance',
    name: 'Balam Pichkari',
    type: 'Performance Video',
    year: 2023,
    content: {
      description: 'I went on a solo trip to India and decided to put this project together, that blends a variety of my interests of dance, travel, and art projects. Interesting that if I waited just a little bit longer, I may not have moved forward with it (knowing that AI could replicate this easily).',
      tweetId: '1651703013361238016',
      images: [
        {
          src: '/images/india-1.webp',
          alt: 'Balam Pichkari Project',
          width: 1600,
          height: 900
        }
      ]
    }
  },
  {
    id: 'waterloo-ig',
    name: 'Waterloo IG',
    type: 'Social Content',
    year: 2022,
    content: {
      description: 'Documentation of student life and culture at the University of Waterloo.',
    }
  },
  {
    id: 'linkedin-growth',
    name: 'LinkedIn Growth Series',
    type: 'Professional Content',
    year: 2022,
    content: {
      description: 'Strategies and insights for building a professional presence online.',
    }
  },
  {
    id: 'life-planning',
    name: 'Life Planning',
    type: 'Tutorial Video',
    year: 2022,
    content: {
      description: 'A guide to intentional living and personal development.',
    }
  },
  {
    id: 'product-platform',
    name: 'Product Platform',
    type: 'Digital Product',
    year: 2021,
    content: {
      description: 'A platform for product managers to share and learn.',
    }
  },
  {
    id: 'how-to-product',
    name: 'How to Product',
    type: 'eBook',
    year: 2021,
    content: {
      description: 'A comprehensive guide to product management.',
    }
  },
]; 