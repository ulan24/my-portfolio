import { motion } from 'framer-motion'

const About = () => {
    const stats = [
        { number: '4+', label: 'Years Learning' },
        { number: '15+', label: 'Projects Built' },
        { number: '3.8', label: 'GPA Score' },
        { number: '100%', label: 'Passion for Code' }
    ]

    return (
        <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Get to know me better and understand my journey from student to aspiring software developer
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Image and Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Profile Image */}
                        <div className="relative">
                            <div className="w-80 h-80 mx-auto relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-20"></div>
                                <div className="relative w-full h-full bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center">
                                    <svg className="w-32 h-32 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
                                >
                                    <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                                    <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold mb-4">
                            Recent CS Graduate & Aspiring Software Developer
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            I'm a passionate Computer Science graduate with a strong foundation in software development
                            and a drive to create meaningful digital solutions. My academic journey has equipped me
                            with solid theoretical knowledge and practical skills in modern web technologies.
                        </p>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Throughout my studies, I've worked on various projects that have helped me develop
                            expertise in both frontend and backend development. I believe in writing clean,
                            maintainable code and creating user experiences that are both functional and intuitive.
                        </p>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            As a recent graduate, I'm excited to bring my fresh perspective and eagerness to learn
                            to real-world projects. I'm constantly exploring new technologies, building personal
                            projects, and preparing myself for the challenges of professional software development.
                        </p>

                        {/* Key Points */}
                        <div className="grid sm:grid-cols-2 gap-4 mt-8">
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                <span className="text-gray-700 dark:text-gray-300">Web Development</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                <span className="text-gray-700 dark:text-gray-300">Problem Solving</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                <span className="text-gray-700 dark:text-gray-300">Quick Learning</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                <span className="text-gray-700 dark:text-gray-300">Academic Excellence</span>
                            </div>
                        </div>

                        {/* Download CV Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary mt-8"
                        >
                            Download CV
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
