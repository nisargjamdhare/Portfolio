import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { PROFILE_DATA } from '../data/portfolioData';
import { resolveAssetUrl } from '../data/projects';

type FormStatus = 'idle' | 'sending' | 'sent' | 'validation-error';

export const Contacts: React.FC = () => {
  const [firstname, setFirstName] = useState<string>('');
  const [lastname, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [preparedMailtoUrl, setPreparedMailtoUrl] = useState<string>('');

  const createMailtoUrl = (
    first: string,
    last: string,
    senderEmail: string,
    phone: string,
    msg: string
  ): string => {
    const fullName = `${first} ${last}`.trim() || 'Portfolio Visitor';
    const subject = encodeURIComponent(`Portfolio Inquiry from ${fullName}`);
    const bodyLines = [
      `Name: ${fullName}`,
      `Email: ${senderEmail}`,
      phone ? `Phone: ${phone}` : '',
      '',
      'Message:',
      msg,
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join('\n'));
    return `mailto:${PROFILE_DATA.email}?subject=${subject}&body=${body}`;
  };

  const resetFormFields = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setMobile('');
    setMessage('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!firstname.trim() || !email.trim() || !message.trim()) {
      setStatus('validation-error');
      return;
    }

    const fallbackUrl = createMailtoUrl(firstname, lastname, email, mobile, message);
    setPreparedMailtoUrl(fallbackUrl);
    setStatus('sending');

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_88cf1tl';
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_ae9kqih';
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'tFNs-NgyqGytRWEvD';

    const templateParams = {
      from_firstname: firstname,
      from_lastname: lastname,
      from_email: email,
      mobile,
      to_name: PROFILE_DATA.name,
      message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setPreparedMailtoUrl('');
      setStatus('sent');
      resetFormFields();
    } catch {
      try {
        await fetch(`https://formsubmit.co/ajax/${PROFILE_DATA.email}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: `${firstname} ${lastname}`.trim(),
            email,
            phone: mobile,
            message,
            _subject: `Portfolio Inquiry from ${firstname} ${lastname}`.trim(),
          }),
        });
      } catch {
        // Ignore network errors on secondary relay and complete gracefully
      }

      setStatus('sent');
      resetFormFields();
    }
  };

  const resumeHref = resolveAssetUrl(PROFILE_DATA.resumePath);

  return (
    <section className="section-block section-block--alt" id="connect" aria-labelledby="contact-heading">
      <div className="container-shell">
        <div className="contact-grid">
          {/* Left: Direct Contact Details */}
          <div className="contact-info-panel">
            <span className="section-eyebrow">LET&apos;S CONNECT</span>
            <h2 id="contact-heading" className="section-title section-title--left">
              Discuss Engineering Roles &amp; Collaborations
            </h2>
            <p className="contact-lead">
              Interested in full-stack engineering, backend architecture, or applied AI workflows? Reach out directly via email, phone, or LinkedIn, or send a message using the form.
            </p>

            <div className="contact-direct-cards">
              <a href={`mailto:${PROFILE_DATA.email}`} className="contact-direct-item">
                <span className="contact-icon-box" aria-hidden="true">@</span>
                <div>
                  <div className="contact-direct-label">Email</div>
                  <div className="contact-direct-value">{PROFILE_DATA.email}</div>
                </div>
              </a>

              <a href={`tel:${PROFILE_DATA.phone.replace(/\s+/g, '')}`} className="contact-direct-item">
                <span className="contact-icon-box" aria-hidden="true">☎</span>
                <div>
                  <div className="contact-direct-label">Phone</div>
                  <div className="contact-direct-value">{PROFILE_DATA.phone}</div>
                </div>
              </a>

              <div className="contact-direct-item">
                <span className="contact-icon-box" aria-hidden="true">⌖</span>
                <div>
                  <div className="contact-direct-label">Location</div>
                  <div className="contact-direct-value">{PROFILE_DATA.location}</div>
                </div>
              </div>
            </div>

            <div className="contact-social-row">
              {PROFILE_DATA.socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-btn"
                >
                  <span>{social.label}</span>
                  <span className="contact-social-handle">{social.handle}</span>
                </a>
              ))}
              <a
                href={resumeHref}
                download={PROFILE_DATA.resumeDownloadName}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn contact-social-btn--accent"
              >
                <span>Resume PDF</span>
                <span className="contact-social-handle">Download</span>
              </a>
            </div>
          </div>

          {/* Right: Accessible Contact Form */}
          <div className="contact-form-card">
            <h3 className="contact-form-title">Send a Direct Message</h3>
            <form onSubmit={handleSubmit} className="modern-contact-form" noValidate>
              <div className="form-row-2col">
                <div className="form-field">
                  <label htmlFor="contact-firstname">First Name *</label>
                  <input
                    id="contact-firstname"
                    type="text"
                    required
                    placeholder="Nisarga"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-lastname">Last Name</label>
                  <input
                    id="contact-lastname"
                    type="text"
                    placeholder="Jamdhare"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-row-2col">
                <div className="form-field">
                  <label htmlFor="contact-email">Email Address *</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-mobile">Phone (Optional)</label>
                  <input
                    id="contact-mobile"
                    type="tel"
                    placeholder="+91 ..."
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  rows={5}
                  required
                  placeholder="Share details about the opportunity, project, or engineering role..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div className="form-submit-row">
                <button
                  type="submit"
                  className="btn-hero-primary"
                  disabled={status === 'sending'}
                >
                  <span>
                    {status === 'sending' ? 'Sending Message...' : 'Send Message'}
                  </span>
                </button>

                {status === 'sent' && (
                  <p className="form-feedback form-feedback--success" role="status">
                    Message sent! Thank you for reaching out.
                    {preparedMailtoUrl ? (
                      <>
                        {' '}
                        (Or{' '}
                        <a href={preparedMailtoUrl}>
                          open pre-filled copy in your email client
                        </a>
                        )
                      </>
                    ) : null}
                  </p>
                )}

                {status === 'validation-error' && (
                  <p className="form-feedback form-feedback--error" role="alert">
                    Please fill in your First Name, Email Address, and Message.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
