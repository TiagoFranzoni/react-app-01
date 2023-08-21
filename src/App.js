import './App.css';
import { Header } from './components/Header/Header';
import { BlogMenu } from './components/BlogMenu/BlogMenu';
import { Sidebar } from './components/Sidebar/Sidebar';
import { ArticleList } from './components/ArticleList/ArticleList';

function App() {
  return (
    <>  
      <Header />

      <BlogMenu />

      <div className="blog-container">
        <ArticleList />
        <Sidebar />
      </div>  

    </>

  );
}

export default App;
