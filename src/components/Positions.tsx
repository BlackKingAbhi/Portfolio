import React from 'react';
import { Users } from 'lucide-react';
import Section from './Section';
import { positions } from '../data/portfolio';

const Positions: React.FC = () => {
    return (
        <Section id="positions" className="bg-white dark:bg-slate-900">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Positions of Responsibility</h2>
            <div className="max-w-4xl mx-auto">
                {positions.map((pos, index) => (
                    <div
                        key={index}
                        className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border border-slate-100 dark:border-slate-800 shadow-sm text-center md:text-left"
                    >
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6">
                            <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                                <Users size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{pos.role}</h3>
                                <p className="text-lg text-indigo-600 dark:text-indigo-400 font-medium">{pos.organization}</p>
                            </div>
                        </div>

                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {pos.description.map((desc, i) => (
                                <li key={i} className="flex items-center gap-2 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></div>
                                    <span className="text-sm font-medium">{desc}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Positions;
