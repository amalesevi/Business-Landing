function Testimonials() {
    const reviews = [
        { name: "Chase M", quote: "BrightPath transformed our outdated processes and saved us weeks of manual work." },
        { name: "Micah M", quote: "Professional, smart, and extremelt easy to work with. Highly recommend!" }
    ];

    return (
        <section className="testimonials">
            <h2>What Our Clients Say</h2>
            {reviews.map((review, index) => (
                <blockquote key={index}>
                    "{review.quote}"
                    <footer>- {review.name}</footer>
                </blockquote>
            ))}
        </section>
    );
}

export default Testimonials;