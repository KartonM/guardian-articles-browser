const initialState = {
  sections: [],
  bookmarkedArticles: [],
};

export const setSections = (sections) => ({
  type: 'SET_SECTIONS',
  payload: sections,
});

export const bookmarkArticle = (article) => ({
  type: 'BOOKMARK_ARTICLE',
  payload: article,
});

export const unbookmarkArticle = (articleId) => ({
  type: 'UNBOOKMARK_ARTICLE',
  payload: articleId,
});

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SECTIONS':
      for (const section of action.payload) {
        section.isVisible = section.isVisible ?? true;
        section.isFollowed = section.isFollowed ?? false;
      }
      return {
        ...state,
        sections: [...action.payload],
      };
    case 'UNBOOKMARK_ARTICLE':
      return removeArticleById(state, action.payload);
    case 'BOOKMARK_ARTICLE':
      const withoutPrevArticle = removeArticleById(state, action.payload.id);
      return {
        ...withoutPrevArticle,
        bookmarkedArticles: [
          action.payload,
          ...withoutPrevArticle.bookmarkedArticles,
        ],
      };
    default:
      return state;
  }
};

const removeArticleById = (state, articleId) => {
  const articleToBeRemovedIndex = state.bookmarkedArticles.findIndex(
    (article) => article.id === articleId,
  );
  const articles = [...state.bookmarkedArticles];
  articles.splice(articleToBeRemovedIndex, 1);
  return articleToBeRemovedIndex >= 0
    ? {
        ...state,
        bookmarkedArticles: articles,
      }
    : state;
};

export default rootReducer;
