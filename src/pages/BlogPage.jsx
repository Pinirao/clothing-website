// File 1: BlogPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BlogPage.css';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Trends', 'Styling', 'Sustainability', 'Accessories', 'Behind the Scenes', 'Style Tips'];
  
  const blogData = [
    {
      id: 1,
      title: "Spring Fashion Trends 2023",
      excerpt: "Discover the hottest fashion trends for spring 2023 that will transform your wardrobe",
      author: "Emma Johnson",
      date: "March 15, 2023",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Trends"
    },
    {
      id: 2,
      title: "How to Style Denim on Denim",
      excerpt: "Master the art of the Canadian tuxedo with our comprehensive style guide",
      author: "Michael Chen",
      date: "March 10, 2023",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      category: "Styling"
    },
    {
      id: 3,
      title: "Sustainable Fashion: Our Commitment",
      excerpt: "Learn about our initiatives for a more sustainable fashion future",
      author: "Sarah Williams",
      date: "March 5, 2023",
      image: "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      category: "Sustainability"
    },
    {
      id: 4,
      title: "The Ultimate Guide to Accessorizing",
      excerpt: "Transform any outfit with the perfect accessories and statement pieces",
      author: "Jessica Taylor",
      date: "February 28, 2023",
      image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80",
      category: "Accessories"
    },
    {
      id: 5,
      title: "Behind the Scenes: Our New Collection",
      excerpt: "Get an exclusive look at our design process and inspiration",
      author: "David Miller",
      date: "February 20, 2023",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Behind the Scenes"
    },
    {
      id: 6,
      title: "How to Build a Capsule Wardrobe",
      excerpt: "Create a versatile and sustainable wardrobe with fewer pieces",
      author: "Olivia Brown",
      date: "February 15, 2023",
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
      category: "Style Tips"
    }
  ];

  const filteredBlogs = activeCategory === 'All' 
    ? blogData 
    : blogData.filter(blog => blog.category === activeCategory);

  return (
    <div className="blog-page">
      <header className="blog-header">
        <div className="container">
          <h1>Fashion Blog</h1>
          <p>Stay updated with the latest trends, tips, and news from the fashion world</p>
        </div>
      </header>
      
      <div className="container">
        <div className="blog-filters">
          {categories.map(category => (
            <button
              key={category}
              className={activeCategory === category ? 'active' : ''}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="blog-grid">
          {filteredBlogs.map(blog => (
            <article key={blog.id} className="blog-card">
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
                <span className="category-tag">{blog.category}</span>
              </div>
              <div className="blog-content">
                <h2>{blog.title}</h2>
                <p className="excerpt">{blog.excerpt}</p>
                <div className="blog-meta">
                  <span className="author">By {blog.author}</span>
                  <span className="date">{blog.date}</span>
                </div>
                <Link to={`/blog/${blog.id}`} className="read-more">Read More</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;