# Web Programming · Gachon University · 2026

The root page links to one section page for each course week. Each week page uses the shared `style.css` and links back to the matching topics and exercises in the root course catalog.

## Pages

- [Course home](index.html)
- [Week 2: HTML foundations](week2/)
- [Week 3: CSS fundamentals](week3/)
- [Week 5: DOM and JavaScript](week5/)
- [Week 7: Fetch API](week7/)
- [Week 8: HTML forms and JavaScript form validation](week8/)
- [Week 9: Accessibility](week9/)
- [Week 10: Git and GitHub Pages](week10/)
- [Week 11: React components](week11/)

```text
web_programming_gachon2026/
├── index.html       # Main course catalog
├── style.css        # Shared styles for the root and week pages
├── images/          # Shared image assets
├── week2/index.html # Week 2 section page
├── week3/index.html # Week 3 section page
├── week5/index.html # Week 5 section page
├── week7/index.html # Week 7 section page
├── week8/index.html # Week 8 section page
├── week9/index.html # Week 9 section page
├── week10/index.html # Week 10 section page
└── week11/index.html # Week 11 section page
```

Session folders contain the individual topic and exercise files. Week 5 uses `week5/week5_1/` for DOM materials and `week5/week5_2/` for JavaScript practice exercises. Week 8 uses `week8/week8_1/` for HTML forms and `week8/week8_2/` for JavaScript form validation. Week 9 uses `week9/week9_1/` for accessibility and `week9/week9_2/` for performance optimisation.
Week 11 contains React source examples under `week11/week11_1/` and `week11/week11_2/`; the course home and Week 11 page link to each `src/App.jsx` entry point.
