// Small touches on every list of publications (about page, publications page, paper pages):
//  - the journal link ("HTML") is labelled with the journal name (PRD, PLB, ...) and placed right after arXiv;
//  - the link to the paper's own page ("Website") becomes a "Discuss" button, and the paper title links there too;
//  - on a paper's own page, that self-link is hidden.
(function () {
  function run() {
    var here = window.location.pathname.replace(/\/+$/, "/");

    document.querySelectorAll(".publications a.btn").forEach(function (b) {
      var label = b.textContent.trim();
      var row = b.closest(".row");

      if (label === "HTML") {
        var badge = row && row.querySelector(".abbr abbr");
        if (badge) b.textContent = badge.textContent.trim();
        var arxiv = Array.from(b.parentNode.querySelectorAll("a.btn")).find(function (x) {
          return x.textContent.trim() === "arXiv";
        });
        if (arxiv) arxiv.after(b);
      }

      if (label === "Website") {
        var path = new URL(b.href, window.location.origin).pathname.replace(/\/+$/, "/");
        if (path === here) {
          // On the paper's own page the abstract is shown in full, so drop the self-link and the Abs toggle.
          if (row) {
            row.querySelectorAll("a.btn").forEach(function (x) {
              if (x.textContent.trim() === "Abs") x.remove();
            });
            row.querySelectorAll("div.abstract").forEach(function (x) {
              x.remove();
            });
          }
          b.remove();
          return;
        }
        b.textContent = "💬 Discuss";
        b.title = "Comment on this paper or leave a reaction";
        var title = row && row.querySelector(".title");
        if (title && !title.querySelector("a")) {
          var a = document.createElement("a");
          a.href = b.href;
          a.textContent = title.textContent;
          a.style.color = "inherit";
          title.textContent = "";
          title.appendChild(a);
        }
      }
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
  else run();
})();
