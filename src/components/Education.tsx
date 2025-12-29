import React from 'react';
import { GraduationCap } from 'lucide-react';
import Section from './Section';
import { education } from '../data/portfolio';

const Education: React.FC = () => {
    return (
        <Section id="education" className="bg-slate-50 dark:bg-slate-950">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Education</h2>
            <div className="max-w-4xl mx-auto space-y-8">
                {education.map((edu, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row gap-4 md:gap-8 items-start p-6 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow"
                    >
                        <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 shrink-0">
                            <GraduationCap size={24} />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{edu.institution}</h3>
                            <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-2">{edu.degree}</p>
                            <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                                <span>{edu.duration}</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 self-center"></span>
                                <span>{edu.gpa}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Education;
