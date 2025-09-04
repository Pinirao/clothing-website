// File 2: SingleBlogPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './SingleBlogPage.css';

const SingleBlogPage = () => {
  const { id } = useParams();
  
  // In a real app, you would fetch this data based on the ID
  // For now, we'll use the same mock data structure
  const blogData = [
    {
      id: 1,
      title: "Spring Fashion Trends 2023",
      excerpt: "Discover the hottest fashion trends for spring 2023 that will transform your wardrobe",
      author: "Emma Johnson",
      date: "March 15, 2023",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Trends",
      content: `
        <p>Spring 2023 brings a refreshing mix of bold colors, innovative silhouettes, and sustainable choices to the fashion forefront. This season is all about expressing individuality while embracing comfort and style.</p>
        
        <h3>Color Trends</h3>
        <p>This season, vibrant hues are taking center stage. Look for bold shades of magenta, electric blue, and lime green to dominate runways and street style. These statement colors work beautifully when paired with neutral basics or even mixed together for the fashion-forward.</p>
        
        <h3>Key Silhouettes</h3>
        <p>Oversized blazers continue to reign supreme, now often styled with matching tailored shorts for a sophisticated yet playful look. Flowy midi dresses with exaggerated sleeves provide both comfort and drama, perfect for transitioning from day to night.</p>
        
        <h3>Sustainable Choices</h3>
        <p>More designers are incorporating eco-friendly materials into their collections. Look for pieces made from organic cotton, recycled polyester, and innovative materials like pineapple leather. Investing in quality pieces that last multiple seasons is not only stylish but responsible.</p>
        
        <p>Remember, trends are meant to inspire, not dictate. Choose pieces that resonate with your personal style and make you feel confident.</p>
      `
    },
    {
      id: 2,
      title: "How to Style Denim on Denim",
      excerpt: "Master the art of the Canadian tuxedo with our comprehensive style guide",
      author: "Michael Chen",
      date: "March 10, 2023",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      category: "Styling",
      content: `
        <p>The denim-on-denim trend, often called the "Canadian tuxedo," has evolved from a fashion faux pas to a style staple. When done correctly, this look can be incredibly chic and versatile.</p>
        
        <h3>Start with Contrast</h3>
        <p>The key to mastering denim on denim is playing with different washes. Pair a dark denim jacket with lighter jeans, or vice versa. This contrast creates visual interest and prevents the look from appearing too uniform.</p>
        
        <h3>Break It Up</h3>
        <p>Use neutral pieces to separate your denim elements. A white t-shirt, black boots, or tan accessories can provide the necessary break between denim pieces while keeping the outfit cohesive.</p>
        
        <h3>Accessorize Wisely</h3>
        <p>Choose accessories that complement rather than compete with your denim. Leather belts, simple jewelry, and neutral bags work well. Consider adding a pop of color with your shoes or scarf to elevate the entire look.</p>
        
        <h3>Fit is Everything</h3>
        <p>Ensure both your top and bottom denim pieces fit well. Ill-fitting denim can make the entire outfit look sloppy. Tailored jackets and well-fitting jeans will always look more intentional and stylish.</p>
        
        <p>With these tips, you'll be able to rock the denim-on-denim trend with confidence and style.</p>
      `
    },
    {
      id: 3,
      title: "Sustainable Fashion: Our Commitment",
      excerpt: "Learn about our initiatives for a more sustainable fashion future",
      author: "Sarah Williams",
      date: "March 5, 2023",
      image: "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      category: "Sustainability",
      content: `
        <p>At our core, we believe fashion should be both beautiful and responsible. Our commitment to sustainability extends across every aspect of our business, from design to delivery.</p>
        
        <h3>Ethical Sourcing</h3>
        <p>We partner with suppliers who share our values, ensuring fair wages and safe working conditions for all workers in our supply chain. Our materials are carefully selected for their environmental and social impact.</p>
        
        <h3>Sustainable Materials</h3>
        <p>We're increasing our use of organic, recycled, and innovative materials. Currently, 65% of our collection uses sustainable fabrics, with a goal of reaching 90% by 2025. This includes organic cotton, recycled polyester, Tencel, and hemp.</p>
        
        <h3>Reducing Waste</h3>
        <p>Through careful production planning, made-to-order initiatives, and recycling programs, we've reduced our waste by 40% compared to last year. Our packaging is now 100% recyclable and made from post-consumer materials.</p>
        
        <h3>Longevity Over Trends</h3>
        <p>We design pieces meant to last beyond a single season. Timeless silhouettes, quality construction, and classic details ensure our garments remain stylish and functional for years to come.</p>
        
        <p>We know there's always more work to be done, and we're committed to transparently sharing our progress and challenges as we continue our sustainability journey.</p>
      `
    },
    {
      id: 4,
      title: "The Ultimate Guide to Accessorizing",
      excerpt: "Transform any outfit with the perfect accessories and statement pieces",
      author: "Jessica Taylor",
      date: "February 28, 2023",
      image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80",
      category: "Accessories",
      content: `
        <p>Accessories are the finishing touches that can elevate an outfit from ordinary to extraordinary. They express personality, create focal points, and can completely transform a look.</p>
        
        <h3>Statement Jewelry</h3>
        <p>Bold necklaces, chunky bracelets, or dramatic earrings can instantly upgrade a simple outfit. The key is to let one piece take center stage rather than wearing multiple statement items at once.</p>
        
        <h3>Belts: More Than Function</h3>
        <p>A well-chosen belt can define your waist, add visual interest, or even change the silhouette of a garment. Try cinching oversized blazers or dresses with a stylish belt to create shape and structure.</p>
        
        <h3>Bags as Accents</h3>
        <p>Your handbag should complement your outfit without necessarily matching perfectly. Consider color, texture, and scale when selecting a bag. A pop of color can energize a neutral outfit, while a neutral bag can ground a colorful look.</p>
        
        <h3>Scarves: Versatile Style</h3>
        <p>From neckties to headbands to bag accessories, scarves offer endless styling possibilities. They add color, pattern, and texture to any ensemble.</p>
        
        <h3>Shoes Complete the Look</h3>
        <p>Never underestimate the power of footwear. The right shoes can set the tone for your entire outfit, whether you're aiming for casual, professional, or dramatic.</p>
        
        <p>Remember, accessories should enhance your personal style rather than overwhelm it. Start with one statement piece and build from there.</p>
      `
    },
    {
      id: 5,
      title: "Behind the Scenes: Our New Collection",
      excerpt: "Get an exclusive look at our design process and inspiration",
      author: "David Miller",
      date: "February 20, 2023",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Behind the Scenes",
      content: `
        <p>Creating a new collection is a journey of inspiration, creativity, and meticulous attention to detail. Join us as we pull back the curtain on our design process for the upcoming season.</p>
        
        <h3>Inspiration Phase</h3>
        <p>Every collection begins with a theme or story. For our latest line, we drew inspiration from the organic shapes and colors found in coastal landscapes. Mood boards filled with photographs, fabric swatches, and color palettes help visualize the direction.</p>
        
        <h3>Design and Sketching</h3>
        <p>Our designers translate inspiration into initial sketches, exploring silhouettes, details, and proportions. This iterative process involves countless revisions until each piece perfectly captures our vision.</p>
        
        <h3>Fabric Selection</h3>
        <p>We source materials from around the world, considering not only aesthetics but also sustainability, durability, and comfort. This season, we've incorporated innovative fabrics made from recycled ocean plastics.</p>
        
        <h3>Pattern Making and Sampling</h3>
        <p>Pattern makers transform flat sketches into three-dimensional garments. Each design undergoes multiple fittings and adjustments to ensure perfect fit and drape before moving to production.</p>
        
        <h3>Quality Control</h3>
        <p>Every garment is rigorously tested for colorfastness, shrinkage, seam strength, and overall quality. We believe in delivering pieces that will withstand the test of time and wear.</p>
        
        <p>This behind-the-scenes journey represents months of work from our dedicated team of designers, pattern makers, and technicians who pour their passion into every stitch.</p>
      `
    },
    {
      id: 6,
      title: "How to Build a Capsule Wardrobe",
      excerpt: "Create a versatile and sustainable wardrobe with fewer pieces",
      author: "Olivia Brown",
      date: "February 15, 2023",
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
      category: "Style Tips",
      content: `
        <p>A capsule wardrobe is a curated collection of essential items that don't go out of fashion and can be mixed and matched to create a variety of outfits. Building one simplifies dressing, reduces decision fatigue, and promotes sustainable fashion habits.</p>
        
        <h3>Define Your Color Palette</h3>
        <p>Start with a base of neutrals (black, white, navy, beige, gray) that work well together. Then add a few accent colors that complement your skin tone and personal style. Keeping your color palette cohesive ensures everything works together.</p>
        
        <h3>Identify Your Lifestyle Needs</h3>
        <p>Consider the different settings you dress for: work, casual weekends, special occasions, etc. Your capsule should reflect the actual activities in your life rather than an idealized version.</p>
        
        <h3>Quality Over Quantity</h3>
        <p>Invest in well-made pieces that will last. Look for good construction, quality fabrics, and timeless designs. Fewer, better items will serve you better than a closet full of fast fashion.</p>
        
        <h3>The Core Pieces</h3>
        <p>Build around versatile basics: a well-fitting pair of jeans, a white button-down shirt, a little black dress, a blazer, quality t-shirts, and comfortable yet stylish shoes. These foundation pieces can be dressed up or down with accessories.</p>
        
        <h3>Seasonal Rotations</h3>
        <p>Rather than one massive capsule, consider creating seasonal capsules that you rotate. Store off-season items to keep your closet clutter-free and make getting dressed simpler.</p>
        
        <p>Remember, a capsule wardrobe is personal. What works for one person might not work for another. The goal is to create a collection of clothes you love that makes getting dressed effortless.</p>
      `
    }
  ];

  const blog = blogData.find(item => item.id === parseInt(id));

  if (!blog) {
    return <div className="blog-not-found">Blog post not found</div>;
  }

  return (
    <div className="single-blog-page">
      <div className="container">
        <Link to="/blog" className="back-button">← Back to All Posts</Link>
        
        <article className="blog-article">
          <header className="article-header">
            <span className="category-badge">{blog.category}</span>
            <h1>{blog.title}</h1>
            <div className="article-meta">
              <span className="author">By {blog.author}</span>
              <span className="date">{blog.date}</span>
            </div>
          </header>
          
          <div className="article-image">
            <img src={blog.image} alt={blog.title} />
          </div>
          
          <div className="article-content">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>
          
          <footer className="article-footer">
            <div className="tags">
              <span>Tags:</span>
              <a href="#">{blog.category}</a>
              <a href="#">Fashion</a>
              <a href="#">Style</a>
            </div>
            
            <div className="social-sharing">
              <span>Share this post:</span>
              <div className="social-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-pinterest"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </footer>
        </article>
        
        <section className="related-posts">
          <h2>You Might Also Like</h2>
          <div className="related-grid">
            {blogData
              .filter(item => item.id !== blog.id && item.category === blog.category)
              .slice(0, 3)
              .map(relatedBlog => (
                <div key={relatedBlog.id} className="related-card">
                  <img src={relatedBlog.image} alt={relatedBlog.title} />
                  <div className="related-content">
                    <span className="related-category">{relatedBlog.category}</span>
                    <h3>{relatedBlog.title}</h3>
                    <Link to={`/blog/${relatedBlog.id}`} className="read-related">
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SingleBlogPage;