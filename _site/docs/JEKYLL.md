# Jekyll Configuration

## Default

- Create _layouts folder
    - Add default.html file
- Create _includes folder
    - add reusable components
    - header.html
    - footer.html

## Create Gemfile

```
source "https://rubygems.org"
gem "github-pages", group: :jekyll_plugins
```

## Live Reload

- bundle install
- bundle exec jekyll serve --livereload
- bundle exec jekyll serve --port 4001
