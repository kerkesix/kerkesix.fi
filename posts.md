---
layout: article
permalink: /posts/
title: "Kaikki kirjoitukset"
toc: true
---

{% for post in site.posts %}
    {% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
    {% capture next_year %}{{ post.previous.date | date: "%Y" }}{% endcapture %}

    {% if forloop.first %}

<article>
  <h2 id="{{ this_year }}-ref">{{ this_year }}</h2>
  <ul>

    {% endif %}

        {% include post-list.html %}

    {% if forloop.last %}

  </ul>
</article>

    {% else %}
        {% if this_year != next_year %}

  </ul>
</article>
<article>
  <h2 id="{{ next_year }}-ref">{{next_year}}</h2>
  <ul>

        {% endif %}
    {% endif %}
{% endfor %}
