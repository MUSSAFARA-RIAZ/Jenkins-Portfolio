import React from 'react'

const resume = {
  name: 'Mussafara Riaz',
  title: 'Software Engineer | MERN Stack Developer',
  email: 'riazmussafara@gmail.com',
  phone: '+92 336 1812654',
  github: 'https://github.com/MUSSAFARA-RIAZ',
  linkedin: 'https://www.linkedin.com/in/mussafara-riaz-a38012213/',
  about: `Passionate Software Engineer specializing in MERN STACK development (React, Node.js) with experience building
high-performance web, mobile, and real-time applications. Strong problem-solving skills and a data-driven
mindset, with keen interest in scalable system design and emerging technologies like machine learning.`,
  skills: [
    'JavaScript (React, Node.js)',
    'React Native',
    'HTML & CSS',
    'MongoDB / Express',
    'Data Visualization',
    'jenkins',
    'Machine Learning (basics)'
  ],
  experience: [
    {
      role: 'Senior Software Engineer',
      company: 'Lambda Theta',
      date: 'May 2023 – Present',
      details: 'Frontend lead working on EAXEE platform, multilanguage UI, real-time collaboration and team leadership.'
    },
    { 
      role: 'Web Developer',
      company: 'NCAI',
      date: 'Sep 2022 – Nov 2022',
      details: 'Built official site with responsive HTML/CSS/JS.' 
    }
  ],
  projects: [
    { name: 'Battery Swapping App', desc: 'React Native + Node.js app for battery swapping and health monitoring.' },
    { name: 'Nedian Nexus', desc: 'Campus marketplace built with HTML/CSS/PHP.' },
    { name: 'World of Learners', desc: 'Kid-friendly learning site with vibrant UI and sound interactions.' }
  ]
}

function GradientCard({ title, children, delay = 0 }) {
  return (
    <div className="card-wrapper" style={{ animationDelay: `${delay}s` }}>
      <div className="gradient-card">
        <h3>{title}</h3>
        <div className="card-body">{children}</div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="page">
      {/* Header */}
      <header className="hero">
        <div>
          <h1 className="name">{resume.name}</h1>
          <p className="subtitle">{resume.title}</p>
          <p className="contact">
            <a href={`mailto:${resume.email}`}>{resume.email}</a> •{' '}
            <a href={resume.github} target="_blank" rel="noreferrer">GitHub</a> •{' '}
            <a href={resume.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container">
        <section className="grid">
          <GradientCard title="About" delay={0}>
            <p>{resume.about}</p>
          </GradientCard>

          <GradientCard title="Skills" delay={0.1}>
            <ul className="skill-list">
              {resume.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </GradientCard>

          <GradientCard title="Experience" delay={0.2}>
            {resume.experience.map((e) => (
              <div key={e.role} className="exp-item">
                <strong>{e.role}</strong> — <em>{e.company}</em>
                <div className="exp-date">{e.date}</div>
                <p>{e.details}</p>
              </div>
            ))}
          </GradientCard>

          <GradientCard title="Projects" delay={0.3}>
            {resume.projects.map((p) => (
              <div key={p.name} className="proj-item">
                <strong>{p.name}</strong>
                <p>{p.desc}</p>
              </div>
            ))}
          </GradientCard>

          <GradientCard title="Education & Certifications" delay={0.4}>
            <p>B.E. Software Engineering — NED University (2020–2024)</p>
            <p>Certifications: Generative AI Concepts (DataCamp), SQL (DataCamp), Intermediate Python</p>
          </GradientCard>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">© {new Date().getFullYear()} {resume.name}</footer>
    </div>
  )
}
