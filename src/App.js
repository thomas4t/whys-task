import React, { useEffect, useState } from "react";
import MainContainer from "./styles/containers/MainContainer";
import ArticleContainer from "./styles/containers/ArticleContainer";
import ArticleWrapper from "./components/wrappers/ArticleWrapper";
import CommentsContainer from "./styles/containers/CommentsContainer";
import CommentsWrapper from "./components/wrappers/CommentsWrapper";

const stall = async (stallTime = 1000) => {
  await new Promise((resolve) => setTimeout(resolve, stallTime));
};

function App() {
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState(null);
  const [extraComments, setExtraComments] = useState(null);
  const [loadingExtraComments, setLoadingExtraComments] = useState(false);

  const loadInitialData = async () => {
    await stall(2000);
    setArticle(document.__article);
    await stall(1000);
    setComments(document.__comments);
  };

  const loadExtraComments = async () => {
    setLoadingExtraComments(true);
    await stall(1000);
    setExtraComments(document.__moreComments);
    setLoadingExtraComments(false);
  };

  useEffect(() => {
    loadInitialData();
  }, []);

  return (
    <MainContainer elevation={20}>
      <ArticleContainer>
        <h1>An article by:</h1>
        <ArticleWrapper article={article} />
      </ArticleContainer>
      <CommentsContainer>
        <CommentsWrapper
          comments={comments}
          extraComments={extraComments}
          loadExtraComments={loadExtraComments}
          loadingExtraComments={loadingExtraComments}
        />
      </CommentsContainer>
    </MainContainer>
  );
}

export default App;
