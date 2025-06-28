import React from "react";

const NewsCardSkeleton = () => {
  return (
    <div className="block rounded-lg shadow hover:shadow-lg transition p-4 border bg-white dark:bg-neutral-900 dark:border-neutral-800 animate-pulse">
      <div className="w-full h-48 bg-gray-300 dark:bg-neutral-700 rounded-md mb-4" />

      <div className="h-5 bg-gray-300 dark:bg-neutral-700 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-300 dark:bg-neutral-700 rounded w-full mb-1" />
      <div className="h-4 bg-gray-300 dark:bg-neutral-700 rounded w-5/6 mb-3" />

      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 dark:bg-neutral-700 rounded-full" />
          <div className="h-3 bg-gray-300 dark:bg-neutral-700 rounded w-20" />
        </div>
        <div className="h-3 bg-gray-300 dark:bg-neutral-700 rounded w-16" />
      </div>
    </div>
  );
};

export default NewsCardSkeleton;
