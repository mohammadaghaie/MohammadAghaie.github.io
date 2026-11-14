---
layout: page
permalink: /talks/
title: talks
description: Seminars, conference talks and workshops. Click a venue or the event link for the official page.
nav: true
nav_order: 3
---

<style>
  .talks-year { font-size: 1.6rem; font-weight: 300; color: var(--global-text-color-light); text-align: right;
    border-top: 1px solid var(--global-divider-color); margin: 1.8rem 0 0.4rem; padding-top: 0.4rem; }
  .talk { display: flex; gap: 1rem; padding: 0.9rem 0; border-bottom: 1px solid var(--global-divider-color); }
  .talk:last-child { border-bottom: 0; }
  .talk-logo { flex: 0 0 56px; height: 56px; border-radius: 12px; background: #fff; display: flex;
    align-items: center; justify-content: center; box-shadow: 0 1px 4px rgba(0,0,0,0.15); overflow: hidden; }
  .talk-logo img { width: 36px; height: 36px; object-fit: contain; }
  .talk-logo img[src*='/logos/'] { width: 52px; height: 52px; }
  .talk-body { flex: 1; min-width: 0; }
  .talk-meta { font-size: 0.85rem; color: var(--global-text-color-light); display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; }
  .talk-tag { font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em;
    padding: 0.1rem 0.5rem; border-radius: 4px; border: 1px solid var(--global-theme-color); color: var(--global-theme-color); }
  .talk-tag.upcoming { background: var(--global-theme-color); color: #fff; }
  .talk-title { font-weight: 600; font-size: 1.05rem; margin: 0.25rem 0 0.15rem; line-height: 1.35; }
  .talk-event { font-size: 0.95rem; }
  .talk-links { margin-top: 0.35rem; font-size: 0.85rem; display: flex; gap: 0.9rem; flex-wrap: wrap; }
  .talk details { margin-top: 0.45rem; }
  .talk summary { cursor: pointer; font-size: 0.85rem; color: var(--global-theme-color); }
  .talk details p { font-size: 0.92rem; margin: 0.5rem 0 0; }
</style>

{% assign talks = site.data.talks %}
{% assign current_year = nil %}
{% for t in talks %}
{% if t.year != current_year %}
{% assign current_year = t.year %}
<div class="talks-year">{{ t.year }}</div>
{% endif %}
<div class="talk">
<a class="talk-logo" href="{% if t.link %}{{ t.link }}{% else %}https://{{ t.domain }}{% endif %}" title="{{ t.venue }}">
<img src="{% if t.logo %}{{ '/assets/img/logos/' | append: t.logo | relative_url }}{% else %}https://www.google.com/s2/favicons?domain={{ t.domain }}&sz=128{% endif %}" alt="{{ t.venue }}" loading="lazy">
</a>
<div class="talk-body">
<div class="talk-meta">
<span>{{ t.date }} {{ t.year }}</span>
{% if t.upcoming %}<span class="talk-tag upcoming">Upcoming</span>{% endif %}
<span class="talk-tag">{{ t.type }}</span>
</div>
<div class="talk-title">{{ t.title }}</div>
<div class="talk-event">{{ t.event }} · {{ t.venue }}</div>
{% if t.link or t.slides or t.abstract_url %}
<div class="talk-links">
{% if t.link %}<a href="{{ t.link }}"><i class="fa-solid fa-arrow-up-right-from-square"></i> Event page</a>{% endif %}
{% if t.slides %}<a href="{{ t.slides }}"><i class="fa-solid fa-file-pdf"></i> Slides</a>{% endif %}
{% if t.abstract_url and t.abstract == nil %}<a href="{{ t.abstract_url }}"><i class="fa-solid fa-align-left"></i> Abstract</a>{% endif %}
</div>
{% endif %}
{% if t.abstract %}
<details>
<summary>Abstract</summary>
{{ t.abstract | markdownify }}
</details>
{% endif %}
</div>
</div>
{% endfor %}
