---
layout: about
title: about
permalink: /
subtitle: Postdoctoral Researcher · <a href='https://www.osaka-u.ac.jp/en'>University of Osaka</a>, Japan

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: false # show every news item, so the PhD defense always stays visible
  limit: # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: true
  scrollable: true
  limit: 3
---

I am a theoretical physicist and a postdoctoral researcher in the [particle physics theory group](https://www-het.phys.sci.osaka-u.ac.jp/mem-e.html) at the University of Osaka, working with Ryosuke Sato.

My research is driven by a simple question: **where should we look for the first clues of physics beyond the Standard Model?** I explore this question across particle physics, cosmology and astrophysics, focusing on phenomena that may open windows onto new fundamental physics. From dark matter and neutrinos to gravitational waves and astrophysical observations, I study how signals, anomalies and precision measurements can reveal departures from the Standard Model and guide us toward the underlying theory.

Before coming to Osaka, I did my [PhD at the University of Pisa](https://phd2.df.unipi.it/en/students/profiles/?smid=2377) with Paolo Panci, with a thesis on _Signals from the Dark Sector_. Before that, I studied gravitation and cosmology at the University of Tehran. I am currently the PI of a JSPS Grant-in-Aid for Research Activity Start-up on in-medium gauge responses of anomaly-free ALP dark matter.

**Research interests:** dark matter · axions and ALPs · BSM phenomenology · indirect detection · cosmology · astroparticle theory.

My full list of papers is on [INSPIRE](https://inspirehep.net/authors/2688235), [Google Scholar](https://scholar.google.com/citations?user=tKmk0DkAAAAJ) and [arXiv](https://arxiv.org/search/?searchtype=author&query=Aghaie%2C+Mohammad&order=-announced_date_first).

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
