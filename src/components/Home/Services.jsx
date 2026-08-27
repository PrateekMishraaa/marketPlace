import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: '📰',
      title: 'Digital PR & Media Coverage',
      description: 'Get featured in top publications and build your brand authority.',
      color: 'from-blue-500 to-cyan-500',
      path: '/services/digital-pr',
    },
    {
      icon: '📧',
      title: 'Email Marketing Campaign Setup',
      description: 'Create targeted email campaigns that convert leads into customers.',
      color: 'from-purple-500 to-pink-500',
      path: '/services/email-marketing',
    },
    {
      icon: '🔍',
      title: 'SEO Optimization & Promotion',
      description: 'Rank higher on search engines and drive organic traffic.',
      color: 'from-green-500 to-emerald-500',
      path: '/services/seo',
    },
    {
      icon: '📊',
      title: 'Conversion Rate Optimization',
      description: 'Turn your website visitors into paying customers with data-driven strategies.',
      color: 'from-orange-500 to-red-500',
      path: '/services/cro',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600">
            We offer a comprehensive suite of digital marketing services to help your business grow.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`text-5xl mb-4 inline-block bg-gradient-to-r ${service.color} p-4 rounded-2xl text-white`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <Link
                to={service.path}
                className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Learn More 
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            View All Services 
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;