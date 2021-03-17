export const removeStrongTags = (text) =>
  text?.replaceAll('<strong>', '')?.replaceAll('</strong>', '');
