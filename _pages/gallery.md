---
layout: page
permalink: /gallery/
title: gallery
description: Moments from conferences, workshops and visits.
nav: true
nav_order: 4
---

<style>
  .gallery-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1.25rem; margin-top: 1rem; }
  .gallery-grid figure { margin: 0; }
  .gallery-grid img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; border-radius: 8px; cursor: zoom-in; }
  .gallery-grid figcaption { margin-top: 0.45rem; font-size: 0.92rem; line-height: 1.35; }
  .gallery-grid figcaption .meta { display: block; color: var(--global-text-color-light); font-size: 0.85rem; }
</style>

{% assign photos = site.data.gallery.photos %}
{% if photos and photos.size > 0 %}
<div class="gallery-grid">
{% for p in photos %}
<figure>
<img src="{{ '/assets/img/gallery/' | append: p.image | relative_url }}" alt="{{ p.caption | escape }}" loading="lazy" data-zoomable>
<figcaption>{{ p.caption }}<span class="meta">{{ p.place }}{% if p.place and p.date %} · {% endif %}{{ p.date }}</span></figcaption>
</figure>
{% endfor %}
</div>
{% else %}
<p>Photos coming soon.</p>
{% endif %}
