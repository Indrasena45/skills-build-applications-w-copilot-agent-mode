import './App.css'

function App() {
  return (
    <main className="app-shell">
      <section className="hero-card">
        <h1>Octofit Tracker</h1>
        <p>React 19 + Vite frontend for the Octofit fitness tracking app.</p>
        <div className="feature-grid">
          <div>
            <h2>Presentation Tier</h2>
            <p>React 19, TypeScript, Vite, React Router, and Bootstrap ready.</p>
          </div>
          <div>
            <h2>Logic Tier</h2>
            <p>Express API and TypeScript backend scaffolded under <code>backend/</code>.</p>
          </div>
          <div>
            <h2>Data Tier</h2>
            <p>MongoDB support with Mongoose is configured in the backend.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
