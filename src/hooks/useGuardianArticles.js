import {useEffect, useState, useCallback} from 'react';

function useGuardianArticles({sectionId = '', pageSize = 10} = {}) {
  const [page, setPage] = useState(1);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [articles, setArticles] = useState([]);

  const fetchMore = useCallback(() => setShouldFetch(true), []);

  useEffect(() => {
    if (!shouldFetch) {
      return;
    }

    const sectionQuery = sectionId ? `&section=${sectionId}` : '';
    fetch(
      `https://content.guardianapis.com/search?api-key=743c0667-8a7b-4eb9-aca4-d234e1bfcae8&page-size=${pageSize}${sectionQuery}&show-fields=headline,standfirst,thumbnail,firstPublicationDate`,
    )
      .then((response) => response.json())
      .then((json) => {
        const fetchedArticles = json.response.results.map((res) => res.fields);
        console.log(fetchedArticles);

        setShouldFetch(false);
        setArticles((oldArticles) => [...oldArticles, ...fetchedArticles]);
        setPage(page + 1);
      })
      .catch((error) => console.error(error));
  }, [sectionId, page, shouldFetch, pageSize]);

  return [articles, fetchMore];
}

export default useGuardianArticles;
