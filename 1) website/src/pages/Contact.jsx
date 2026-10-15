import './Contact.css';
export function Contact() {
    return (
        <div className="page-container fade-in">
            <section className="contact-header">
                <h1>Get in Touch</h1>
                <p>Have questions, feedback, or a project in mind? We would love to hear from you.</p>
            </section>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" placeholder="John Doe" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="john@example.com" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows="4" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="btn-primary full-width">Send Message</button>
            </form>
        </div>
    );
}