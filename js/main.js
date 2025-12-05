function go() {
  const statusBox = document.getElementById("status");
  const iframeContainer = document.getElementById("iframe-container");

  const path = window.location.pathname.replace(/^\/+/, "");

  if (!path) {
    statusBox.style.display = "none";
    iframeContainer.style.display = "block";
    return;
  }

  if (typeof redirects === "undefined") {
    statusBox.innerHTML = "error: redirects.js not loaded.";
    return;
  }

  const destination = redirects[path];

  if (destination) {
    statusBox.innerHTML = "redirecting to " + destination + "...";
    window.location.href = destination;
  } else {
    statusBox.innerHTML = "404 – QR code not found.";
  }
}

go();
