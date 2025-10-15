import React from 'react';

const iconClass = "w-5 h-5 text-gray-600";

export const BedIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5V18M3 18V7.5M3 7.5h18V5.25A2.25 2.25 0 0018.75 3h-13.5A2.25 2.25 0 003 5.25v2.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 9.75V12h13.5V9.75" />
    </svg>
);

export const BathIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v16.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V3.75M9 8.25h6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-3 0v3a1.5 1.5 0 001.5 1.5z" />
    </svg>
);

export const ParkingIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM16.5 19.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 12.75V15h13.5v-2.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 6H5.25C4.56 6 4.5 6.56 4.5 7.25v5.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 6l3-3h3l3 3" />
    </svg>
);

export const HeartIcon: React.FC<{ isFilled?: boolean }> = ({ isFilled = false }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill={isFilled ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
);
