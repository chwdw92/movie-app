/**
 * Scrolls to the top of the page
 * e.g. used when a pagination changes or there is a new request for a search
 */
export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
