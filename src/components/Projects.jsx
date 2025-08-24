import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all')

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
            image: '/api/placeholder/400/250',
            category: 'fullstack',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            liveUrl: '#',
            githubUrl: '#',
            featured: true
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
            image: '/api/placeholder/400/250',
            category: 'frontend',
            technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
            liveUrl: '#',
            githubUrl: '#',
            featured: true
        },
        {
            id: 3,
            title: 'Weather Dashboard',
            description: 'A beautiful weather dashboard that displays current weather, forecasts, and interactive maps using weather APIs.',
            image: '/api/placeholder/400/250',
            category: 'frontend',
            technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
            liveUrl: '#',
            githubUrl: '#'
        },
        {
            id: 4,
            title: 'Blog CMS',
            description: 'A content management system for blogs with markdown support, SEO optimization, and admin dashboard.',
            image: '/api/placeholder/400/250',
            category: 'fullstack',
            technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Vercel'],
            liveUrl: '#',
            githubUrl: '#'
        },
        {
            id: 5,
            title: 'Portfolio Website',
            description: 'A modern, responsive portfolio website with smooth animations and dark mode support.',
            image: '/api/placeholder/400/250',
            category: 'frontend',
            technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
            liveUrl: '#',
            githubUrl: '#'
        },
        {
            id: 6,
            title: 'API Gateway',
            description: 'A microservices API gateway with authentication, rate limiting, and request routing capabilities.',
            image: '/api/placeholder/400/250',
            category: 'backend',
            technologies: ['Node.js', 'Express', 'Redis', 'Docker'],
            liveUrl: '#',
            githubUrl: '#'
        }
    ]

    const filters = [
        { id: 'all', label: 'All Projects' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend' },
        { id: 'fullstack', label: 'Full Stack' }
    ]

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter)

    return (
        <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        My <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${activeFilter === filter.id
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFilter}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg card-hover"
                            >
                                {/* Project Image */}
                                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                    <div className="text-white text-6xl font-bold opacity-20">
                                        {project.title.charAt(0)}
                                    </div>
                                    {project.featured && (
                                        <div className="absolute top-4 right-4 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                                            Featured
                                        </div>
                                    )}
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Project Links */}
                                    <div className="flex gap-4">
                                        <motion.a
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={project.liveUrl}
                                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg transition-colors duration-200"
                                        >
                                            Live Demo
                                        </motion.a>
                                        <motion.a
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={project.githubUrl}
                                            className="flex-1 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 text-center py-2 rounded-lg transition-colors duration-200"
                                        >
                                            GitHub
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* View More Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-secondary"
                    >
                        View More Projects
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects
