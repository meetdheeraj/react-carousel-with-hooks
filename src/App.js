import { useState, useEffect } from 'react';
import './App.css';
import Carousel from './components/carousel';
import data from "./data.json";


function App() {
  const [category, selectCategory] = useState('all');
  const [list, filterList] = useState(data);

  useEffect(() => {
    filterList(category === 'all' ? data : data.filter(item=>item.category===category));
}, [category]);

  return (
    <div className="App">
      <Carousel data={list}/>
      <div className="filter">
        <div className={`all ${category === 'all' ? 'highlighted' : ''}`} onClick={()=>selectCategory('all')}>All</div>
        <div className={`electronics ${category === 'electronics' ? 'highlighted' : ''}`} onClick={()=>selectCategory('electronics')}>Electronics</div>
        <div className={`books ${category === 'books' ? 'highlighted' : ''}`} onClick={()=>selectCategory('books')}>Books</div>
      </div>
    </div>
  );
}


export default App;
