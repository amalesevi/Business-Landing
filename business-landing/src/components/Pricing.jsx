function Pricing() {
    const tiers = [
        { name: "Starter", price: "$0", features: ["Email Support", "1 Project"] },
        { name: "Pro", price: "$49", features: ["Priority Support", "Up to 5 Projects"] },
        { name: "Enterprise", price: "Contact Us", features: ["Dedicated Consultant", "Unlimited Projects"] }
    ];

    return (
        <section id="pricing" className="pricing">
            <h2>Simple Pricing</h2>
            <div className="cards">
                {tiers.map((tier, index) => (
                    <div key={index} className="card">
                        <h3>{tier.name}</h3>
                        <p className="price">{tier.price}</p>
                        <ul>
                            {tier.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                        <button>Choose Plan</button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Pricing;