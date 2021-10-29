---
title: 11ty with GraphCMS
layout: base.njk
---

Hello world

## Posts

<ul>
  {%- for post in collections.posts -%}
    <li>
      <a href="{{ post.url }}">
        <h2>{{ post.data.title }}</h2>
        <p>{{ post.data.excerpt }}</p>
      </a>
    </li>
  {%- endfor -%}
</ul>
