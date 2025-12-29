import React from 'react';
import Section from './Section';
import { personalInfo } from '../data/portfolio';

const About: React.FC = () => {
    return (
        <Section id="about" className="bg-white dark:bg-slate-900">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
            <div className="max-w-4xl mx-auto text-lg text-slate-700 dark:text-slate-300 space-y-6 leading-relaxed">
                {personalInfo.about.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </Section>
    );
};

export default About;
