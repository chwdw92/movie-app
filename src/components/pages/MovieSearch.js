import Search from "./Search";

const MovieSearch = ({ loading, setLoading }) => {
  const passoverPropObj = {
    pageType: "movie",
    pageTitle: "Search Movies - Showing Weekly Trending by Default",
    searchInputPlaceholder: "Search by Movie Title",
    mediaType: "movie",
    mediaTypeText: "Movie",
    extraQueryStrForTrendingReq: "&language=en-US&include_adult=false",
    extraQueryStrForSearchReq: "&language=en-US&include_adult=false",
    extraQueryStrForDetailReq: "&language=en-US",
    loading,
    setLoading,
  };

  return <Search passoverPropObj={passoverPropObj}></Search>;
};

export default MovieSearch;
