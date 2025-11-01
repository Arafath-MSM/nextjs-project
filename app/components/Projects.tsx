import Image from 'next/image';

const projects = [
  {
    title: 'Project 1',
    description: 'A full-stack web application built with Next.js and Node.js',
    image: '/project1.jpg',
    technologies: ['Next.js', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    title: 'Project 2',
    description: 'E-commerce platform with real-time updates',
    image: '/project2.jpg',
    technologies: ['React', 'Firebase', 'Stripe'],
    link: '#'
  },
  {
    title: 'Project 3',
    description: 'Mobile-first responsive web application',
    image: '/project3.jpg',
    technologies: ['React Native', 'Express', 'PostgreSQL'],
    link: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-zinc-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-blue-600 hover:text-blue-500 font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}