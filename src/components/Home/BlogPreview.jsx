import React from 'react';
import { Link } from 'react-router-dom';

const BlogPreview = () => {
  const posts = [
    {
      id: 1,
      title: '10 Digital Marketing Trends for 2024',
      excerpt: 'Stay ahead of the curve with these emerging trends...',
      category: 'Marketing',
      date: 'Feb 15, 2024',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'How to Build a Powerful Brand in 90 Days',
      excerpt: 'Learn the step-by-step process to build a memorable brand...',
      category: 'Branding',
      date: 'Feb 10, 2024',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'SEO Strategies That Actually Work',
      excerpt: 'Stop wasting time on outdated SEO tactics...',
      category: 'SEO',
      date: 'Feb 5, 2024',
      image: 'https://images.unsplash.com/photo-1432889821006-c16f1c1b0c8b?w=600&h=400&fit=crop',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold">
              Latest <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Insights</span>
            </h2>
            <p className="text-gray-600 mt-2">Expert tips and strategies for your business</p>
          </div>
          <Link
            to="/blog"
            className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center gap-2"
          >
            View All Posts →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{post.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;