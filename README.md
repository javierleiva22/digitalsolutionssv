```markdown
# Digital Solutions LLC — Interpreters4U (modernized)

This commit contains a modernized, single-page corporate homepage in English plus a short marketing subpage. Place your existing images under `assets/img/` and adjust paths if necessary.

Default placeholders used:
- Contact email: info@digitalsolutions.example
- Phone: +1 (555) 123-4567
- CNAME: I kept the repository's CNAME file unchanged (if present).

How to apply these changes locally
1. Clone the repo and ensure you are up to date:
   git clone https://github.com/javierleiva22/digitalsolutionssv.git
   cd digitalsolutionssv

2. Create the branch and switch to it:
   git checkout -b modernize/site

3. Add files and directories:
   - Create directories: css/, js/, assets/img/
   - Copy the files provided (index.html, css/styles.css, js/main.js, marketing.html, README.md)
   - Copy your images from the original public_html into assets/img/ and rename to:
     - logo.png (your existing logo)
     - hero.jpg
     - about.jpg
     - service-opi.jpg
     - service-vri.jpg
     - service-solutions.jpg
     - service-marketing.jpg
     (or update the HTML image src to match your filenames)

4. Commit and push:
   git add .
   git commit -m "Modernize site: new homepage, consolidated CSS/JS, add marketing page"
   git push -u origin modernize/site

5. Open a Pull Request on GitHub from modernize/site -> main for review.

Notes and next steps
- I recommend reviewing text and images after you push. I used general copy from your repo and professional placeholders; update copy to match your corporate/legal requirements.
- If you want, I can prepare the actual commit and open the PR for you (I will need permission to push a branch to the repo). Otherwise, follow the steps above and tell me when the branch/PR is available so I can review and suggest refinements.
```
