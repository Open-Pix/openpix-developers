---
to: docs/<%= (path || '').replace(/^\//, '').replace(/\/$/, '') %>/<%= h.inflection.dasherize(title.toLowerCase()) %>.md
---
---
id: <%= h.inflection.dasherize(title.toLowerCase()) %>
title: <%= title %>
tags:
- tag
---

# <%= title %>
