// components/News.js
import React, { useState } from "react";
import newsArticles from "../data/news";
import "./News.css";

const ARTICLES_PER_PAGE = 3;

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(newsArticles.length / ARTICLES_PER_PAGE);

  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const currentArticles = newsArticles.slice(startIndex, startIndex + ARTICLES_PER_PAGE);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="afd-main-content">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="afd-breadcrumbs afd-container-padding--m">
        <ol itemScope itemType="http://schema.org/BreadcrumbList" className="afd-breadcrumbs__list">
          <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem" className="afd-breadcrumbs__item">
            <a itemProp="item" href="/" itemID="/">
              <span itemProp="name">ArchDaily</span>
            </a>
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem" className="afd-breadcrumbs__item">
            <a itemProp="item" href="/architecture-news" itemID="/architecture-news">
              <span itemProp="name">Architecture News</span>
            </a>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
      </nav>

      <h1 className="afd-title-big afd-title-big--bmargin-big afd-container-padding--m">Architecture News</h1>

      {/* News List */}
      <section className="afd-news-list afd-container-padding--m">
        {currentArticles.map(({ id, title, url, image, datePublished, excerpt, author }) => (
          <article
            key={id}
            className="afd-post-stream"
            itemScope
            itemType="http://schema.org/Article"
          >
            <figure className="afd-featured-image">
              <a href={url} rel="bookmark">
                <img
                  src={image}
                  alt={title + " - Featured Image"}
                  loading="lazy"
                  itemProp="image"
                  className="afd-featured-img"
                />
              </a>
            </figure>

            <div className="afd-post-content">
              <h2 className="afd-title--custom-tag">
                <a href={url} className="afd-title--black-link" itemProp="headline">
                  {title}
                </a>
              </h2>

              <time
                dateTime={datePublished}
                className="date-publication"
                itemProp="datePublished"
              >
                {new Date(datePublished).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>

              <p itemProp="description" className="afd-excerpt">{excerpt}</p>

              <p className="afd-author" itemProp="author" itemScope itemType="http://schema.org/Person">
                By <span itemProp="name">{author}</span>
              </p>

              <a href={url} className="afd-read-more" aria-label={`Read more about ${title}`}>
                Read more »
              </a>
            </div>
          </article>
        ))}
      </section>

      {/* Pagination */}
      <nav className="afd-pagination" aria-label="Pagination">
        <ul className="pagination_container">
          <li>
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className="pagination-btn"
            >
              ‹ Prev
            </button>
          </li>

          {[...Array(totalPages)].map((_, i) => {
            const page = i + 1;
            return (
              <li key={page}>
                <button
                  onClick={() => goToPage(page)}
                  aria-current={currentPage === page ? "page" : undefined}
                  className={`pagination-btn ${currentPage === page ? "current" : ""}`}
                >
                  {page}
                </button>
              </li>
            );
          })}

          <li>
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className="pagination-btn"
            >
              Next ›
            </button>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default News;
