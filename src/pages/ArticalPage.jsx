import { useParams } from "react-router-dom";
import articles from "./article-content";
const ArticalPage = () => {
  const { articleId } = useParams();
  const article = articles.find(({ name }) => articleId === name);
  return (
    <>
      {article ? (
        <>
          <h1>{article.title}</h1>
          {article.content.map((paragraph, index) => <p key={`${article.title}-${index}`}>{paragraph}</p>)}
        </>
      ) : (
        <>
            <h1>Not Found</h1>
            <p>Sorry the article you are searching for is not found.</p>
        </>
      )}
    </>
  );
};

export default ArticalPage;
