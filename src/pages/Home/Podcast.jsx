import React, { useState } from 'react';

const Podcast = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', 'Marketing', 'SEO', 'Branding', 'Email Marketing', 'CRO', 'Interviews'];

  const episodes = [
    {
      id: 1,
      title: 'The Future of Digital Marketing in 2024',
      host: 'Sarah Johnson',
      category: 'Marketing',
      duration: '45:32',
      date: 'Feb 20, 2024',
      description: 'Join us as we explore the latest trends and predictions for digital marketing in 2024. From AI to personalization, we cover it all.',
      image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&h=400&fit=crop',
      listenLink: '#',
      featured: true,
      downloads: '12.5K',
      rating: 4.9,
    },
    {
      id: 2,
      title: 'Mastering SEO in the Age of AI',
      host: 'Michael Chen',
      category: 'SEO',
      duration: '38:15',
      date: 'Feb 15, 2024',
      description: 'Learn how to adapt your SEO strategies for the AI era. We discuss content optimization, link building, and technical SEO.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      listenLink: '#',
      featured: false,
      downloads: '8.2K',
      rating: 4.8,
    },
    {
      id: 3,
      title: 'Building a Powerful Brand Identity',
      host: 'Emily Rodriguez',
      category: 'Branding',
      duration: '52:10',
      date: 'Feb 10, 2024',
      description: 'Discover the key elements of building a memorable brand. From storytelling to visual identity, we cover everything you need to know.',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop',
      listenLink: '#',
      featured: false,
      downloads: '6.7K',
      rating: 4.7,
    },
    {
      id: 4,
      title: 'Email Marketing That Converts',
      host: 'David Kim',
      category: 'Email Marketing',
      duration: '41:20',
      date: 'Feb 5, 2024',
      description: 'Learn the secrets of high-converting email campaigns. We cover subject lines, content strategy, and automation workflows.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      listenLink: '#',
      featured: false,
      downloads: '5.3K',
      rating: 4.6,
    },
    {
      id: 5,
      title: 'Conversion Rate Optimization Masterclass',
      host: 'Lisa Thompson',
      category: 'CRO',
      duration: '55:45',
      date: 'Jan 28, 2024',
      description: 'Deep dive into conversion rate optimization strategies. Learn how to turn visitors into customers with data-driven decisions.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      listenLink: '#',
      featured: true,
      downloads: '9.8K',
      rating: 4.9,
    },
    {
      id: 6,
      title: 'Interview with a Marketing Legend',
      host: 'Sarah Johnson',
      category: 'Interviews',
      duration: '48:30',
      date: 'Jan 20, 2024',
      description: 'Exclusive interview with a 20-year marketing veteran. Get insights on industry evolution and future predictions.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop',
      listenLink: '#',
      featured: false,
      downloads: '7.1K',
      rating: 4.8,
    },
  ];

  // Filter episodes
  const filteredEpisodes = episodes.filter(ep => {
    const matchesCategory = activeCategory === 'all' || ep.category === activeCategory;
    const matchesSearch = ep.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ep.host.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ep.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get featured episodes
  const featuredEpisodes = episodes.filter(ep => ep.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="text-6xl mb-4">🎙️</div>
          <h1 className="text-5xl font-bold mb-4">MarketHub Podcast</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Insights, strategies, and stories from industry experts to help you grow your business.
            New episodes every week.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button className="px-6 py-3 bg-white text-purple-600 rounded-lg hover:shadow-xl transition-all font-semibold">
              <span className="flex items-center gap-2">
                ▶️ Subscribe on Apple Podcasts
              </span>
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all font-semibold">
              <span className="flex items-center gap-2">
                🎵 Listen on Spotify
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 py-16">
        {/* Featured Episodes */}
        {featuredEpisodes.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-yellow-500">⭐</span> Featured Episodes
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredEpisodes.map((episode) => (
                <div key={episode.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row">
                    <img
                      src={episode.image}
                      alt={episode.title}
                      className="w-full md:w-48 h-48 object-cover"
                    />
                    <div className="p-6 flex-1">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">
                          {episode.category}
                        </span>
                        <span>{episode.date}</span>
                        <span>• {episode.duration}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{episode.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">Host: {episode.host}</p>
                      <p className="text-gray-600 mb-4 line-clamp-2">{episode.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>⬇️ {episode.downloads}</span>
                          <span>⭐ {episode.rating}</span>
                        </div>
                        <a
                          href={episode.listenLink}
                          className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all"
                        >
                          Listen Now →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Episodes */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold">All Episodes</h2>
            
            {/* Search */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="text"
                placeholder="Search episodes..."
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full md:w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Episodes Grid */}
          {filteredEpisodes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEpisodes.map((episode) => (
                <div key={episode.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <img
                    src={episode.image}
                    alt={episode.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                        {episode.category}
                      </span>
                      <span>{episode.date}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">{episode.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">Host: {episode.host}</p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{episode.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span>⏱️ {episode.duration}</span>
                        <span>⬇️ {episode.downloads}</span>
                      </div>
                      <a
                        href={episode.listenLink}
                        className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all text-sm"
                      >
                        Listen
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl shadow">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">No Episodes Found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}

          {/* Load More */}
          {filteredEpisodes.length > 0 && (
            <div className="text-center mt-12">
              <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-all font-semibold">
                Load More Episodes
              </button>
            </div>
          )}
        </div>

        {/* Subscribe Section */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Never Miss an Episode</h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Subscribe to our podcast on your favorite platform and get notified when new episodes drop.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="px-6 py-3 bg-white text-purple-600 rounded-lg hover:shadow-xl transition-all font-semibold"
            >
              🎵 Subscribe on Spotify
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all font-semibold"
            >
              ▶️ Subscribe on Apple Podcasts
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all font-semibold"
            >
              📱 RSS Feed
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcast;