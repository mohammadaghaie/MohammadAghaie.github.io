---
layout: about
title: about
permalink: /
subtitle: Postdoctoral Researcher · <a href='https://www.osaka-u.ac.jp/en'>University of Osaka</a>, Japan

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular

selected_papers: true # shows the papers marked selected={true}: keep this to the 5 most recent
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: false
  limit: 5 # the 5 most recent news items; all of them stay on /news/

latest_posts:
  enabled: true
  scrollable: false
  limit: 5
---

<style>
  .welcome { position: fixed; inset: 0; z-index: 5000; display: flex; align-items: center; justify-content: center; padding: 1.5rem;
    background: linear-gradient(rgba(8, 14, 28, 0.35), rgba(8, 14, 28, 0.65)), url("{{ '/assets/img/welcome/background.jpg' | relative_url }}") center / cover no-repeat;
    color: #eef3fb; transition: opacity 0.6s ease, visibility 0.6s ease; overflow-y: auto; }
  .welcome.hidden { opacity: 0; visibility: hidden; }
  .welcome-card { max-width: 640px; text-align: center; animation: welcome-rise 0.9s ease both; }
  @keyframes welcome-rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
  .welcome-portrait { width: 170px; height: 170px; border-radius: 50%; object-fit: cover; border: 3px solid rgba(255, 255, 255, 0.85);
    box-shadow: 0 0 0 8px rgba(79, 195, 247, 0.15), 0 12px 40px rgba(0, 0, 0, 0.5); }
  .welcome h1 { font-size: 2.6rem; font-weight: 300; margin: 1.2rem 0 0.2rem; color: #fff; letter-spacing: 0.01em; }
  .welcome h1 b { font-weight: 700; }
  .welcome-role { font-size: 1rem; opacity: 0.8; margin-bottom: 1.6rem; letter-spacing: 0.04em; }
  .welcome, .welcome h1, .welcome-role, .welcome-message { color: #eef3fb !important; }
  .welcome-message { font-size: 1.15rem; line-height: 1.65; font-weight: 300; margin: 0 auto 2rem; max-width: 560px; }
  .welcome-message em { font-size: 1.28rem; font-style: italic; color: #ffffff !important; }
  .welcome-enter { font: inherit; font-size: 1.05rem; font-weight: 500; letter-spacing: 0.03em; color: #0f1b2d; background: #fff;
    border: 0; border-radius: 999px; padding: 0.75rem 2.2rem; cursor: pointer; box-shadow: 0 8px 30px rgba(79, 195, 247, 0.35);
    transition: transform 0.2s ease, box-shadow 0.2s ease; }
  .welcome-enter:hover { transform: translateY(-2px); box-shadow: 0 12px 36px rgba(79, 195, 247, 0.55); }
  .welcome-links { margin-top: 2.2rem; display: flex; gap: 0.6rem; justify-content: center; flex-wrap: wrap; }
  .welcome .welcome-links a { min-width: 70px; padding: 0 0.3rem; display: flex; flex-direction: column; align-items: center; gap: 0.45rem;
    color: rgba(238, 243, 251, 0.88) !important; text-decoration: none !important; transition: color 0.2s ease, transform 0.2s ease; }
  .welcome .welcome-links a i { font-size: 1.45rem; height: 1.6rem; line-height: 1.6rem; color: inherit !important; }
  .welcome .welcome-links a span { font-size: 0.74rem; letter-spacing: 0.03em; line-height: 1.2; white-space: nowrap; color: inherit !important; }
  .welcome .welcome-links a:hover { color: #4fc3f7 !important; transform: translateY(-2px); }
  @media (max-width: 576px) { .welcome h1 { font-size: 2rem; } .welcome-message { font-size: 1.02rem; } .welcome .welcome-links a { min-width: 60px; } .welcome-portrait { width: 130px; height: 130px; } }
</style>
<div id="welcome" class="welcome" role="dialog" aria-modal="true" aria-label="Welcome">
<div class="welcome-card">
<img class="welcome-portrait" src="{{ '/assets/img/welcome/portrait.jpg' | relative_url }}" alt="Mohammad Aghaie">
<h1><b>Mohammad</b> Aghaie</h1>
<div class="welcome-role">Theoretical physicist · University of Osaka</div>
<div class="welcome-message"><em>What if the next clue to dark matter is hiding in a phenomenon we already know, one we simply haven't looked at in the right way?</em></div>
<button class="welcome-enter" id="welcome-enter" type="button">Enter website</button>
<div class="welcome-links">
<a href="mailto:aghaie.sci@osaka-u.ac.jp" title="Email"><i class="fa-solid fa-envelope"></i><span>Email</span></a>
<a href="https://inspirehep.net/authors/2688235" title="INSPIRE"><i class="ai ai-inspire"></i><span>INSPIRE</span></a>
<a href="https://scholar.google.com/citations?user=tKmk0DkAAAAJ" title="Google Scholar"><i class="ai ai-google-scholar"></i><span>Google Scholar</span></a>
<a href="https://orcid.org/0009-0002-6945-2622" title="ORCID"><i class="ai ai-orcid"></i><span>ORCID</span></a>
<a href="https://www.linkedin.com/in/mohammad-aghaie-070427233/" title="LinkedIn"><i class="fa-brands fa-linkedin"></i><span>LinkedIn</span></a>
<a href="https://arxiv.org/search/?searchtype=author&query=Aghaie%2C+Mohammad&order=-announced_date_first" title="arXiv"><i class="ai ai-arxiv"></i><span>arXiv</span></a>
<a href="{{ '/contact/' | relative_url }}" title="Contact form"><i class="fa-solid fa-paper-plane"></i><span>Contact</span></a>
</div>
</div>
</div>
<script>
  (function () {
    var w = document.getElementById("welcome");
    var seen = false;
    try { seen = sessionStorage.getItem("welcomeSeen") === "1"; } catch (e) {}
    if (seen) { w.style.display = "none"; return; }
    document.documentElement.style.overflow = "hidden";
    function enter() {
      w.classList.add("hidden");
      document.documentElement.style.overflow = "";
      try { sessionStorage.setItem("welcomeSeen", "1"); } catch (e) {}
      setTimeout(function () { w.style.display = "none"; }, 650);
    }
    document.getElementById("welcome-enter").addEventListener("click", enter);
    document.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === "Escape") enter(); });
  })();
</script>

I am a theoretical physicist and a postdoctoral researcher in the [particle physics theory group](https://www-het.phys.sci.osaka-u.ac.jp/mem-e.html) at the University of Osaka, working with Ryosuke Sato.

My research is driven by a simple question: **where should we look for the first clues of physics beyond the Standard Model?** I explore this question across particle physics, cosmology and astrophysics, focusing on phenomena that may open windows onto new fundamental physics. From dark matter and neutrinos to gravitational waves and astrophysical observations, I study how signals, anomalies and precision measurements can reveal departures from the Standard Model and guide us toward the underlying theory.

Before coming to Osaka, I did my [PhD at the University of Pisa](https://phd2.df.unipi.it/en/students/profiles/?smid=2377) with Paolo Panci, with a thesis on [_Signals from the Dark Sector: A Phenomenological Study of ALPs, Ultralight Fields, and Minimal Dark Matter_](https://etd.adm.unipi.it/t/etd-09172025-131512/). Before that, I studied gravitation and cosmology at the University of Tehran.

**Research interests:** dark matter · axions and ALPs · BSM phenomenology · indirect detection · cosmology · astroparticle theory.

My full list of papers is on [INSPIRE](https://inspirehep.net/authors/2688235), [Google Scholar](https://scholar.google.com/citations?user=tKmk0DkAAAAJ) and [arXiv](https://arxiv.org/search/?searchtype=author&query=Aghaie%2C+Mohammad&order=-announced_date_first).

<script>
  // Section titles: "latest news" and "latest publications".
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("h2 > a").forEach(function (a) {
      var t = a.textContent.trim();
      if (t === "news") a.textContent = "latest news";
      if (t === "selected publications") a.textContent = "latest publications";
    });
  });
</script>
<script src="{{ '/assets/js/paper-links.js' | relative_url }}"></script>
