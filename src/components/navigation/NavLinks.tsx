import React from 'react';

interface NavItem {
  name: string;
  href: string;
}

interface NavLinksProps {
  navItems: NavItem[];
  className?: string;
  className2?: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ navItems, className }) => {
  return (
    <>
      {navItems.map((item, index) => (
        <li key={index} className={`${className}`}>
          <a href={item.href}>{item.name}</a>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
