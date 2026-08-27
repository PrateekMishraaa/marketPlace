import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Share Your Goals',
      description: 'Tell us what you want to achieve and we\'ll create a custom strategy.',
      icon: '🎯',
    },
    {
      number: '02',
      title: 'Get Matched',
      description: 'We\'ll connect you with the right experts and tools for your needs.',
      icon: '🤝',
    },
    {
      number: '03',
      title: 'Launch Campaign',
      description: 'We execute the strategy and start delivering measurable results.',
      icon: '🚀',
    },
    {
      number: '04',
      title: 'Track & Optimize',
      description: 'Monitor performance and continuously improve for maximum ROI.',
      icon: '📈',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            How It <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-gray-600">
            Our proven process helps you achieve your marketing goals in just 4 simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-2/3 w-full h-0.5 bg-blue-200"></div>
              )}
              
              <div className="bg-white rounded-2xl p-8 shadow-lg relative z-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-5xl mb-4">{step.icon}</div>
                <div className="text-3xl font-bold text-blue-600 opacity-20 mb-2">{step.number}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;