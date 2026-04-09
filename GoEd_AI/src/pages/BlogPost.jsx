import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import './BlogPost.css';

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = blogData.find(b => b.slug === slug);
    setPost(foundPost);
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div style={{ paddingTop: 160, minHeight: '60vh', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: 'var(--navy)' }}>Article not found</h1>
        <Link to="/insights" className="btn btn-primary" style={{ marginTop: 24 }}>Back to Insights</Link>
      </div>
    );
  }

  // Simple Markdown Parser for the blog content
  const renderContent = (content) => {
    const lines = content.trim().split('\n');
    const elements = [];
    let listItems = [];

    lines.forEach((line, index) => {
      const trimmed = line.trim();
      
      if (trimmed.startsWith('## ')) {
        if (listItems.length > 0) {
          elements.push(<ul key={`ul-${index}`} style={{ paddingLeft: 24, marginBottom: 24, lineHeight: 1.6, color: 'var(--gray-600)' }}>{[...listItems]}</ul>);
          listItems = [];
        }
        elements.push(<h2 key={index} style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--navy)', marginTop: 40, marginBottom: 16 }}>{trimmed.replace('## ', '')}</h2>);
      } else if (trimmed.startsWith('### ')) {
        if (listItems.length > 0) {
          elements.push(<ul key={`ul-${index}`} style={{ paddingLeft: 24, marginBottom: 24, lineHeight: 1.6, color: 'var(--gray-600)' }}>{[...listItems]}</ul>);
          listItems = [];
        }
        elements.push(<h3 key={index} style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--navy)', marginTop: 32, marginBottom: 12 }}>{trimmed.replace('### ', '')}</h3>);
      } else if (trimmed.startsWith('* ')) {
        const text = trimmed.replace('* ', '');
        const parts = text.split(/\*\*(.*?)\*\*/g);
        const liContent = parts.map((part, i) => i % 2 === 1 ? <strong key={i}>{part}</strong> : part);
        listItems.push(<li key={`li-${index}`} style={{ marginBottom: 8 }}>{liContent}</li>);
      } else if (trimmed.length > 0) {
        if (listItems.length > 0) {
          elements.push(<ul key={`ul-${index}`} style={{ paddingLeft: 24, marginBottom: 24, lineHeight: 1.6, color: 'var(--gray-600)' }}>{[...listItems]}</ul>);
          listItems = [];
        }
        if (trimmed.startsWith('*') && trimmed.endsWith('*')) {
           elements.push(<p key={index} style={{ fontSize: 17, color: 'var(--gray-700)', lineHeight: 1.7, marginBottom: 24, fontStyle: 'italic' }}>{trimmed.replaceAll('*', '')}</p>);
        } else {
           const parts = trimmed.split(/\*\*(.*?)\*\*/g);
           const pContent = parts.map((part, i) => i % 2 === 1 ? <strong key={i}>{part}</strong> : part);
           elements.push(<p key={index} style={{ fontSize: 17, color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 24 }}>{pContent}</p>);
        }
      }
    });

    if (listItems.length > 0) {
      elements.push(<ul key={`ul-end`} style={{ paddingLeft: 24, marginBottom: 24, lineHeight: 1.6, color: 'var(--gray-600)' }}>{[...listItems]}</ul>);
    }

    return elements;
  };

  return (
    <div style={{ paddingTop: 72, background: 'var(--off-white)' }}>

      {/* Article Header */}
      <section className="blog-header">
        <div className="container">
          <div className="blog-header__inner">
            {/* Breadcrumbs */}
            <div className="blog-breadcrumb">
              <Link to="/insights">Insights</Link>
              <span>/</span>
              <span style={{ color: 'var(--teal)' }}>{post.tag}</span>
            </div>

            <h1 className="blog-header__title">{post.title}</h1>

            <div className="blog-header__meta">
              <span>By <strong>{post.author}</strong></span>
              <span className="blog-header__meta-dot" />
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body Layout */}
      <section className="blog-body-section">
        <div className="container">
          <div className="blog-body-grid">

            {/* Main Content */}
            <div className="blog-main-card">
              {post.image && (
                <img src={post.image} alt={post.title} className="blog-featured-img" />
              )}
              <div style={{ fontSize: 17, color: 'var(--gray-800)' }}>
                {renderContent(post.content)}
              </div>
            </div>

            {/* Sticky Sidebar */}
            <div className="blog-sidebar">
              <div className="blog-cta-card">
                <h3>Ready to transform your admissions?</h3>
                <p>See exactly how GoEd AI can automate your outreach and increase conversions for your specific courses.</p>
                <Link to="/demo" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Live Demo</Link>
              </div>

              <div className="blog-share-card">
                <h4>Share this article</h4>
                <div className="blog-share-btns">
                  <button className="blog-share-btn">LinkedIn</button>
                  <button className="blog-share-btn">Twitter</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Recommended Posts */}
      <section className="blog-more-section">
        <div className="container">
          <h3>More from GoEd AI</h3>
          <div className="blog-more-grid">
            {blogData.filter(b => b.slug !== slug).slice(0, 3).map(b => (
              <Link to={`/insights/${b.slug}`} key={b.title} className="card" style={{ cursor: 'pointer', display: 'block', textDecoration: 'none' }}>
                <div style={{ background: 'var(--gray-50)', borderRadius: 8, height: 140, marginBottom: 16, overflow: 'hidden' }}>
                  <img src={b.image} alt={b.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{b.tag}</span>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--navy)', marginBottom: 8, marginTop: 8, lineHeight: 1.4 }}>{b.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
