/* ==========================================================================
   YOUR DETAILS — edit these once and every page updates.
   Leave a value empty ("") to hide that link everywhere.
   ========================================================================== */
const SITE = {
  email: "theopjp@gmail.com",
  linkedin: "https://www.linkedin.com/in/jonathan-pilnick/",
  location: "International / Israel",
};

/* ========================================================================== */

(function () {
  // Links: <a data-href="email|linkedin">
  document.querySelectorAll("[data-href]").forEach(function (el) {
    var key = el.getAttribute("data-href");
    var value = SITE[key];
    var box = el.closest("[data-optional]") || el;
    if (!value) { box.hidden = true; return; }
    box.hidden = false;
    el.setAttribute("href", key === "email" ? "mailto:" + value : value);
    if (key !== "email") {
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    }
  });

  // Text: <span data-text="email|location">
  document.querySelectorAll("[data-text]").forEach(function (el) {
    var value = SITE[el.getAttribute("data-text")];
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
