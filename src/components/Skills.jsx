import { motion } from 'framer-motion'

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend Development',
            skills: [
                { name: 'React', level: 90 },
                { name: 'JavaScript', level: 85 },
                { name: 'TypeScript', level: 80 },
                { name: 'HTML/CSS', level: 95 },
                { name: 'Tailwind CSS', level: 90 },
                { name: 'Bootstrap', level: 75 }
            ]
        },
        {
            title: 'Backend Development',
            skills: [
                { name: 'Java', level: 85 },
                { name: 'Spring Boot', level: 80 },
                { name: 'Spring Framework', level: 75 },
                { name: 'MySQL', level: 80 },
                { name: 'REST APIs', level: 85 },
                { name: 'Maven/Gradle', level: 70 }
            ]
        },
        {
            title: 'Tools & Others',
            skills: [
                { name: 'Git', level: 90 },
                { name: 'Docker', level: 70 },
                { name: 'AWS', level: 65 },
                { name: 'IntelliJ IDEA', level: 75 },
                { name: 'VSCode', level: 80 },
                { name: 'CI/CD', level: 70 }
            ]
        }
    ]

    return (
        <section id="skills" className="section-padding">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Here are the technologies and tools I work with to bring ideas to life
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                        >
                            <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>

                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                                                {skill.name}
                                            </span>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                                {skill.level}%
                                            </span>
                                        </div>

                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: skillIndex * 0.1 }}
                                                viewport={{ once: true }}
                                                className="h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Skills Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <h3 className="text-2xl font-bold text-center mb-8">Other Skills & Technologies</h3>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {[
                            'Redux', 'GraphQL', 'Firebase', 'Vercel', 'Netlify', 'Webpack',
                            'Babel', 'ESLint', 'Prettier', 'Storybook', 'Cypress', 'Selenium',
                            'Redis', 'C#', 'JWT', 'OAuth', 'Stripe', 'Python',
                            'JUnit', 'Mockito', 'Hibernate', 'JPA', 'Spring Security', 'Docker'
                        ].map((skill, index) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 text-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                            >
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    {skill}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills
