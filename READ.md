# 🛍️ Unideal App

A student marketplace application for buying and selling preloved items within UTM members.

## 📋 About

This project is developed as part of the Application Development course. It allows UTM students to:
- Buy and sell used items within the university community
- Manage user profiles and listings
- Secure authentication and authorization

**Welcome to your Base44 project**

View and Edit your app on [Base44.com](http://Base44.com)

This project contains everything you need to run your app locally.

**Edit the code in your local development environment**

Any change pushed to the repo will also be reflected in the Base44 Builder.

---

## 🏗️ Project Structure
src/
├── api/ # API client and services
├── components/ # Reusable UI components
│ ├── layout/ # Layout components
│ └── ui/ # UI components
├── hooks/ # Custom React hooks
├── lib/ # Utility functions
├── pages/ # Page components
└── utils/ # Helper functions


## 🗂️ Module to Frontend and Backend Script Mapping

| Module | Frontend Script | Backend Script |
|---|---|---|
| Authentication | [Login.jsx](./src/pages/Login.jsx)<br>[Register.jsx](./src/pages/Register.jsx)<br>[ForgotPassword.jsx](./src/pages/ForgotPassword.jsx)<br>[ResetPassword.jsx](./src/pages/ResetPassword.jsx) | [authController.js](./backend/controllers/authController.js)<br>[authService.js](./backend/services/authService.js)<br>[authRoutes.js](./backend/routes/authRoutes.js)<br>[db.js](./backend/db.js)<br>[server.js](./backend/server.js) |
| Profile & Verification | [Profile.jsx](./src/pages/Profile.jsx)<br>[EditProfile.jsx](./src/pages/EditProfile.jsx)<br>[Verification.jsx](./src/pages/Verification.jsx)<br>[AdminVerification.jsx](./src/pages/AdminVerification.jsx) | [authController.js](./backend/controllers/authController.js)<br>[authService.js](./backend/services/authService.js)<br>[authRoutes.js](./backend/routes/authRoutes.js) |
| Access Control & Authorization | [AdminPanel.jsx](./src/pages/AdminPanel.jsx)<br>[AdminUser.jsx](./src/pages/AdminUser.jsx)<br>[BlockReport.jsx](./src/pages/BlockReport.jsx)<br>[ReportDetails.jsx](./src/pages/ReportDetails.jsx) | — |

---

## 🚀 Getting Started

### Prerequisites

1. Clone the repository using the project's Git URL 
2. Navigate to the project directory
3. Install dependencies: `npm install`
4. Create an `.env.local` file and set the right environment variables
VITE_BASE44_APP_ID=your_app_id
VITE_BASE44_APP_BASE_URL=your_backend_url

e.g.
VITE_BASE44_APP_ID=cbef744a8545c389ef439ea6
VITE_BASE44_APP_BASE_URL=https://my-to-do-list-81bfaad7.base44.app

Run the app: `npm run dev`

### Publishing Changes

1. Push your changes to GitHub
2. Open [Base44.com](http://Base44.com)
3. Click on **Publish**

---

## 👥 Contributors

- [@ojjjall](https://github.com/ojjjall) - Project Lead

## 📚 Documentation & Support

- [Base44 Documentation](https://docs.base44.com/Integrations/Using-GitHub)
- [Support](https://app.base44.com/support)

## 📝 License

This project is for educational purposes.
