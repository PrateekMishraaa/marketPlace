import React from 'react';
import { useParams } from 'react-router-dom';

const Solutions = () => {
  const { category } = useParams();

  const getTitle = () => {
    switch (category) {
      case 'advertisers': return 'Solutions for Advertisers';
      case 'brands': return 'Solutions for Brands';
      case 'agencies': return 'Solutions for Agencies';
      default: return 'Solutions';
    }
  };

  const getDescription = () => {
    switch (category) {
      case 'advertisers': 
        return 'Maximize your advertising ROI with our comprehensive suite of tools and strategies. Reach your target audience effectively and efficiently.';
      case 'brands': 
        return 'Build a powerful brand that stands out in the market. Our comprehensive solutions help you create, manage, and grow your brand presence.';
      case 'agencies': 
        return 'Scale your agency with our white-label solutions. Deliver exceptional results to your clients while growing your business.';
      default: 
        return 'Find the perfect solution for your business needs. We offer tailored strategies to help you grow and succeed in the digital marketplace.';
    }
  };

  return (
    <div className="py-16 text-gray-700">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {getTitle()}
        </h1>
        <p className="text-lg text-gray-600">
          {getDescription()}
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '🎯', title: 'Precision Targeting', desc: 'Reach your ideal audience with advanced targeting capabilities.' },
            { icon: '📊', title: 'Real-time Analytics', desc: 'Track campaign performance with detailed analytics and insights.' },
            { icon: '📈', title: 'Scalable Solutions', desc: 'Grow your business with solutions that scale with you.' },
          ].map((item, index) => (
            <div key={index} className="p-6 rounded-xl shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;