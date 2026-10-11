import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container-shell site-footer__inner">
        <div className="site-footer__brand">
          <span className="brand-monogram" aria-hidden="true">
            NJ
          </span>
          <div>
            <div className="footer-name">{PROFILE_DATA.name}</div>
            <div className="footer-tagline">
              {PROFILE_DATA.role} · Node.js, TypeScript, React, AWS &amp; Applied AI
            </div>
          </div>
        </div>

        <div className="site-footer__links">
          {PROFILE_DATA.socials.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              {social.label}
            </a>
          ))}
          <a href={`mailto:${PROFILE_DATA.email}`} className="footer-link">
            Email
          </a>
        </div>

        <div className="site-footer__copy">
          &copy; {new Date().getFullYear()} {PROFILE_DATA.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

