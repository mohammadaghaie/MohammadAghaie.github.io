---
layout: default
permalink: /blog/
title: blog
nav: true
nav_order: 5
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 8
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3 # The number of links after the current page
---

<style>
  .blog-hero { position: relative; overflow: hidden; border-radius: 14px; padding: 2.6rem 2rem 2.2rem; margin: 1.5rem 0 1.4rem; color: #eef3fb;
    background: linear-gradient(120deg, rgba(10, 18, 34, 0.86), rgba(20, 40, 80, 0.55)), url("{{ '/assets/img/welcome/background.jpg' | relative_url }}") center / cover; }
  .blog-hero h1 { font-size: 2.3rem; font-weight: 300; margin: 0 0 0.4rem; color: #fff; }
  .blog-hero p { font-size: 1.05rem; opacity: 0.85; margin: 0; max-width: 560px; }
  .blog-chips { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.6rem; }
  .blog-chip { font-size: 0.82rem; padding: 0.25rem 0.75rem; border-radius: 999px; border: 1px solid var(--global-divider-color);
    color: var(--global-text-color); text-decoration: none !important; transition: border-color 0.2s, color 0.2s; }
  .blog-chip:hover { border-color: var(--global-theme-color); color: var(--global-theme-color); }
  .blog-list { display: grid; gap: 1.2rem; }
  .blog-card { display: flex; gap: 1.3rem; padding: 1rem; border-radius: 14px; border: 1px solid var(--global-divider-color);
    background: var(--global-card-bg-color, transparent); transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease; }
  .blog-card:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18); border-color: var(--global-theme-color); }
  .blog-thumb { flex: 0 0 200px; height: 140px; border-radius: 10px; overflow: hidden; background: #0f1b2d; }
  .blog-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .blog-body { flex: 1; min-width: 0; display: flex; flex-direction: column; }
  .blog-meta { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.06em; color: var(--global-text-color-light); }
  .blog-title { font-size: 1.3rem; font-weight: 600; line-height: 1.3; margin: 0.3rem 0 0.4rem; }
  .blog-title a { color: var(--global-text-color); text-decoration: none; }
  .blog-title a:hover { color: var(--global-theme-color); }
  .blog-desc { font-size: 0.97rem; color: var(--global-text-color-light); margin-bottom: 0.6rem; }
  .blog-tags { margin-top: auto; display: flex; flex-wrap: wrap; gap: 0.4rem; }
  .blog-tags a { font-size: 0.75rem; padding: 0.1rem 0.55rem; border-radius: 999px; background: var(--global-divider-color);
    color: var(--global-text-color); text-decoration: none; }
  .blog-tags a:hover { color: var(--global-theme-color); }
  @media (max-width: 640px) { .blog-card { flex-direction: column; } .blog-thumb { flex-basis: auto; height: 170px; } }
</style>

<div class="post">
<div class="blog-hero">
<h1>{{ site.blog_name }}</h1>
<p>{{ site.blog_description }}</p>
</div>
{%- if site.display_tags.size > 0 or site.display_categories.size > 0 -%}
<div class="blog-chips">
{%- for tag in site.display_tags -%}<a class="blog-chip" href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}"><i class="fa-solid fa-hashtag fa-xs"></i> {{ tag }}</a>{%- endfor -%}
{%- for category in site.display_categories -%}<a class="blog-chip" href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}"><i class="fa-solid fa-tag fa-xs"></i> {{ category }}</a>{%- endfor -%}
</div>
{%- endif -%}
{%- if page.pagination.enabled -%}{%- assign postlist = paginator.posts -%}{%- else -%}{%- assign postlist = site.posts -%}{%- endif -%}
<div class="blog-list">
{%- for post in postlist -%}
{%- assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 -%}
{%- if post.redirect == blank -%}{%- assign post_url = post.url | relative_url -%}{%- elsif post.redirect contains '://' -%}{%- assign post_url = post.redirect -%}{%- else -%}{%- assign post_url = post.redirect | relative_url -%}{%- endif -%}
<article class="blog-card">
{%- if post.thumbnail -%}
<a class="blog-thumb" href="{{ post_url }}"><img src="{{ post.thumbnail | relative_url }}" alt="" loading="lazy"></a>
{%- endif -%}
<div class="blog-body">
<div class="blog-meta">{{ post.date | date: '%B %d, %Y' }} · {{ read_time }} min read</div>
<div class="blog-title"><a href="{{ post_url }}">{{ post.title }}</a></div>
<div class="blog-desc">{{ post.description }}</div>
<div class="blog-tags">
{%- for tag in post.tags -%}<a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">#{{ tag }}</a>{%- endfor -%}
{%- for category in post.categories -%}<a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}"><i class="fa-solid fa-tag fa-xs"></i> {{ category }}</a>{%- endfor -%}
</div>
</div>
</article>
{%- endfor -%}
</div>
{%- if page.pagination.enabled -%}
{%- include pagination.liquid -%}
{%- endif -%}
</div>
