import React from 'react';
import { personalInfo } from '../data/portfolio';

const Footer: React.FC = () => {
    return (
        <footer className="py-8 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-center">
            <p className="text-slate-500 dark:text-slate-400">
                © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-sm text-slate-400 dark:text-slate-500 mt-2">
                Built with React, Tailwind CSS & Framer Motion
            </p>
        </footer>
    );
};

export default Footer;
