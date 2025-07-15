import React from 'react';

interface NavLinkProps {
    href: string;
    label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => (
    <a
        href={href}
        className="relative px-3 py-2 text-foreground/80 hover:text-primary transition-all duration-300 ease-in-out group"
    >
        <span className="relative z-10">{label}</span>
        <div className="absolute inset-0 bg-primary/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out"></div>
    </a>
);

export default NavLink;