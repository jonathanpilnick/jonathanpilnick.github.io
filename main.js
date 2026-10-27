/* ==========================================================================
   YOUR DETAILS — edit these once and every page updates.
   ========================================================================== */
const SITE = {
  email: "your.email@example.com",
  linkedin: "https://www.linkedin.com/in/your-profile/",
  github: "https://github.com/jonathanpilnick",
  location: "City, Country",
};

/* ========================================================================== */

(function () {
  // Links: <a data-href="email|linkedin|github">
  document.querySelectorAll("[data-href]").forEach(function (el) {
    var key = el.getAttribute("data-href");
    var value = SITE[key];
    if (!value) return;
    el.setAttribute("href", key === "email" ? "mailto:" + value : value);
    if (key !== "email") {
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    }
  });

  // Text: <span data-text="email|location|linkedin-handle">
  document.querySelectorAll("[data-text]").forEach(function (el) {
    var key = el.getAttribute("data-text");
    var value;
    if (key === "linkedin-handle") {
      value = SITE.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
    } else if (key === "github-handle") {
      value = SITE.github.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
    } else {
      value = SITE[key];
    }
    if (value) el.textContent = value;
  });

  // "Copy email" button on the contact page
  var copyBtn = document.querySelector("[data-copy-email]");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var done = function () {
        var original = copyBtn.textContent;
        copyBtn.textContent = "Copied ✓";
        setTimeout(function () { copyBtn.textContent = original; }, 1800);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(SITE.email).then(done, function () { window.prompt("Copy my email:", SITE.email); });
      } else {
        window.prompt("Copy my email:", SITE.email);
      }
    });
  }
})();
