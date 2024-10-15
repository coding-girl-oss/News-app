import { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true); 
        props.setProgress(10)
        const data = await fetch( `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}` );
        props.setProgress(50)
        const parsedData = await data.json();
        setArticles(parsedData.articles);
        props.setProgress(70)
        setTotalResults(parsedData.totalResults);
        setLoading(false); 
        props.setProgress(100)
      } catch (error) {
        console.error('Error fetching the articles:', error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, [props.category, props.apiKey, props.pageSize]);

  const fetchMoreData = async () => {
    try {
      const nextPage = page + 1; 

      const data = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}&pageSize=${props.pageSize}`
      );
      const parsedData = await data.json();
      setArticles((prevArticles) => [...prevArticles, ...parsedData.articles]);
      setPage(nextPage);
    } catch (error) {
      console.error('Error fetching more articles:', error);
    }
  };

  return (
    <>
      <div className="text-pink-900 flex justify-center">
        <h1 className="text-center pt-4 font-mono text-5xl font-bold">NewsHub</h1>
        <img
          className="h-10 ml-[-10px]"
          src="https://cdn-icons-png.flaticon.com/128/12709/12709566.png"
          alt="NewsHub"
        />
      </div>
      <div>{loading && <Spinner />}</div>

      <InfiniteScroll
        dataLength={articles.length} 
        next={fetchMoreData} 
        hasMore={articles.length < totalResults} 
        loader={<Spinner />}
        endMessage={<p className="text-center text-white font-bold">No more articles to load.</p>} 
      >
        <div className="grid grid-col-1 md:grid-cols-2 md:gap-5 lg:grid-cols-3 gap-y-5 py-6">
          {articles.map((article) => (
            <div key={article.url} className="grid row-span-1">
              <NewsItem article={article} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default News;


