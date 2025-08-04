// Function to show the loading overlay
function showLoader() {
    const loaderDiv = document.createElement('div');
    loaderDiv.id = 'loading';
    document.body.appendChild(loaderDiv);
}

// Function to hide the loading overlay
function hideLoader() {
    const loader = document.getElementById("loading");
    if (loader) {
        loader.remove();
    }
}

// Existing loader function (modified to only hide the loader)
function loader (all) {
  var total = 0, loaded = 0, s,
  ready = () => {
    loaded++;
    if (loaded>=total) { hideLoader(); }
  };

  if (Array.isArray(all)) {
    total = all.length;
    all.forEach(url => {
      if (url.toLowerCase().includes(".css")) {
        s = document.createElement("link");
        s.rel = "stylesheet";
        s.href = url;
        s.onload = ready; s.onerror = ready;
      }
      else {
        s = document.createElement("script");
        s.async = true;
        s.src = url;
        s.onload = ready; s.onerror = ready;
      }
      document.head.appendChild(s);
    });
  }
  else { ready(); }
}