# Web Programming · Gachon University · 2026

The root page links to one section page for each course week. Each week page uses the shared `style.css` and links back to the matching topics and exercises in the root course catalog.

## Pages

- [Course home](index.html)
- [Week 2: HTML foundations](week2/)
- [Week 3: CSS fundamentals](week3/)
- [Week 5: DOM and JavaScript](week5/)

```text
web_programming_gachon2026/
├── index.html       # Main course catalog
├── style.css        # Shared styles for the root and week pages
├── images/          # Shared image assets
├── week2/index.html # Week 2 section page
├── week3/index.html # Week 3 section page
└── week5/index.html # Week 5 section page
```

Session folders contain the individual topic and exercise files. They do not need their own `index.html`; the root catalog links directly to those resources.
