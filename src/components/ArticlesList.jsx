import { Link } from "react-router-dom";

const ArticlesList = ({articles}) => {
    return (
      <>
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
  
  export default ArticlesList;