import Search from "./Search";

const SeriesSearch = ({ loading, setLoading }) => {
  const passoverPropObj = {
    pageType: "series",
    pageTitle: "Search TV Series - Showing Weekly Trending by Default",
    searchInputPlaceholder: "Search by Tv Series Title",
    mediaType: "tv",
    mediaTypeText: "TV Series",
    extraQueryStrForTrendingReq: "&language=en-US&include_adult=false",
    extraQueryStrForSearchReq: "&language=en-US&include_adult=false",
    extraQueryStrForDetailReq: "&language=en-US",
    loading,
    setLoading,
  };

  return <Search passoverPropObj={passoverPropObj}></Search>;
};

export default SeriesSearch;
