const initialState = {
  sections: [],
};

export const setSections = (sections) => ({
  type: 'SET_SECTIONS',
  payload: sections,
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
    default:
      return state;
  }
};

export default rootReducer;
