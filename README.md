# 🛍️ UniDeal App

A student marketplace application for buying and selling preloved items within UTM members.

## 📋 About

This project is developed as part of the Application Development course. It allows UTM students to:
- Buy and sell used items within the university community
- Manage user profiles and listings
- Secure authentication and authorization

  ## Team Members

| No. | Name | Matric No. | Responsibility |
|---|---|---|---|
| 1 | Garrah Thabit Mohammed | A24CS4013 | User Management Subsystem |
| 2 | Lauza Amru Kasyafa | A24CS4018 | Product & Market Subsystem |
| 3 | Saleh Nabil Ahmed | A24CS0028 | Analytics & Insights Subsystem |
| 4 | Zeng Yuxi | A24CS4041 | Communication & Support Subsystem |
| 5 | Zahra Aulia Putri | A24CS9006 | Service & Asset Sharing Subsystem |


## Project Overview

UniDeal provides a secure marketplace exclusively for UTM students. The platform supports product trading, service sharing, asset borrowing, communication, analytics, and administrative monitoring.


**Welcome to your Base44 project**

View and Edit your app on [Base44.com](http://Base44.com)

This project contains everything you need to run your app locally.

**Edit the code in your local development environment**

Any change pushed to the repo will also be reflected in the Base44 Builder.

---
## System Architecture

### User Management Subsystem
- User Registration & Login
- Profile & Verification
- Access Control & Authorization

### Product & Market Subsystem
- Product Listing & Management
- Search & Recommendation
- Purchasing & Payment

### Analytics & Insights Subsystem
- User Activity Dashboard
- Sales & Performance

### Communication & Support Subsystem
- Chat & Messaging
- Meet-up Coordination & Notifications
- Help Centre & Feedback

### Service & Asset Sharing Subsystem
- Request & Provide Academic Service
- List & Borrow Asset
- Manage Booking & Deposit

---
## User Management Subsystem

**Developer:** Garrah Thabit

| Module Number | Module Name | FrontEnd | BackEnd |
|---|---|---|---|
| 1 | User Registration & Login Module | • [Login.jsx](./src/pages/Login.jsx)<br>• [Register.jsx](./src/pages/Register.jsx)<br>• [ForgotPassword.jsx](./src/pages/ForgotPassword.jsx)<br>• [ResetPassword.jsx](./src/pages/ResetPassword.jsx) | • AuthController.js<br>• AuthService.js<br>• AuthRoutes.js |
| 2 | Profile & Verification Module | • [Profile.jsx](./src/pages/Profile.jsx)<br>• [EditProfile.jsx](./src/pages/EditProfile.jsx)<br>• [Verification.jsx](./src/pages/Verification.jsx)<br>• [AdminVerification.jsx](./src/pages/AdminVerification.jsx) | — |
| 3 | Access Control & Authorization Module | • [AdminPanel.jsx](./src/pages/AdminPanel.jsx)<br>• [AdminUser.jsx](./src/pages/AdminUser.jsx)<br>• [BlockReport.jsx](./src/pages/BlockReport.jsx)<br>• [ReportDetails.jsx](./src/pages/ReportDetails.jsx) | — |

## 🛠️ Tech Stack

| Layer | Technology |
|---------|-----------|
| Frontend | React.js (Vite) |
| UI Framework | Tailwind CSS + shadcn/ui |
| Backend | Node.js + Express.js |
| Database | MySQL |
| Design | Figma |
| Version Control | Git + GitHub |

## 📁 Project Structure

```text
Unideal-app/
│
├── src/
│   │
│   ├── api/
│   │   ├── base44Client.js
│   │   └── unidealApi.js
│   │
│   ├── components/
│   │   ├── shared/
│   │   └── ui/
│   │
│   ├── entities/
│   │
│   ├── hooks/
│   │
│   ├── lib/
│   │
│   ├── pages/
│   │   │
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── ForgotPassword.jsx
│   │   ├── ResetPassword.jsx
│   │   │
│   │   ├── Profile.jsx
│   │   ├── EditProfile.jsx
│   │   ├── Verification.jsx
│   │   ├── AdminVerification.jsx
│   │   │
│   │   ├── AdminPanel.jsx
│   │   ├── AdminUser.jsx
│   │   ├── BlockReport.jsx
│   │   └── ReportDetails.jsx
│   │
│   ├── utils/
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```


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

1. Clone the repository using the project's Git URL : https://github.com/ojjjall/Unideal-app.git
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
- [Add your team members here]

## 📚 Documentation & Support

- [Base44 Documentation](https://docs.base44.com/Integrations/Using-GitHub)
- [Support](https://app.base44.com/support)

## 📝 License

This project is for educational purposes.
