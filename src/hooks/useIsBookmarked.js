import {useSelector} from 'react-redux';

function useIsBookmarked(article) {
  return useSelector((state) =>
    state.bookmarkedArticles.some(
      (bookmarkedArticle) => bookmarkedArticle.id === article?.id,
    ),
  );
}

export default useIsBookmarked;
