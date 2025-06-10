function Services() {
    const services = [
        { title: "Tech Strategy", description: "Long-term guidiance for scaling intelligently."},
        { title: "Cloud Solutions", description: "Modern infrastructure, built to grow with you."},
        { title: "Process Automation", description: "Save time by automating your core workflow."}
    ]

    return (
        <section id="services" className="services">
            <h2>Our Services</h2>
            <div className="cards">
                {services.map((service, index) => (
                    <div key={index} className="card">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;