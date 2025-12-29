import React from 'react';
import { Download, FileText } from 'lucide-react';
import Section from './Section';
import { personalInfo } from '../data/portfolio';

const Resume: React.FC = () => {
    return (
        <Section id="resume" className="bg-blue-600 dark:bg-blue-900 text-white">
            <div className="text-center max-w-3xl mx-auto">
                <div className="inline-block p-4 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                    <FileText size={40} className="text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to know more?</h2>
                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                    Check out my detailed resume to see my full professional journey and technical expertise.
                </p>
                <a
                    href={personalInfo.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-blue-600 font-bold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
                >
                    <Download size={20} />
                    Download Resume
                </a>
            </div>
        </Section>
    );
};

export default Resume;
