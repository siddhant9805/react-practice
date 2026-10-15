import './Home.css';
export function Home() {
    return (
        <div className="page-container fade-in">
            <section className="hero-section">
                <div className="hero-badge">✨ Welcome to 2026</div>
                <h1>Build the Future with Confidence</h1>
                <p>Discover high-performance tools, creative solutions, and seamless experiences tailored just for you.</p>
                <div className="hero-actions">
                    <button className="btn-primary">Get Started</button>
                    <button className="btn-secondary">Learn More</button>
                </div>
            </section>

            <section className="features-grid">
                <div className="feature-card">
                    <div className="card-icon">⚡</div>
                    <h3>Lightning Fast</h3>
                    <p>Optimized for ultimate performance and rapid responsiveness across all devices.</p>
                </div>
                <div className="feature-card">
                    <div className="card-icon">🛡️</div>
                    <h3>Secure & Reliable</h3>
                    <p>Built with enterprise-grade protection standards to keep your data completely safe.</p>
                </div>
                <div className="feature-card">
                    <div className="card-icon">💡</div>
                    <h3>Smart Workflow</h3>
                    <p>Intuitive design frameworks designed to scale effortlessly with your team's growth.</p>
                </div>
            </section>
        </div>
    );
}
