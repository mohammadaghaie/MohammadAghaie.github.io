---
layout: page
permalink: /contact/
title: contact
description: Questions about my work, collaborations, or seminar invitations are all welcome.
nav: true
nav_order: 6
---

<style>
  .contact-wrap { display: grid; grid-template-columns: 1fr 2fr; gap: 2rem; margin-top: 1rem; }
  @media (max-width: 720px) { .contact-wrap { grid-template-columns: 1fr; } }
  .contact-info p { margin-bottom: 0.6rem; }
  .contact-info i { width: 1.4rem; color: var(--global-theme-color); }
  .contact-form label { display: block; font-weight: 500; margin: 0 0 0.3rem; }
  .contact-form input, .contact-form textarea {
    width: 100%; padding: 0.6rem 0.75rem; margin-bottom: 1rem;
    border: 1px solid var(--global-divider-color); border-radius: 6px;
    background: var(--global-bg-color); color: var(--global-text-color); font: inherit;
  }
  .contact-form input:focus, .contact-form textarea:focus { outline: none; border-color: var(--global-theme-color); }
  .contact-form textarea { min-height: 10rem; resize: vertical; }
  .contact-form .honey { display: none; }
  .contact-form button {
    padding: 0.6rem 1.6rem; border: 0; border-radius: 6px; cursor: pointer;
    background: var(--global-theme-color); color: #fff; font: inherit; font-weight: 500;
  }
  .contact-form button:hover { opacity: 0.88; }
  .contact-sent { display: none; padding: 0.8rem 1rem; border-radius: 6px; margin-bottom: 1rem;
    border: 1px solid var(--global-theme-color); }
</style>

<div class="contact-wrap">
  <div class="contact-info">
    <p><i class="fa-solid fa-envelope"></i> <a href="mailto:aghaie.sci@osaka-u.ac.jp">aghaie.sci@osaka-u.ac.jp</a></p>
    <p><i class="fa-solid fa-building-columns"></i> University of Osaka<br><span style="margin-left: 1.4rem">Osaka, Japan</span></p>
    <p><i class="ai ai-orcid"></i> <a href="https://orcid.org/0009-0002-6945-2622">ORCID</a></p>
    <p><i class="ai ai-inspire"></i> <a href="https://inspirehep.net/authors/2688235">INSPIRE</a></p>
    <p><i class="ai ai-google-scholar"></i> <a href="https://scholar.google.com/citations?user=tKmk0DkAAAAJ">Google Scholar</a></p>
    <p><i class="fa-brands fa-linkedin"></i> <a href="https://www.linkedin.com/in/mohammad-aghaie-070427233/">LinkedIn</a></p>
    <p><i class="fa-solid fa-users"></i> <a href="https://www-het.phys.sci.osaka-u.ac.jp/mem-e.html">Osaka particle theory group</a></p>
  </div>
  <div>
    <div class="contact-sent" id="contact-sent">Thank you, your message has been sent. I'll get back to you soon.</div>
    <form class="contact-form" action="https://formsubmit.co/aghaie.sci@osaka-u.ac.jp" method="POST">
      <input type="hidden" name="_subject" value="New message from your website">
      <input type="hidden" name="_template" value="table">
      <input type="hidden" name="_next" value="https://mohammadaghaie.github.io/contact/?sent=1">
      <input type="text" name="_honey" class="honey" tabindex="-1" autocomplete="off">
      <label for="cf-name">Name</label>
      <input id="cf-name" type="text" name="name" required>
      <label for="cf-email">Email</label>
      <input id="cf-email" type="email" name="email" required>
      <label for="cf-message">Message</label>
      <textarea id="cf-message" name="message" required></textarea>
      <button type="submit">Send message</button>
    </form>
  </div>
</div>

<script>
  if (new URLSearchParams(window.location.search).get("sent")) {
    document.getElementById("contact-sent").style.display = "block";
  }
</script>
