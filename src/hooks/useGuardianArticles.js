import {useEffect, useState, useCallback} from 'react';

function useGuardianArticles({
  sectionId = '',
  pageSize = 10,
  initArticles = [],
  rejectListedSectionIds = [],
} = {}) {
  const [page, setPage] = useState(1);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [articles, setArticles] = useState(initArticles);

  const fetchMore = useCallback(() => setShouldFetch(true), []);

  useEffect(() => {
    setPage(1);
    setShouldFetch(true);
  }, [sectionId]);

  useEffect(() => {
    if (!shouldFetch || pageSize <= 0) {
      return;
    }

    const sectionQuery = sectionId
      ? `&section=${sectionId}`
      : rejectListedSectionIds.length > 0
      ? `&section=-${rejectListedSectionIds.join(',-')}`
      : '';

    fetch(
      `https://content.guardianapis.com/search?api-key=743c0667-8a7b-4eb9-aca4-d234e1bfcae8&page-size=${pageSize}${sectionQuery}&page=${page}&show-fields=headline,trailText,thumbnail,firstPublicationDate,bodyText`,
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const fetchedArticles = json.response.results.map((res) => {
          return {id: res.id, ...res.fields};
        });
        // console.log(fetchedArticles);

        setShouldFetch(false);
        setArticles((oldArticles) =>
          page === 1 ? fetchedArticles : [...oldArticles, ...fetchedArticles],
        );
        setPage(page + 1);
      })
      .catch((error) => console.error(error));
  }, [sectionId, page, shouldFetch, pageSize, rejectListedSectionIds]);

  return [articles, fetchMore];
}

export default useGuardianArticles;
