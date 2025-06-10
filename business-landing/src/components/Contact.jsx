function Contact() {
    return (
        <section className="contact">
            <h2>Let's Work Together</h2>
            <form action="https://formspree.io/f/xeokapvv" method="POST">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" rows="5" placeholder="How can we help?" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
}

export default Contact;