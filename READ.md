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

---

## 🗂️ Module to Frontend Script Mapping

<table style="border: 1px solid black; border-collapse: collapse; width: 100%;">
  <tr>
    <th style="border: 1px solid black; background-color: #f2f2f2; padding: 8px;">Module</th>
    <th style="border: 1px solid black; background-color: #f2f2f2; padding: 8px;">Frontend Script</th>
  </tr>
  <tr>
    <td style="border: 1px solid black; padding: 8px;">Authentication</td>
    <td style="border: 1px solid black; padding: 8px;">
      <a href="src/components/ui/AuthLayout.jsx">AuthLayout.jsx</a> • 
      <a href="src/components/ui/GoogleIcon.jsx">GoogleIcon.jsx</a> • 
      <a href="src/components/ui/ProtectedRoute.jsx">ProtectedRoute.jsx</a> • 
      <a href="src/components/ui/UserNotRegisteredError.jsx">UserNotRegisteredError.jsx</a>
    </td>
  </tr>
  <tr>
    <td style="border: 1px solid black; padding: 8px;">App Layout</td>
    <td style="border: 1px solid black; padding: 8px;">
      <a href="src/components/layout/AppLayout.jsx">AppLayout.jsx</a> • 
      <a href="src/components/layout/BottomNav.jsx">BottomNav.jsx</a>
    </td>
  </tr>
  <tr>
    <td style="border: 1px solid black; padding: 8px;">Shared Components</td>
    <td style="border: 1px solid black; padding: 8px;">
      <a href="src/components/layout/shared/FigureLabel.jsx">FigureLabel.jsx</a> • 
      <a href="src/components/layout/shared/ProductCard.jsx">ProductCard.jsx</a> • 
      <a href="src/components/layout/shared/StatCard.jsx">StatCard.jsx</a>
    </td>
  </tr>
  <tr>
    <td style="border: 1px solid black; padding: 8px;">API Client</td>
    <td style="border: 1px solid black; padding: 8px;">
      <a href="src/api/base44Client.js">base44Client.js</a>
    </td>
  </tr>
  <tr>
    <td style="border: 1px solid black; padding: 8px;">App Core</td>
    <td style="border: 1px solid black; padding: 8px;">
      <a href="src/App.jsx">App.jsx</a> • 
      <a href="src/main.jsx">main.jsx</a>
    </td>
  </tr>
  <tr>
    <td style="border: 1px solid black; padding: 8px;">Utilities & Hooks</td>
    <td style="border: 1px solid black; padding: 8px;">
      <a href="src/hooks/use-mobile.jsx">use-mobile.jsx</a> • 
      <a href="src/lib/utils.js">utils.js</a> • 
      <a href="src/lib/app-params.js">app-params.js</a>
    </td>
  </tr>
</table>

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
