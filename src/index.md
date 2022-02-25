---
layout: base.html
title: Women of Jamstack
metaDescription:
  Women of Jamstack celebrates the women who are working with the Jamstack and adjacent technologies — and inspires the
  next generation of developers in an industry that still suffers from devastating gender inequality.
templateEngineOverride: njk
---

<div class="profiles__item profiles__item--founder">
  <span class="profiles__itemImgWrapper">
    <img src="/images/founder.jpg" alt="{{ founder.name }}" />
  </span>
  <span class="profiles__itemTextWrapper">
    <h2 class="profiles__itemName">{{ founder.name }}</h2>
    <p class="profiles__itemBio">{{ founder.bio }}</p>
    <p class="profiles__itemJob">{{ founder.jobTitle }} @ {{ founder.company }}</p>
    <span class="profiles__itemSocials">
      <a href="https://twitter.com/{{ founder.twitterUsername }}"
        target="_blank"
        title="{{ founder.name }} on Twitter">
        {% include "svg/twitter.svg" %}
      </a>
      <a href="https://github.com/{{ founder.githubUsername }}"
      target="_blank"
      title="{{ founder.name }} on Github">
          {% include "svg/github.svg" %}
      </a>
      <a href="https://twitch.tv/{{ founder.twitchUsername }}"
        target="_blank"
        title="{{ founder.name }} on Twitch">
          {% include "svg/twitch.svg" %}
      </a>
      <a href="{{ founder.website }}"
        target="_blank" title="{{ founder.name }}'s Website">
          {% include "svg/globe.svg" %}
      </a>
    </span>
  </span>
</div>

<ul class="profiles">
 {% for key, profile in profiles %}
    <li class="profiles__item">
      <span class="profiles__itemImgWrapper">
        <img src="/images/{{ key }}.jpg" alt="{{ profile.name }}" />
      </span>
      <span class="profiles__itemTextWrapper">
        <h2 class="profiles__itemName">{{ profile.name }}</h2>
        <p class="profiles__itemBio">{{ profile.bio }}</p>
        <p class="profiles__itemJob">{{ profile.jobTitle }} @ {{ profile.company }}</p>
        <span class="profiles__itemSocials">
          {% if profile.twitterUsername.length > 0 %}
            <a href="https://twitter.com/{{ profile.twitterUsername }}" 
              target="_blank" 
              title="{{ profile.name }} on Twitter">
              {% include "svg/twitter.svg" %}
            </a>
          {% endif %}
          {% if profile.githubUsername.length > 0 %}
            <a href="https://github.com/{{ profile.githubUsername }}" 
            target="_blank"
            title="{{ profile.name }} on Github">
               {% include "svg/github.svg" %}
            </a>
          {% endif %}
          {% if profile.twitchUsername.length > 0 %}
            <a href="https://twitch.tv/{{ profile.twitchUsername }}" 
              target="_blank" 
              title="{{ profile.name }} on Twitch">
                {% include "svg/twitch.svg" %}
            </a>
          {% endif %}
          {% if profile.website.length > 0 %}
            <a href="{{ profile.website }}" 
              target="_blank" title="{{ profile.name }}'s Website">
               {% include "svg/globe.svg" %}
            </a>
          {% endif %}
        </span>
      </span>
    </li>
  {% endfor %}
</ul>
