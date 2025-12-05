function go() {
  const statusBox = document.getElementById("status");

  const path = window.location.pathname.replace(/^\/+/, "");

  if (!path) {
    statusBox.innerHTML = "QR Manager – no code provided.";
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
