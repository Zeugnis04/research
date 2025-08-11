# My version of jekyll-theme-tufte

## *A modern Jekyll theme based on [tufte-css](https://github.com/edwardtufte/tufte-css)*

Originally *jekyll-theme-tufte* is a [Jekyll](https://jekyllrb.com) static website theme inspired by the text design of Edward
Tufte. It is enabled by [*tufte-css*](https://github.com/edwardtufte/tufte-css),
a CSS file providing the Tufte styles. I have made some customizations and added some features to use in my blog.

This is a gem-packaged theme that can be easily installed by including
*jekyll-theme-tufte* in your `Gemfile`.

Large portions of the theme are derived from prior work to bring *tufte-css* to Jekyll, including:

* [*tufte-css-jekyll*](https://github.com/sdruskat/tufte-css-jekyll), a classic-style Jekyll theme
* [*tufte-jekyll*](https://github.com/clayh53/tufte-jekyll), a classic-style theme with a lot of extra visual stuff added
* [*tufte-pandoc-jekyll*](https://github.com/jez/tufte-pandoc-jekyll), a gem-style theme that uses pandoc under the hood
* [*ET-Jekyll*](https://github.com/bradleytaunt/ET-Jekyll), a classic-style theme that makes a number of CSS changes

This theme is minimalist and tries to stick closely to the original tufte-css styles. As a gem-based theme, it is also easier to install and manage compared to classic style themes. (Classic Jekyll themes are installed by mixing all the files in with your site’s files, which creates a big mess.)

This theme is responsive and adapts to desktop and mobile screens. (Margin notes
are displayed inline on narrow screens.) It also supports dark mode detection
via `prefers-color-scheme`, looking good on dark and light backgrounds alike.
