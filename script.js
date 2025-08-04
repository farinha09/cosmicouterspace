function loader (all) {
  // (A) ALL LOADED - REMOVE SPINNER
  var total = 0, loaded = 0, s,
  ready = () => {
    loaded++;
    if (loaded>=total) { document.getElementById("loading").remove(); }
  };

  // (B) CREATE <LINK><SCRIPT>
  if (Array.isArray(all)) {
    total = all.length;
    all.forEach(url => {
      // (B1) CSS FILE - <LINK>
      if (url.toLowerCase().includes(".css")) {
        s = document.createElement("link");
        s.rel = "stylesheet";
        s.href = url;
        s.onload = ready; s.onerror = ready;
      }

      // (B2) JS FILE - <SCRIPT ASYNC>
      else {
        s = document.createElement("script");
        s.async = true;
        s.src = url;
        s.onload = ready; s.onerror = ready;
      }
      document.head.appendChild(s);
    });
  }

  // (C) JUST START IF NO SCRIPTS TO LOAD
  else { ready(); }
}


