import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is Adsy and how does it work?',
      answer: 'Adsy is a comprehensive digital marketing platform that connects businesses with expert marketing services. We help you grow your online presence through SEO, email marketing, PR, and conversion optimization. Simply choose your service, and our experts will handle the rest.',
    },
    {
      question: 'How long does it take to see results?',
      answer: 'Results vary depending on the service and your goals. SEO typically shows results in 3-6 months, while email marketing and CRO can show improvements within 2-4 weeks. We provide regular progress reports to keep you informed.',
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or hidden fees. We offer monthly subscriptions with the flexibility to cancel or pause as needed.',
    },
    {
      question: 'What makes Adsy different from other marketing platforms?',
      answer: 'Adsy combines expert human expertise with data-driven technology. We assign dedicated specialists to your account, provide personalized strategies, and offer real-time reporting. Our focus is on delivering measurable ROI for your business.',
    },
    {
      question: 'Do you work with all types of businesses?',
      answer: 'Yes, we work with businesses of all sizes - from startups to enterprises. Our services are tailored to meet the unique needs of each client, whether you\'re a B2B, B2C, or e-commerce business.',
    },
    {
      question: 'How do I get started with Adsy?',
      answer: 'Getting started is simple! Sign up for a free account, choose your service package, and our team will contact you within 24 hours to create a custom strategy for your business. You can also schedule a free consultation.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to the most common questions about our services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-lg">
                  {faq.question}
                </span>
                <span className={`text-2xl transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 leading-relaxed animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Still Have Questions?</h3>
            <p className="opacity-90 mb-6">
              Can't find what you're looking for? Contact our support team.
            </p>
            <a
              href="mailto:support@adsy.com"
              className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg hover:shadow-xl transition-all font-semibold"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;