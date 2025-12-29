import React from 'react';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from './Section';
import { projects } from '../data/portfolio';

const Projects: React.FC = () => {
    return (
        <Section id="projects" className="bg-slate-50 dark:bg-slate-950">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects & Research</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: [1, 1.05, 1] }}
                        transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-default"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                                aria-label="View Project"
                            >
                                <Github size={20} />
                            </a>
                        </div>

                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.techStack.map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
