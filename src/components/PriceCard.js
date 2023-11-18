import React from 'react';
import './pricecard.css'; // make sure to create a corresponding CSS file

const plans = [
  {
    name: 'Starter',
    price: 15,
    features: ['Basic invoicing', 'Easy to use accounting', 'Multi-accounts'],
  },
  {
    name: 'Scale',
    price: 60,
    features: ['Advanced invoicing', 'Easy to use accounting', 'Multi-accounts', 'Tax planning toolkit', 'VAT & VATMOSS filing', 'Free bank transfers'],
  },
  {
    name: 'Growth',
    price: 30,
    features: ['Basic invoicing', 'Easy to use accounting', 'Multi-accounts', 'Tax planning toolkit'],
  },
];

const PricingCard = ({ plan }) => (
  <div className="card">
    <h3>{plan.name}</h3>
    <p className="price">${plan.price}<span>USD</span></p>
    <p className="billing">Billed monthly</p>
    <button>Buy this plan</button>
    <ul>
      {plan.features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  </div>
);

const PricingCards = () => {
  return (
    <div className="card-container">
      {plans.map((plan, index) => (
        <PricingCard key={index} plan={plan} />
      ))}
    </div>
  );
};

export default PricingCards;
