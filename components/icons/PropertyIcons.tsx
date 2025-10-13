
import React from 'react';

const iconClass = "w-5 h-5 text-gray-500";

export const BedIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    </svg>
);

export const BathIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM3.5 14a2.5 2.5 0 00-2.5 2.5V18h11v-1.5a2.5 2.5 0 00-2.5-2.5h-6zm18.5 0a2.5 2.5 0 00-2.5 2.5V18H9.5v-1.5a2.5 2.5 0 00-2.5-2.5H1v0" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 18v2h14v-2" />
    </svg>
);

export const SqftIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4h4m12 4V4h-4M8 20H4v-4m12 0h4v-4" />
    </svg>
);
