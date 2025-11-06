---

# 📦 Travellian Assets Repository

This branch serves as the central storage for all static assets used in the Travellian project — including images, icons, JSON data, and other external files referenced across the website.
It ensures that assets are hosted separately from the deployed source code (gh-pages branch), making them easier to manage, update, and link to directly via public URLs.

---

# 🧭 About Travellian

Travellian is a modern and elegant travel website built with React + TypeScript + Tailwind CSS, featuring smooth animations, clean UI components, and dynamic sliders for an immersive browsing experience.

---

Main Codebase:
Stored in the gh-pages branch.

# 🗂️ Assets Branch Purpose

This branch (assets) contains static resources that are used across the project and accessed via direct GitHub raw links.

Typical use cases:

1.Storing reusable images, icons, and illustrations
2.Hosting JSON data files for dynamic fetching
3.Keeping static media outside the deployment branch

---

# 📁 Directory Structure

```
assets/
├── assets/        # All website and UI images (banners, backgrounds, destinations, etc.)
│   ├── avatar/
│   ├── col-blocks/
│   ├── gallary/
│   ├── hero/
│   ├── planner/
│   └── special/
│
├── data/          # JSON files (destinations, reviews, etc.)
│   ├── hero.json
│   ├── experiences.json
│   ├── gallery.json
│   ├── special.json
│   ├── destinations.json
│   └── planners.json
│
└── README.md      # Description of the assets branch (this file)
```

---
