import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [category, setCategory] = useState('all');
  
  const posts = [
    {
      id: 1,
      title: '10 Digital Marketing Trends for 2024',
      excerpt: 'Stay ahead of the curve with these emerging digital marketing trends that will shape the industry in 2024.',
      category: 'Marketing',
      date: 'Feb 15, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      author: 'Sarah Johnson',
    },
    {
      id: 2,
      title: 'How to Build a Powerful Brand in 90 Days',
      excerpt: 'Learn the step-by-step process to build a memorable brand that resonates with your target audience.',
      category: 'Branding',
      date: 'Feb 10, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop',
      author: 'Michael Chen',
    },
    {
      id: 3,
      title: 'SEO Strategies That Actually Work',
      excerpt: 'Stop wasting time on outdated SEO tactics. Here are the strategies that are delivering results in 2024.',
      category: 'SEO',
      date: 'Feb 5, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1432889821006-c16f1c1b0c8b?w=600&h=400&fit=crop',
      author: 'Emily Rodriguez',
    },
    {
      id: 4,
      title: 'Email Marketing: The Ultimate Guide',
      excerpt: 'Master the art of email marketing with our comprehensive guide covering strategy, design, and automation.',
      category: 'Email Marketing',
      date: 'Jan 28, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      author: 'David Kim',
    },
    {
      id: 5,
      title: 'Conversion Rate Optimization: A Beginner\'s Guide',
      excerpt: 'Learn how to optimize your website for maximum conversions with our beginner-friendly guide.',
      category: 'CRO',
      date: 'Jan 20, 2024',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      author: 'Lisa Thompson',
    },
  ];

  const categories = ['all', ...new Set(posts.map(p => p.category))];

  const filteredPosts = category === 'all' 
    ? posts 
    : posts.filter(p => p.category === category);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-gray-600">
            Insights, strategies, and tips to help you grow your business.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full transition-all ${
                category === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                  <span>• {post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                    {post.author.charAt(0)}
                  </div>
                  <span className="text-sm text-gray-700">{post.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all font-semibold">
            Load More Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;