"use client";

import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [articles, setArticles] = useState([]);
  const [telemarketing, setTelemarketing] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch(
        "https://marketingmastershub.com/wp-json/wp/v2/posts?_embed&categories=10"
      ),
      fetch(
        "https://marketingmastershub.com/wp-json/wp/v2/posts?_embed&categories=11"
      ),
    ])
      .then((responses) => {
        if (!responses[0].ok || !responses[1].ok) {
          throw new Error("Failed to fetch one or more articles");
        }
        return Promise.all(responses.map((response) => response.json()));
      })
      .then(([articlesData, telemarketingData]) => {
        const formattedArticles = articlesData.map((article: any) => {
          let cleanExcerpt = article.excerpt.rendered
            .replace(/\[&hellip;\]\s*<\/p>\s*$/, "</p>") // Remove [&hellip;] HTML entity
            .replace(/\[…\]\s*<\/p>\s*$/, "</p>") // Remove […] Unicode character
            .replace(/\[\.\.\.\]\s*<\/p>\s*$/, "</p>"); // Remove [...] three dots
          const thumbnailUrl =
            article._embedded["wp:featuredmedia"][0].media_details.sizes.full
              .source_url;

          return {
            id: article.id,
            title: article.title,
            excerpt: cleanExcerpt,
            url: article.link,
            date: new Date(article.date).toLocaleDateString(),
            type: article.type,
            status: article.status,
            imageUrl: thumbnailUrl,
          };
        });

        const formattedtelemarketing = telemarketingData.map((article: any) => {
          let cleanExcerpt = article.excerpt.rendered
            .replace(/\[&hellip;\]\s*<\/p>\s*$/, "</p>") // Remove [&hellip;] HTML entity
            .replace(/\[…\]\s*<\/p>\s*$/, "</p>") // Remove […] Unicode character
            .replace(/\[\.\.\.\]\s*<\/p>\s*$/, "</p>"); // Remove [...] three dots
          const thumbnailUrl =
            article._embedded["wp:featuredmedia"][0].media_details.sizes.full
              .source_url;
          return {
            id: article.id,
            title: article.title,
            excerpt: cleanExcerpt,
            url: article.link,
            date: new Date(article.date).toLocaleDateString(),
            type: article.type,
            status: article.status,
            imageUrl: thumbnailUrl,
          };
        });

        setArticles(formattedArticles);
        setTelemarketing(formattedtelemarketing);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="px-3">
        <div className="grid gap-1 pt-10 md:pt-0">
          <span className="text-3xl font-semibold text-fire-700">Articles</span>
        </div>
        <div className="py-10 flex justify-center">
          <div className="animate-pulse mt-10 flex flex-col items-center">
            <div className="h-8 w-8 border-4 border-t-fire-700 border-r-fire-700 border-b-gray-200 border-l-gray-200 rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="px-3">
        <div className="grid gap-1 pt-10 md:pt-0">
          <span className="text-3xl font-semibold text-fire-700">Articles</span>
        </div>
        <div className="py-10 flex justify-center">
          <div className="bg-red-50 p-6 rounded-lg border border-red-200 text-center max-w-lg">
            <svg
              className="h-12 w-12 text-red-500 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <h3 className="text-lg font-medium text-red-800 mb-2">
              Failed to load details
            </h3>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-3">
      <div className="grid gap-1 pt-10 md:pt-0">
        <span className="text-3xl font-semibold text-fire-700">Blogs</span>
      </div>
      <div className="grid gap-1 pt-10 md:pt-0 mt-10">
        <span className="text-2xl font-semibold text-fire-700">
          Content Syndication
        </span>
      </div>
      {articles.length === 0 ? (
        <div className="py-10 text-center text-gray-500">
          <p>No articles found.</p>
        </div>
      ) : (
        <div className="py-4 lg:py-6 grid md:grid-cols-2 gap-x-3 gap-y-10">
          {articles.map((article: any, index) => {
            return (
              <TextCardArticleWithImage
                key={article.id || index}
                {...article}
              />
            );
          })}
        </div>
      )}
      <div className="grid gap-1 pt-10 md:pt-0 mt-10">
        <span className="text-2xl font-semibold text-fire-700">
          Telemarketing Leads for B2B Technology Companies
        </span>
      </div>
      {telemarketing.length > 0 && (
        <div className="py-4 md:py-6 grid md:grid-cols-2 gap-x-3 gap-y-10">
          {telemarketing.map((article: any, index) => {
            return (
              <TextCardArticleWithImage
                key={article.id || index}
                {...article}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
function TextCardArticleWithImage({ title, url, excerpt, imageUrl }: any) {
  console.log("image url", imageUrl);
  return (
    <article className="w-full h-full flex flex-col">
      <div className="w-full relative aspect-video bg-fire-100 border border-fire-400 overflow-hidden rounded-lg">
        {" "}
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
      <div className="pt-6 flex gap-4 flex-1 flex-col items-start">
        <span className="text-lg md:text-xl flex-1 font-semibold leading-tight">
          {title.rendered}
        </span>
        <p
          className="text-sm text-gray-600"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
        <Button variant="outline" onClick={() => window.open(url, "_blank")}>
          Read more
          <ExternalLink className="h-2 w-2" />
        </Button>
      </div>
    </article>
  );
}
