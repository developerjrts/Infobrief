import { News } from "@/constant/types";
import React from "react";

interface NewsCardProps {
  news: News;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <a
      href={news.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg shadow hover:shadow-lg transition p-4 border bg-white dark:bg-neutral-900 dark:border-neutral-800"
    >
      <img
        src={news.photo_url}
        alt={news.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />

      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1 line-clamp-2">
        {news.title}
      </h2>

      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-3">
        {news.snippet}
      </p>

      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-2">
          {news.source_favicon_url && (
            <img
              src={news.source_favicon_url}
              alt="favicon"
              className="w-4 h-4 rounded-full"
            />
          )}
          <span>{news.source_name}</span>
        </div>
        <span>
          {new Date(news.published_datetime_utc).toLocaleDateString()}
        </span>
      </div>
    </a>
  );
};

export default NewsCard;
