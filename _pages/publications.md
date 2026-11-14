---
layout: page
permalink: /publications/
title: publications
description: Journal articles and preprints, most recent first. Authors are listed alphabetically.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>

<script>
  // Label each journal link with the journal name (PRD, PLB, ...) and place it right after the arXiv button.
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("a.btn").forEach(function (b) {
      if (b.textContent.trim() !== "HTML") return;
      var row = b.closest(".row");
      var badge = row && row.querySelector(".abbr abbr");
      if (badge) b.textContent = badge.textContent.trim();
      var arxiv = Array.from(b.parentNode.querySelectorAll("a.btn")).find(function (x) {
        return x.textContent.trim() === "arXiv";
      });
      if (arxiv) arxiv.after(b);
    });
  });
</script>
