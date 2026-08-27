import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$299',
      period: 'per month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Basic SEO Optimization',
        'Email Marketing (5k emails/mo)',
        'Social Media Management',
        'Monthly Reports',
        'Email Support',
      ],
      buttonText: 'Get Started',
      buttonColor: 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$599',
      period: 'per month',
      description: 'Best for growing businesses',
      features: [
        'Advanced SEO Optimization',
        'Email Marketing (25k emails/mo)',
        'Digital PR & Media Coverage',
        'Conversion Rate Optimization',
        'Weekly Reports',
        'Priority Support',
        'Dedicated Account Manager',
      ],
      buttonText: 'Start Free Trial',
      buttonColor: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'For large organizations with complex needs',
      features: [
        'Custom Marketing Strategy',
        'Unlimited Emails',
        'Full PR Campaigns',
        'Advanced CRO',
        'Real-time Analytics Dashboard',
        '24/7 Priority Support',
        'Multiple Account Managers',
        'Custom Integrations',
      ],
      buttonText: 'Contact Sales',
      buttonColor: 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white',
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Choose Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Plan</span>
          </h2>
          <p className="text-xl text-gray-600">
            Select the perfect plan for your business needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                plan.popular ? 'border-2 border-blue-600 transform scale-105' : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                  <span className="text-gray-500 text-sm ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-green-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/register"
                  className={`block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${plan.buttonColor}`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;