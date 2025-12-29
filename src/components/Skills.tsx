import React from 'react';
import Section from './Section';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
    return (
        <Section id="skills" className="bg-white dark:bg-slate-900">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(skills).map(([category, items]) => (
                    <div
                        key={category}
                        className="p-6 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800"
                    >
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
                            {category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {items.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1.5 rounded-lg text-sm font-medium bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
