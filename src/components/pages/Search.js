import { useState, useEffect } from "react";
import axios from "axios";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { trendingBaseUrl, searchBaseUrl } from "../../helpers/constants";
import { scrollToTop } from "../../helpers/functions";
import PreviewContent from "../commons/PreviewContent";
import CustomPagination from "../commons/layouts/CustomPagination";
import "../../customStyles/Search.css";

function Search({ passoverPropObj }) {
  const {
    pageTitle,
    searchInputPlaceholder,
    mediaType,
    mediaTypeText,
    extraQueryStrForTrendingReq,
    extraQueryStrForSearchReq,
    extraQueryStrForDetailReq,
    loading,
    setLoading,
  } = passoverPropObj;

  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [timeoutId, setTimeoutId] = useState(null);
  var apiCallManuallyTriggeredFlag = false;

  const trendingUrlWtPage =
    trendingBaseUrl.replace("%mediaType%", mediaType) +
    extraQueryStrForTrendingReq;
  const searchUrlWtPageWtSearchText =
    searchBaseUrl.replace("%mediaType%", mediaType) + extraQueryStrForSearchReq;

  useEffect(() => {
    if (!apiCallManuallyTriggeredFlag) {
      if (searchText.length === 0) {
        // trending page request
        fetchTrendingContent();
      } else {
        fetchDataForSearch();
      }
    }
  }, [page]); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchTrendingContent = async (paramPage = null) => {
    setLoading(true);
    const reqPage = paramPage ? paramPage : page;
    const trendingUrl = trendingUrlWtPage + `&page=${reqPage}`;
    try {
      const { data } = await axios.get(trendingUrl);

      setContent(data.results);
      setNumOfPages(data.total_pages);
      setLoading(false);
      scrollToTop();
    }catch(err) {
      // do something with err 
    }
  };

  const searchChanges = (e) => {
    const currentSearch = e.target.value.trim();
    const tempPrevSearch = searchText.trim();

    setSearchText(currentSearch);

    const minLenToTiggerApiCall = 1;
    const timeIntervalForApiCall = 400; // ms

    // canceling the previous reserved API call.
    clearTimeout(timeoutId);
    setTimeoutId(null); // reset

    // check if there is any changes in the search text
    if (currentSearch !== tempPrevSearch) {
      if (currentSearch.length > minLenToTiggerApiCall) {
        // search request
        // for debouncing
        setTimeoutId(
          setTimeout(() => {
            apiCallManuallyTriggeredFlag = true; // prevent a useEffect api call
            setPage(1); // reset to page 1
            fetchDataForSearch(1, currentSearch);
          }, timeIntervalForApiCall)
        );
      } else if (currentSearch.length === 0) {
        apiCallManuallyTriggeredFlag = true; // prevent a useEffect api call
        // empty search text -> reset to first trending page.
        setPage(1); // reset to page 1
        fetchTrendingContent(1);
      }
    }
  };

  const fetchDataForSearch = async (
    paramPage = null,
    paramSearchText = null
  ) => {
    setLoading(true);
    const reqPage = paramPage ? paramPage : page;
    const reqSearchText = paramSearchText ? paramSearchText : searchText;
    const searchUrl =
      searchUrlWtPageWtSearchText + `&page=${reqPage}&query=${reqSearchText}`;
    try {
      const { data } = await axios.get(searchUrl);
      setContent(data.results);
      setNumOfPages(data.total_pages);
  
      setLoading(false);
      scrollToTop();
    }catch(err) {
      // do something with err 
    }
  };

  return (
    <section>
      <h2>{pageTitle}</h2>
      <TextField
        className="mui-text-field"
        required
        label={searchInputPlaceholder}
        variant="standard"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        defaultValue={searchText}
        onChange={(e) => searchChanges(e)}
      />

      {loading ? (
        ""
      ) : (
        <div className="search-result">
          {content &&
            content.map((previewInfo) => {
              const passoverPropObj = {
                id: previewInfo.id,
                poster: previewInfo.poster_path,
                title: previewInfo.title || previewInfo.name,
                date: previewInfo.release_date || previewInfo.first_air_date,
                mediaType: mediaType,
                mediaTypeText: mediaTypeText,
                voteAvg: previewInfo.vote_average,
                extraQueryStrForDetailReq,
                setLoading,
              };
              return (
                <PreviewContent
                  key={previewInfo.id}
                  passoverPropObj={passoverPropObj}
                />
              );
            })}

          {content.length === 0 && (
            <p className="no-result-found">0 results found</p>
          )}
          {numOfPages > 1 && (
            <CustomPagination
              currPage={page}
              setPage={setPage}
              numOfPages={numOfPages}
            />
          )}
        </div>
      )}
    </section>
  );
}

export default Search;
