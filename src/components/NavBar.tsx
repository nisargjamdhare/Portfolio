import React, { useState, useEffect } from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { resolveAssetUrl } from '../data/projects';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Overview', href: '#home' },
  { id: 'experience', label: 'Journey', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'credentials', label: 'Credentials', href: '#credentials' },
];

const TRACKED_SECTIONS = ['home', 'experience', 'projects', 'skills', 'credentials', 'connect'];

export const NavBar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('home');
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 28);

      const scrollPosition = window.scrollY + 180;
      for (let i = TRACKED_SECTIONS.length - 1; i >= 0; i--) {
        const sectionId = TRACKED_SECTIONS[i];
        const section = document.getElementById(sectionId);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveLink(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (id: string) => {
    setActiveLink(id);
    setMobileMenuOpen(false);
  };

  const resumeHref = resolveAssetUrl(PROFILE_DATA.resumePath);

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <div className="container-shell site-header__inner">
        <a
          href="#home"
          className="brand-link"
          onClick={() => handleNavClick('home')}
          aria-label={`${PROFILE_DATA.name} — Home`}
        >
          <span className="brand-monogram" aria-hidden="true">
            NJ
          </span>
          <span className="brand-text">
            <span className="brand-name">{PROFILE_DATA.name}</span>
            <span className="brand-role">Full-Stack · AI &amp; Cloud</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <ul className="nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`nav-link-item ${activeLink === item.id ? 'nav-link-item--active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <div className="header-socials" aria-label="Social profiles">
            {PROFILE_DATA.socials.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                aria-label={social.label}
                title={social.label}
              >
                {social.id === 'github' && (
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.92.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11.05 11.05 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                  </svg>
                )}
                {social.id === 'linkedin' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
                  </svg>
                )}
                {social.id === 'hackerrank' && (
                  <span className="mono-badge" aria-hidden="true">
                    HR
                  </span>
                )}
              </a>
            ))}
          </div>

          <a
            href={resumeHref}
            download={PROFILE_DATA.resumeDownloadName}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary-nav"
          >
            <span>Resume</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a
            href="#connect"
            className={`btn-primary-nav ${activeLink === 'connect' ? 'btn-primary-nav--active' : ''}`}
            onClick={() => handleNavClick('connect')}
          >
            Let&apos;s Connect
          </a>

          <button
            type="button"
            className="mobile-menu-toggle"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <span className={`hamburger-line ${mobileMenuOpen ? 'open-1' : ''}`} />
            <span className={`hamburger-line ${mobileMenuOpen ? 'open-2' : ''}`} />
            <span className={`hamburger-line ${mobileMenuOpen ? 'open-3' : ''}`} />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-navigation-drawer" className="mobile-drawer">
          <nav aria-label="Mobile navigation">
            <ul className="mobile-nav-list">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`mobile-nav-link ${activeLink === item.id ? 'mobile-nav-link--active' : ''}`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mobile-drawer-footer">
              <a
                href={resumeHref}
                download={PROFILE_DATA.resumeDownloadName}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-nav"
              >
                Download Resume (PDF)
              </a>
              <a
                href="#connect"
                className="btn-primary-nav"
                onClick={() => handleNavClick('connect')}
              >
                Let&apos;s Connect
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;

