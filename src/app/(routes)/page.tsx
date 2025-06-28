"use client";

import NewsCard from "@/components/NewsCard";
import NewsCardSkeleton from "@/components/NewsCardSkeleton";
import Title from "@/components/Title";
import { News } from "@/constant/types";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [headlines, setHeadlines] = useState<News[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const skeletons = [0, 1, 2, 3, 5, 6, 7, 8];

  const getHeadlines = async () => {
    try {
      const request = await fetch(
        "https://real-time-news-data.p.rapidapi.com/top-headlines?limit=28&country=US&lang=en",
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "2c4fe48bdamshb5d9aee6c8ee203p1c819ajsn935b75530317",
            "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
          },
        }
      );

      const response = await request.json();
      console.log(response.data);
      setHeadlines(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHeadlines();
  }, []);

  return (
    <div className="p-4">
      <Title title="Top Headlines" isUnderline={false} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4">
        {loading
          ? skeletons.map((key) => <NewsCardSkeleton key={key} />)
          : headlines.map((item) => (
              <NewsCard key={item.story_id} news={item} />
            ))}
      </div>
    </div>
  );
};

export default Home;
