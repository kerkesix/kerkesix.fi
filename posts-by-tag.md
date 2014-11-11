---
layout: article
permalink: /posts-by-tag/
title: "Kaikki kirjoitukset aihepiireittäin"
toc: true
---

{% for tag in site.tags %}
<article>
	<h2 id="{{ tag[0] }}">{{ tag[0] }}</h2>
		<ul>
		{% assign pages_list = tag[1] %}  
		{% for post in pages_list %}
      {% include post-list.html %}
		{% endfor %}
		{% assign pages_list = nil %}
		</ul>
</article><!-- /.hentry -->
{% endfor %}
