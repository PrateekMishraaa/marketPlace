import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Targeted Marketing',
      description: 'Reach the right audience with precision targeting and data-driven campaigns.',
    },
    {
      icon: '📊',
      title: 'Real-time Analytics',
      description: 'Track your campaign performance with detailed analytics and insights.',
    },
    {
      icon: '🤖',
      title: 'AI-Powered Optimization',
      description: 'Leverage artificial intelligence to optimize your campaigns automatically.',
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee.',
    },
    {
      icon: '⚡',
      title: 'Fast Implementation',
      description: 'Get your campaigns up and running within 24 hours.',
    },
    {
      icon: '📈',
      title: 'Scalable Solutions',
      description: 'Grow your business with solutions that scale with you.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">MarketHub</span>
          </h2>
          <p className="text-xl text-gray-600">
            We combine cutting-edge technology with expert strategies to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;