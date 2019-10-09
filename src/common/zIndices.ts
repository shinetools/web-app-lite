/* eslint-diable sort-keys */
const zIndices = {
  appContainer: 1,

  // Page components includes items that sit on top of the page
  // but are still part of it such as dropdowns,
  pageComponent: 2,

  // Page overlays are items that sit on top of a page and its
  // page components but should still be covered by modals and other
  // non-page items.
  pageOverlay: 3,

  modalsContainer: 4,
  alertsContainer: 5,

  // Top application level overlays that should not be covered by anything else
  appOverlay: 10,

  toast: 11,
};

export default zIndices;
