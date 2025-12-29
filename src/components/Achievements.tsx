import React from 'react';
import { Award } from 'lucide-react';
import Section from './Section';
import { achievements } from '../data/portfolio';

const Achievements: React.FC = () => {
    return (
        <Section id="achievements" className="bg-slate-50 dark:bg-slate-950">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Achievements & Certifications</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900 transition-colors"
                    >
                        <div className="p-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-500 shrink-0">
                            <Award size={20} />
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                            {item}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Achievements;
