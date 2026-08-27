import React from 'react';

const Partners = () => {
  const partners = [
    { name: 'Google', logo: '🔍' },
    { name: 'Microsoft', logo: '💻' },
    { name: 'Amazon', logo: '📦' },
    { name: 'Salesforce', logo: '☁️' },
    { name: 'HubSpot', logo: '🎯' },
    { name: 'Slack', logo: '💬' },
  ];

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-4 lg:px-6">
        <p className="text-center text-sm text-gray-500 uppercase tracking-wider mb-8">
          Trusted by leading companies worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center gap-2 text-2xl font-semibold text-gray-400 hover:text-gray-600 transition-colors">
              <span className="text-4xl">{partner.logo}</span>
              <span className="text-lg">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;