const iframe = document.getElementById('targetx-form');

function loadTargetXIframe() {
  // 1. Get the iframe element
  if (!iframe) return;

  // 2. Grab the base URL from our data-src attribute
  let baseUrl = iframe.getAttribute('data-src');

  // 3. Extract the 'utm_campaign' value from the current browser URL
  const urlParams = new URLSearchParams(window.location.search);
  const campaignValue = urlParams.get('utm_campaign');

  // 4. If a campaign value exists, append it to the URL using the txf1 key
  if (campaignValue) {
      // TargetX URLs often use '#' for routing, so we ensure the param 
      // is added correctly. Most TX forms accept params after the '#'
      // (i.e. normally URL params go before the '#' in a URL but that would break the TX form routing)
      baseUrl += "&txf1=" + encodeURIComponent(campaignValue); //txf1 targets a hidden form field with auto-fill enabled.
  }

  // 5. Set the final src to trigger the iframe load
  iframe.src = baseUrl;
}

export default loadTargetXIframe;
