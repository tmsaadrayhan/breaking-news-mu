import './App.css';
import Button from '@mui/material/Button';
import News from './News/News';
import { useEffect, useState } from 'react';


function App() {
  const [articles, setArticles]= useState([]);
  useEffect(()=>{
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=5426eb00b02f4ad78e2f1229e32be997")
    .then(res=>res.json())
    .then(data=>setArticles(data.articles))
  }, [])
  console.log(articles);
  return (
    <div className="App">
      <Button variant="contained">Hello world</Button>
      <h2>Headlines: {articles.length}</h2>
      {
        articles.map(article=> <News key={articles.indexOf(article)} article={article}></News>)
      }
    </div>
  );
}

export default App;
