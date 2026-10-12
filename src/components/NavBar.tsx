import React, { useState, useEffect } from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { resolveAssetUrl } from '../data/projects';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

export type PortfolioTheme = 'carbon' | 'light' | 'emerald';

const THEME_OPTIONS: { id: PortfolioTheme; label: string }[] = [
  { id: 'carbon', label: 'Carbon' },
  { id: 'light', label: 'Ivory' },
  { id: 'emerald', label: 'Titanium' },
];

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
  const [theme, setTheme] = useState<PortfolioTheme>('carbon');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

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
          <div className="theme-switcher-group" role="group" aria-label="Color theme selector">
            {THEME_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={`theme-pill-btn ${theme === opt.id ? 'theme-pill-btn--active' : ''}`}
                onClick={() => setTheme(opt.id)}
                title={`Switch to ${opt.label} theme`}
              >
                <span
                  className={`theme-pill-dot theme-pill-dot--${opt.id}`}
                  aria-hidden="true"
                />
                <span>{opt.label}</span>
              </button>
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
