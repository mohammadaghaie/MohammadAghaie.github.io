---
layout: page
title: سخنرانی‌ها
description: سمینارها، سخنرانی‌های کنفرانس و کارگاه‌ها. عنوان‌ها و نام رویدادها به زبان اصلی آمده‌اند.
permalink: /fa/lectures/
lang: fa
nav: false
---

<link rel="stylesheet" href="{{ '/assets/css/fa.css' | relative_url }}">
<style>
  .talks-year { font-size: 1.6rem; font-weight: 300; color: var(--global-text-color-light); text-align: left;
    border-top: 1px solid var(--global-divider-color); margin: 1.8rem 0 0.4rem; padding-top: 0.4rem; }
  .talk { display: flex; gap: 1rem; padding: 0.9rem 0; border-bottom: 1px solid var(--global-divider-color); }
  .talk:last-child { border-bottom: 0; }
  .talk-logo { flex: 0 0 56px; height: 56px; border-radius: 12px; background: #fff; display: flex;
    align-items: center; justify-content: center; box-shadow: 0 1px 4px rgba(0,0,0,0.15); overflow: hidden; }
  .talk-logo img { width: 36px; height: 36px; object-fit: contain; }
  .talk-logo img[src*='/logos/'] { width: 52px; height: 52px; }
  .talk-body { flex: 1; min-width: 0; }
  .talk-meta { font-size: 0.85rem; color: var(--global-text-color-light); display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; }
  .talk-tag { font-size: 0.75rem; font-weight: 600; padding: 0.05rem 0.5rem; border-radius: 4px;
    border: 1px solid var(--global-theme-color); color: var(--global-theme-color); }
  .talk-tag.upcoming { background: var(--global-theme-color); color: #fff; }
  .talk-title { font-weight: 600; font-size: 1.05rem; margin: 0.25rem 0 0.15rem; line-height: 1.4; }
  .talk-event { font-size: 0.95rem; }
  .talk-title, .talk-event, .talk details .abs { direction: ltr; text-align: right; unicode-bidi: isolate; }
  .talk-links { margin-top: 0.35rem; font-size: 0.85rem; display: flex; gap: 0.9rem; flex-wrap: wrap; }
  .talk-links i { margin-inline-end: 0.25rem; }
  .talk details { margin-top: 0.45rem; }
  .talk summary { cursor: pointer; font-size: 0.85rem; color: var(--global-theme-color); }
  .talk details .abs p { font-size: 0.92rem; margin: 0.5rem 0 0; text-align: left; }
</style>

<nav class="fa-switch">
  <a href="{{ '/fa/' | relative_url }}">صفحهٔ اصلی</a>
  <a href="{{ '/fa/papers/' | relative_url }}">مقاله‌ها</a>
  <a class="here" href="{{ '/fa/lectures/' | relative_url }}">سخنرانی‌ها</a>
  <a href="{{ '/fa/get-in-touch/' | relative_url }}">تماس</a>
  <a class="fa-switch-en" href="{{ '/talks/' | relative_url }}" lang="en"><span dir="ltr">English version</span></a>
</nav>

{% assign talks = site.data.talks %}
{% assign current_year = nil %}
{% for t in talks %}
{% if t.year != current_year %}
{% assign current_year = t.year %}
<div class="talks-year">{{ t.year }}</div>
{% endif %}
{% case t.type %}
{% when 'Seminar' %}{% assign kind = 'سمینار' %}
{% when 'Invited talk' %}{% assign kind = 'سخنرانی دعوتی' %}
{% when 'Lightning talk' %}{% assign kind = 'سخنرانی کوتاه' %}
{% when 'Short talk' %}{% assign kind = 'سخنرانی کوتاه' %}
{% when 'Talk & poster' %}{% assign kind = 'سخنرانی و پوستر' %}
{% when 'Webinar' %}{% assign kind = 'وبینار' %}
{% else %}{% assign kind = 'سخنرانی' %}
{% endcase %}
<div class="talk">
<a class="talk-logo" href="{% if t.link %}{{ t.link }}{% else %}https://{{ t.domain }}{% endif %}" title="{{ t.venue }}">
<img src="{% if t.logo %}{{ '/assets/img/logos/' | append: t.logo | relative_url }}{% else %}https://www.google.com/s2/favicons?domain={{ t.domain }}&sz=128{% endif %}" alt="{{ t.venue }}" loading="lazy">
</a>
<div class="talk-body">
<div class="talk-meta">
<span dir="ltr">{{ t.date }} {{ t.year }}</span>
{% if t.upcoming %}<span class="talk-tag upcoming">پیش رو</span>{% endif %}
<span class="talk-tag">{{ kind }}</span>
</div>
<div class="talk-title" lang="en">{{ t.title }}</div>
<div class="talk-event" lang="en">{{ t.event }} · {{ t.venue }}</div>
{% if t.link or t.slides or t.abstract_url %}
<div class="talk-links">
{% if t.link %}<a href="{{ t.link }}"><i class="fa-solid fa-arrow-up-right-from-square"></i>صفحهٔ رویداد</a>{% endif %}
{% if t.slides %}<a href="{{ t.slides }}"><i class="fa-solid fa-file-pdf"></i>اسلایدها</a>{% endif %}
{% if t.abstract_url and t.abstract == nil %}<a href="{{ t.abstract_url }}"><i class="fa-solid fa-align-left"></i>چکیده</a>{% endif %}
</div>
{% endif %}
{% if t.abstract %}
<details>
<summary>چکیده (به انگلیسی)</summary>
<div class="abs" lang="en">{{ t.abstract | markdownify }}</div>
</details>
{% endif %}
</div>
</div>
{% endfor %}
