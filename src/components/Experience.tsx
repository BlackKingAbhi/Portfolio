import React from 'react';
import { Briefcase } from 'lucide-react';
import Section from './Section';
import { experience } from '../data/portfolio';

const Experience: React.FC = () => {
    return (
        <Section id="experience" className="bg-white dark:bg-slate-900">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience</h2>
            <div className="max-w-4xl mx-auto relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-0 space-y-12">
                {experience.map((exp, index) => (
                    <div key={index} className="relative pl-8 md:pl-0">
                        {/* Timeline Dot */}
                        <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500 ring-4 ring-white dark:ring-slate-900"></div>

                        <div className="md:grid md:grid-cols-[200px_1fr] md:gap-8">
                            <div className="mb-4 md:mb-0 md:text-right">
                                <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-sm font-medium text-slate-600 dark:text-slate-400">
                                    {exp.duration}
                                </span>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{exp.role}</h3>
                                <h4 className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4 flex items-center gap-2">
                                    <Briefcase size={18} />
                                    {exp.company}
                                </h4>

                                <ul className="space-y-2">
                                    {exp.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600 shrink-0"></span>
                                            <span className="leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
