const initialState = {
  sections: [],
};

export const setSections = (sections) => ({
  type: 'SET_SECTIONS',
  payload: sections,
});

export const toggleSectionVisible = (sectionId) => ({
  type: 'TOGGLE_SECTION_VISIBLE',
  payload: sectionId,
});

export const toggleSectionFollowed = (sectionId) => ({
  type: 'TOGGLE_SECTION_FOLLOWED',
  payload: sectionId,
});

const updateSectionProperty = (sections, sectionId, updateF) => {
  const section = sections.find((s) => s.id === sectionId);
  updateF(section);
  return [...sections];
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SECTIONS':
      for (const section of action.payload) {
        section.isVisible = true;
        section.isFollowed = false;
      }
      return {
        ...state,
        sections: action.payload,
      };
    case 'TOGGLE_SECTION_VISIBLE':
      return {
        ...state,
        sections: updateSectionProperty(
          state.sections,
          action.payload,
          (section) => {
            section.isVisible = !section.isVisible;
          },
        ),
      };
    case 'TOGGLE_SECTION_FOLLOWED':
      return {
        ...state,
        sections: updateSectionProperty(
          state.sections,
          action.payload,
          (section) => {
            section.isFollowed = !section.isFollowed;
          },
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
