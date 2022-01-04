/*Global constants */
import imgNotFound from "../assets/image-not-found.png";

/** TMDB -- */
// Trending
export const trendingBaseUrl = `https://api.themoviedb.org/3/trending/%mediaType%/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

// Details
export const detailsBaseUrl = `https://api.themoviedb.org/3/%mediaType%/%id%?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

// Search
export const searchBaseUrl = `https://api.themoviedb.org/3/search/%mediaType%?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

//image url templates for different size(s)
const imgBaseUrl = "https://image.tmdb.org/t/p";
const imgSize300 = "w300";
const imgSize500 = "w500";

export const imgUrlTemplateForW300 = `${imgBaseUrl}/${imgSize300}`;
export const imgUrlTemplateForW500 = `${imgBaseUrl}/${imgSize500}`;

// image replacement urls
export const posterReplacementImgForImgSize500 = imgNotFound;
export const posterReplacementImgForImgSize300 = imgNotFound;

/** --TMDB */
