import React from "react";

function HomeBenefits() {
  const benefits = [
    {
      id: 1,
      icon: "🛵",
      title: "Fast Delivery",
      description: "30–40 mins",
    },

    {
      id: 2,
      icon: "🏅",
      title: "Best Quality",
      description: "100% Guaranteed",
    },

    {
      id: 3,
      icon: "↩",
      title: "Easy Returns",
      description: "Hassle Free",
    },

    {
      id: 4,
      icon: "🎧",
      title: "24/7 Support",
      description: "We're here to help",
    },
  ];

  const benefitList = benefits.map((benefit) => {
    return (
      <div className="home-benefit" key={benefit.id}>
        <div className="home-benefit-icon">{benefit.icon}</div>

        <div>
          <strong>{benefit.title}</strong>

          <p>{benefit.description}</p>
        </div>
      </div>
    );
  });

  return <section className="home-benefits">{benefitList}</section>;
}

export default HomeBenefits;
