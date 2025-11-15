---
layout: page-hero
title: Yeongbin Kwon
nav_title: Home
head_title: Yeongbin Kwon
subtitle: Undergraduate in Civil and Environmental Engineering
weight: 1
full_width: true
---
<!-- Load icon sets if not already loaded -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/academicons@1.9.4/css/academicons.min.css" rel="stylesheet">

<!-- Hero Image Section -->
<div class="hero-image">
  <img src="assets/img/YBKwon.jpg" alt="Yeongbin Kwon" class="hero-photo">
</div>

<!-- Main content -->
<div class="homepage-content">
  <h1>About Me</h1>
  <p>I am Yeongbin Kwon (Hangul: <span lang="ko">권영빈</span>, <span lang="ja">漢字：權榮彬</span>, IPA: <span lang="ipa">[kʷʌn.jʌŋ.bin]</span>), an undergraduate in Civil and Environmental Engineering at Seoul National University, focusing on environmental fluid mechanics, coastal processes, and the application of machine learning to climate and energy systems.</p>

  <p>My recent work includes developing low-cost stereo imaging methods to reconstruct nearshore wave fields and analyzing wave breaking and conducting research on foundational climate forecasting models using ERA5 reanalysis data. I am passionate about combining physics-based understanding with data-driven techniques to address challenges in climate prediction, renewable energy forecasting, and coastal engineering.</p>

  <!-- Contact Buttons -->
  <div class="contact-buttons">
  <a href="cv.html" class="contact-btn cv-btn">
      <i class="fa-solid fa-file-text"></i>
      CV
    </a>
    <a href="mailto:ybkwon04@snu.ac.kr" class="contact-btn email-btn">
      <i class="fa-solid fa-envelope"></i>
      Email
    </a>
    <a href="https://github.com/Zeugnis04/" class="contact-btn github-btn">
      <i class="fa-brands fa-github"></i>
      GitHub
    </a>
    <a href="https://www.linkedin.com/in/yeongbin-kwon/" class="contact-btn linkedin-btn">
      <i class="fa-brands fa-linkedin"></i>
      LinkedIn
    </a>
    
  </div>

  {% if site.data.works %}
  <section class="works-section">
    <div class="works-header">
      <h2>Featured Work</h2>
      <p>Recent projects and articles I'm actively developing.</p>
    </div>
    <div class="works-grid">
      {% for work in site.data.works %}
      <a class="work-card" href="{{ work.url | relative_url }}">
        <div class="work-card-image">
          <img src="{{ work.image | relative_url }}" alt="{{ work.title }} thumbnail">
        </div>
        <div class="work-card-body">
          <h3>{{ work.title }}</h3>
          {% if work.description %}<p class="work-card-description">{{ work.description }}</p>{% endif %}
          <div class="work-card-meta">
            {% if work.date %}<span class="work-card-date">{{ work.date }}</span>{% endif %}
            {% if work.tags %}<span class="work-card-tags">{{ work.tags | join: ' • ' }}</span>{% endif %}
          </div>
        </div>
      </a>
      {% endfor %}
    </div>
  </section>
  {% endif %}
</div>
