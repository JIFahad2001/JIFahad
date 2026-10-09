# JI Fahad Portfolio

## Project Overview
This project is a complete, modern, professional, responsive, and production-ready personal portfolio website for JI Fahad. It replaces the previous Google Sites portfolio with a faster, more accessible, and easier to maintain Next.js application.

The website serves as a professional introduction, making it easy to view curriculum vitae, academic and research works, presentations, and resources.

## Technology Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4)
- **Icons:** Lucide React
- **Hosting/Deployment:** Vercel

## Prerequisites
- Node.js (version 18 or higher)
- npm (Node Package Manager)
- Git (for version control and deployment)

## Installation & Local Development

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the local development server:**
   ```bash
   npm run dev
   ```
   *Note: If you receive a PowerShell Execution Policy error on Windows, use `cmd /c npm run dev` instead.*

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Production Build
To create a production-ready build and verify it locally:
```bash
npm run build
npm run start
```

## Project Structure
The website uses a straightforward architecture keeping content separate from layout:
- `app/`: Next.js pages and routes (Home, About, CV, Works, Resources, Experience, Contact).
- `components/`: Reusable React components (`layout/`, `ui/`, etc.).
- `content/`: Structured TypeScript files containing portfolio data (`profile.ts`, `works.ts`, etc.).
- `public/`: Static assets such as images and the `documents/` folder for the CV file.

## Updating Content

The site is designed to be easily updated without modifying page layouts or React components. All content lives in the `content/` folder.

### Adding a Work
1. Open `content/works.ts`.
2. Add a new object to the `worksData` array:
   ```typescript
   {
     id: "work-new-id",
     title: "Your Publication Title",
     category: "Article", // Or "Research Work", "Review Paper", "Seminar Paper"
     date: "2024",
     description: "A brief abstract or description of the work.",
     url: "https://doi.org/..." // Optional link to the paper
   }
   ```
3. Save the file. The Works page will update automatically.

### Adding a Resource
1. Add the actual resource file to the appropriate folder in `public/` (e.g., `public/resources/my-presentation.pdf`).
2. Open `content/resources.ts`.
3. Add a new entry to `resourcesData`:
   ```typescript
   {
     id: "res-new-id",
     title: "My Presentation",
     category: "Presentations",
     description: "A presentation on environmental science.",
     url: "/resources/my-presentation.pdf"
   }
   ```

### Updating Experience and Contact Information
- **Experience:** Edit the `experienceData` array in `content/experience.ts`.
- **Contact Info:** Edit the `contactData` and `socialLinks` variables in `content/contacts.ts`.

### Replacing the CV File
1. Place your new CV file (PDF preferred, or HTML) in `public/documents/`.
2. Ensure it is named exactly `Fahad_CV.html` (or `.pdf` if you update the link).
3. If changing to a `.pdf` extension, update the `href` and `download` attributes in `app/cv/page.tsx` to point to the new filename.

## Deployment

### GitHub Setup (Windows PowerShell)
If you haven't yet pushed this to GitHub:
```powershell
# Initialize git
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio commit"

# Link to your GitHub repository (replace URL with your actual empty repo URL)
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to GitHub
git push -u origin main
```

### Vercel Deployment
1. Log in to [Vercel](https://vercel.com/) with your GitHub account.
2. Click **Add New** > **Project**.
3. Import your newly created GitHub repository.
4. Leave the build settings as default (Framework Preset: Next.js).
5. Click **Deploy**.
6. Once deployed, any future `git push` to the `main` branch on GitHub will automatically trigger a new deployment on Vercel.

## Unresolved Content-Migration Items
- The source CV was provided as an exported HTML file (`cv_generator_application (1).html`) rather than a standalone PDF. It has been placed in `public/documents/Fahad_CV.html`. A native PDF might be preferable for future updates.
- Links to individual resource files (e.g., presentations) from the previous Google Sites were not directly extractable as discrete files; placeholders have been added in `resources.ts` referencing `/resources/...`. When actual PDF/PPT files are available, they should be dropped into `public/resources/` and linked accordingly.
