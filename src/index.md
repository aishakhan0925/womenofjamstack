---
layout: base.html
title: Women of Jamstack
metaDescription:
  Women of Jamstack celebrates the women who are working with the Jamstack and adjacent technologies — and inspires the
  next generation of developers in an industry that still suffers from devastating gender inequality.
templateEngineOverride: njk
---

<ul>
 {% for key, profile in profiles %}
    <li>
      <div>
        <h2>{{ profile.name }}</h2>
        <p>{{ profile.bio }}</p>
        {% if profile.twitterUsername.length > 0 %}
          <a href="https://twitter.com/{{ profile.twitterUsername }}" target="_blank">TWITTER</a>
        {% endif %}
        {% if profile.githubUsername.length > 0 %}
          <a href="https://github.com/{{ profile.githubUsername }}" target="_blank">GITHUB</a>
        {% endif %}
        {% if profile.website.length > 0 %}
          <a href="{{ profile.website }}" target="_blank">WEBSITE</a>
        {% endif %}
      </div>
    </li>
{% endfor %}
<ul>
