# SAK Group of Institutions - Official Website

Welcome to the official repository for the **SAK Group of Institutions** website. This project is the public-facing Next.js application that showcases the college's courses, departments, facilities, and staff, and handles student enquiries and admission applications.

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language:** TypeScript
- **UI Library:** React 19
- **Styling:** Vanilla CSS (Modular)
- **Animation:** Framer Motion (page transitions)
- **Email Delivery:** Nodemailer (enquiry & application forms)
- **Deployment:** Vercel

## ✨ Key Features

- Modern, responsive, and highly aesthetic UI design.
- Course pages for GNM, B.Sc. Nursing, Post Basic B.Sc. Nursing, and M.Sc. Nursing.
- Department, facilities, and staff/faculty information pages.
- Multi-step online admission application form and quick enquiry form, both delivered by email (with honeypot spam protection).
- Notice ticker for latest announcements.
- Floating "Quick Connect" widget for Call / WhatsApp / Apply Now.
- Animated splash screen and smooth page-transition animations.
- SEO-optimized with OpenGraph and Twitter card metadata.

## 📦 Getting Started Locally

To run this project on your local machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### 1. Clone the repository
```bash
git clone https://github.com/NoviQ-Projects/SAK-Group-of-Institute.git
cd SAK-Group-of-Institute/frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env.local` file in the `frontend/` directory with your email delivery credentials:
```env
EMAIL_SERVICE="gmail"
EMAIL_USER="your_email@gmail.com"
EMAIL_PASS="your_app_password"
EMAIL_TO="admin@sakcollege.com"
```
If these are left unset, the enquiry and application forms will simulate a successful submission and log the data to the console — handy for local development without real email credentials.

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## ☁️ Deployment

This project is configured for seamless deployment on **Vercel**.
Ensure your Vercel project's environment variables mirror your `.env.local` configuration (`EMAIL_SERVICE`, `EMAIL_USER`, `EMAIL_PASS`, `EMAIL_TO`) so the enquiry and application forms can deliver email in production.

---
*Developed & Maintained by [NoviQ Technologies]*
