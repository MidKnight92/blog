import { Link } from 'react-router-dom'
import articles from "./article-content";

const ArticlesListPage = () => {
  return (
    <>
      <h1>Articles</h1>
      <ul>
        {articles.map(({ name, content }) => (
          <Link key={name} className="article-list-item" to={`/articles/${name}`}>
            <h3>{name}</h3>
            <p>{content[0].substring(0, 150)}...</p>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default ArticlesListPage;
