import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import Section from './Section';
import { personalInfo } from '../data/portfolio';

const Contact: React.FC = () => {
    return (
        <Section id="contact" className="bg-slate-50 dark:bg-slate-950">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Get In Touch</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-6">
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
                    </p>

                    <div className="space-y-4">
                        <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-500 transition-colors group">
                            <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                <Mail size={20} />
                            </div>
                            <span className="text-slate-700 dark:text-slate-300 font-medium">{personalInfo.email}</span>
                        </a>

                        <div className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                            <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                                <Phone size={20} />
                            </div>
                            <span className="text-slate-700 dark:text-slate-300 font-medium">{personalInfo.phone}</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center space-y-6">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Connect Socially</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center justify-center p-6 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors gap-3"
                        >
                            <Github size={32} />
                            <span className="font-medium">GitHub</span>
                        </a>
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center justify-center p-6 rounded-xl bg-[#0077b5] text-white hover:bg-[#006399] transition-colors gap-3"
                        >
                            <Linkedin size={32} />
                            <span className="font-medium">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
