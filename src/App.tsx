import './App.css'

function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <h1>Rainy Rooftop Coder</h1>
        <p className="subtitle">Full Stack Developer Portfolio</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          빗소리와 함께 코딩하는 개발자입니다.
          React와 TypeScript를 활용한 웹 개발에 관심이 많습니다.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>Tools</h3>
            <ul>
              <li>Git</li>
              <li>Vite</li>
              <li>npm</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>React + TypeScript로 만든 개인 포트폴리오 사이트</p>
            <p className="tech-stack">Tech: React, TypeScript, Vite</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>
          <a href="https://github.com/RainyRooftopCoder" target="_blank" rel="noopener noreferrer">
            GitHub: @RainyRooftopCoder
          </a>
        </p>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Rainy Rooftop Coder. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
