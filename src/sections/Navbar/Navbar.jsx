import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { useTheme } from '../../assets/Common/themeContext';

function Navbar() {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky navbar height (70px)
      const y = element.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false); // Close mobile menu on click
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100; // Offset for sticky nav detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          if (activeSection !== section.id) {
            setActiveSection(section.id);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, navLinks]);

  // Navbar theme is opposite of current theme
  const navbarThemeClass = theme === 'light' ? styles.navDark : styles.navLight;

  return (
    <nav className={`${styles.navbar} ${navbarThemeClass}`}>
      <div className={styles.navContainer}>
        <div 
          className={styles.logo}
          onClick={(e) => scrollToSection(e, 'hero')}
        >
          Deepak<span className={styles.accent}>.</span>dev
        </div>
        
        {/* Hamburger Menu Icon */}
        <div 
          className={styles.hamburger} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`${styles.bar} ${isMobileMenuOpen ? styles.open1 : ''}`}></div>
          <div className={`${styles.bar} ${isMobileMenuOpen ? styles.open2 : ''}`}></div>
          <div className={`${styles.bar} ${isMobileMenuOpen ? styles.open3 : ''}`}></div>
        </div>

        <ul className={`${styles.navItems} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id} className={styles.navItem}>
              <a 
                href={`#${link.id}`} 
                onClick={(e) => scrollToSection(e, link.id)}
                className={`${styles.navLink} ${activeSection === link.id ? styles.active : ''}`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
