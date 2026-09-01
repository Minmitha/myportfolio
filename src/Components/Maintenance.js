import React from 'react';

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #0f172a 0%, #111827 35%, #1f2937 100%)',
    color: '#f8fafc',
    padding: '24px',
    boxSizing: 'border-box',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    maxWidth: '620px',
    width: '100%',
    textAlign: 'center',
    padding: '48px 32px',
    borderRadius: '20px',
    background: 'rgba(15, 23, 42, 0.75)',
    border: '1px solid rgba(148, 163, 184, 0.25)',
    boxShadow: '0 20px 50px rgba(15, 23, 42, 0.5)',
    backdropFilter: 'blur(8px)',
  },
  badge: {
    display: 'inline-block',
    background: '#f59e0b',
    color: '#111827',
    borderRadius: '999px',
    padding: '8px 16px',
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    marginBottom: '18px',
  },
  heading: {
    margin: '0 0 18px',
    fontSize: 'clamp(2.2rem, 5vw, 4rem)',
    lineHeight: 1.1,
    fontWeight: 800,
  },
  text: {
    margin: '0 auto 10px',
    maxWidth: '480px',
    fontSize: '1.05rem',
    lineHeight: 1.7,
    color: '#cbd5e1',
  },
  meta: {
    marginTop: '24px',
    fontSize: '0.9rem',
    color: '#94a3b8',
    letterSpacing: '0.04em',
  },
};

function Maintenance() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.badge}>Maintenance Mode</div>
        <h1 style={styles.heading}>We’ll be back soon</h1>
        <p style={styles.text}>
          This portfolio is currently under maintenance while we update and improve the experience.
          Please check back shortly.
        </p>
        <p style={styles.meta}>Estimated return: soon</p>
      </div>
    </div>
  );
}

export default Maintenance;
