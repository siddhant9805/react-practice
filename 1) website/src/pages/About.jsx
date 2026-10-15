import './About.css';
export function About() {
    return (
        <div className="page-container fade-in">
            <section className="about-header">
                <h1>About Our Company</h1>
                <p className="subtitle">Empowering digital creators and developers worldwide.</p>
            </section>

            <div className="about-content">
                <div className="about-text">
                    <h3>Our Mission</h3>
                    <p>We believe in building clean, elegant, and user-focused web applications that stand out. Our journey began with a simple goal: remove complexity from design and engineering.</p>
                    <p>Today, thousands of creators rely on our toolsets to bring their unique visions to life every single day.</p>
                </div>
                <div className="about-stats-card">
                    <div className="stat-item">
                        <h2>99.9%</h2>
                        <p>Uptime Guaranteed</p>
                    </div>
                    <div className="stat-item">
                        <h2>10M+</h2>
                        <p>Global Requests</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
