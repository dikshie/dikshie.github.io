# dikshie.github.io

[![GitHub Pages](https://img.shields.io/badge/Live%20Site-dikshie.github.io-dc2626?style=flat&logo=github)](https://dikshie.github.io/)
[![LaTeX Source](https://img.shields.io/badge/LaTeX%20Source-dikshie%2FAwesome--CV-blue?style=flat&logo=latex)](https://github.com/dikshie/Awesome-CV)
[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)

Personal portfolio and curriculum vitae website of **Mohamad Dikshie Fauzie, Ph.D.** — Data Center & IT Infrastructure Engineer.

Live website: **[https://dikshie.github.io/](https://dikshie.github.io/)**

---

## 📌 Overview

This repository hosts the static personal website for `dikshie.github.io`, crafted to present a clean, high-performance web version of the LaTeX curriculum vitae and résumé maintained in [**dikshie/Awesome-CV**](https://github.com/dikshie/Awesome-CV).

### Features:
- 🎨 **Minimalist & Modern Design**: Clean profile showcase focusing strictly on current position, highest education, and verified links.
- 🌓 **Dark & Light Mode**: Seamless theme toggle with local storage persistence and system preference detection.
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile viewing.
- 📄 **Direct PDF Downloads & Previews**: Instant access to download or preview the complete Curriculum Vitae and Résumé.
- 🔗 **Direct Profile Links**: Quick links to GitHub, LinkedIn, Keio WIDE lab, and the LaTeX repository.

---

## 📂 Repository Structure

```
dikshie.github.io/
├── index.html              # Main single-page portfolio & CV application
├── favicon.svg             # SVG vector favicon matching technical theme
├── css/
│   └── style.css           # Modern CSS variables, dark/light themes, print stylesheet
├── js/
│   └── main.js             # Theme switcher, mobile menu, search/filters, modal, clipboard
└── assets/
    ├── docs/               # Compiled PDF documents
    │   ├── cv.pdf          # Full academic & professional CV
    │   ├── resume.pdf      # Industry-tailored résumé
    │   └── coverletter.pdf # Professional cover letter
    └── images/             # Visual assets and previews
        ├── profile.png     # Profile avatar
        ├── icon.png        # Awesome-CV icon logo
        ├── resume-0.png    # Page 1 preview
        ├── resume-1.png    # Page 2 preview
        ├── coverletter-0.png
        └── coverletter-1.png
```

---

## 🚀 Local Development & Preview

To preview the website locally on your machine:

```bash
# Using Python 3 built-in HTTP server
python3 -m http.server 8000
```

Open `http://localhost:8000` in your web browser.

---

## 🔄 Updating CV & Résumé Documents

The source LaTeX files and automated build workflows are maintained in [**dikshie/Awesome-CV**](https://github.com/dikshie/Awesome-CV).

When compiling new versions of the PDF documents:
1. Copy the generated `cv.pdf`, `resume.pdf`, or `coverletter.pdf` into `assets/docs/`.
2. Commit and push the changes to `main`:
   ```bash
   git add assets/docs/
   git commit -m "Update compiled CV and resume PDFs"
   git push origin main
   ```
3. GitHub Pages will deploy the updated documents automatically.

---

## 📜 License

Content and design &copy; 2024–2026 Mohamad Dikshie Fauzie.  
Licensed under [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/).