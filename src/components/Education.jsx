import { motion } from 'framer-motion'

const Education = () => {
    const education = [
        {
            id: 1,
            degree: 'Bachelor of Computer Science',
            institution: 'Vistula University',
            period: '2021 - 2025',
            description: 'Graduated with honors. Specialized in software engineering and web development. Completed capstone project on modern web applications.',
            achievements: [
                'Graduated with First Class Honors (GPA: 3.8/4.0)',
                'Completed capstone project: "Business Loan API"',
                'Member of Computer Science Coding Club',
                'Participated in hackathons and coding competitions'
            ],
            courses: ['Data Structures & Algorithms', 'Web Development', 'Operating Systems', 'Software Engineering']
        },
        {
            id: 2,
            degree: 'High School Diploma',
            institution: 'Kut-Bilim High School',
            period: '2014 - 2019',
            description: 'Focused on STEM subjects with emphasis on computer science and mathematics. Led the school\'s programming club.',
            achievements: [
                'Among the top-performing students',
                'President of the class',
                'The winner of the National Bilimkana Olympiad in Mathematics',
                'National Olympiad in Mathematics'
            ],
            courses: ['Number Theory', 'Calculus', 'Informatics', 'Advanced Mathematics']
        },
        {
            id: 3,
            degree: 'Online Certifications',
            institution: 'Various Platforms',
            period: '2020 - Present',
            description: 'Continuous learning through online courses and certifications to stay updated with latest technologies.',
            achievements: [
                'Data Structures and Algorithms: Deep Dive Using Java - Udemy',
                'Spring Boot Course: Learn Spring Boot & Build Web APIs - Udemy',
                'The Complete Python Bootcamp From Zero to Hero in Python - Udemy',
                'AWS Cloud Practitioner - Amazon'
            ],
            courses: ['React.js', 'Spring Boot', 'JavaScript', 'Java', 'Python']
        }
    ]

    return (
        <section id="education" className="section-padding">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="gradient-text">Education</span> & Learning
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        My academic journey and continuous learning path that has shaped my technical foundation
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

                    <div className="space-y-12">
                        {education.map((edu, index) => (
                            <motion.div
                                key={edu.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                                {/* Content Card */}
                                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                                    }`}>
                                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                                        {/* Period Badge */}
                                        <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium mb-4">
                                            {edu.period}
                                        </div>

                                        {/* Degree and Institution */}
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                            {edu.degree}
                                        </h3>
                                        <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">
                                            {edu.institution}
                                        </p>

                                        {/* Description */}
                                        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                            {edu.description}
                                        </p>

                                        {/* Achievements */}
                                        <div className="mb-4">
                                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                                            <ul className="space-y-1">
                                                {edu.achievements.map((achievement, achievementIndex) => (
                                                    <li key={achievementIndex} className="flex items-start space-x-2">
                                                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                                                            {achievement}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Courses/Technologies */}
                                        <div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Courses:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {edu.courses.map((course) => (
                                                    <span
                                                        key={course}
                                                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                                                    >
                                                        {course}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education
