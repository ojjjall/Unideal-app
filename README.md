# 🛍️ UniDeal App

A student marketplace application for buying and selling preloved items within the UTM community.

---

## 📋 About

This project is developed as part of the Application Development Project I course. UniDeal provides a secure platform for UTM students to buy, sell, exchange, and share products and services within the university community.

### Main Functions
- User Registration and Authentication
- Product Listing and Marketplace
- Student Verification
- Chat and Communication
- Service and Asset Sharing
- Analytics and Monitoring
- Administrative Management

---


  ## Team Members

| No. | Name | Matric No. | Responsibility |
|---|---|---|---|
| 1 | Garrah Thabit Mohammed | A24CS4013 | User Management Subsystem |
| 2 | Lauza Amru Kasyafa | A24CS4018 | Product & Market Subsystem |
| 3 | Saleh Nabil Ahmed | A24CS0028 | Analytics & Insights Subsystem |
| 4 | Zeng Yuxi | A24CS4041 | Communication & Support Subsystem |
| 5 | Zahra Aulia Putri | A24CS9006 | Service & Asset Sharing Subsystem |



## 📌 Project Overview

UniDeal is a web-based marketplace designed exclusively for Universiti Teknologi Malaysia (UTM) students. The platform enables students to trade products, share services, communicate safely, and access analytical insights within a trusted university environment.



## 🛠️ Tech Stack

| Layer | Technology |
|---------|-----------|
| Frontend | React.js (Vite) |
| UI Framework | Tailwind CSS + shadcn/ui |
| Backend | Node.js + Express.js |
| Database | MySQL |
| Design | Figma |
| Version Control | Git + GitHub |

---
## 🧩 System Architecture

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
- Sales & Performance Analytics

### Communication & Support Subsystem
- Chat & Messaging
- Meet-up Coordination & Notifications
- Help Centre & Feedback

### Service & Asset Sharing Subsystem
- Academic Service Request & Offer
- Asset Borrowing & Lending
- Booking & Deposit Management


---
## User Management Subsystem

**Developer:** Garrah Thabit

| Module Number | Module Name | FrontEnd | BackEnd |
|---|---|---|---|
| 1 | User Registration & Login Module | • [Login.jsx](./src/pages/Login.jsx)<br>• [Register.jsx](./src/pages/Register.jsx)<br>• [ForgotPassword.jsx](./src/pages/ForgotPassword.jsx)<br>• [ResetPassword.jsx](./src/pages/ResetPassword.jsx) | • AuthController.js<br>• AuthService.js<br>• AuthRoutes.js |
| 2 | Profile & Verification Module | • [Profile.jsx](./src/pages/Profile.jsx)<br>• [EditProfile.jsx](./src/pages/EditProfile.jsx)<br>• [Verification.jsx](./src/pages/Verification.jsx)<br>• [AdminVerification.jsx](./src/pages/AdminVerification.jsx) | — |
| 3 | Access Control & Authorization Module | • [AdminPanel.jsx](./src/pages/AdminPanel.jsx)<br>• [AdminUser.jsx](./src/pages/AdminUser.jsx)<br>• [BlockReport.jsx](./src/pages/BlockReport.jsx)<br>• [ReportDetails.jsx](./src/pages/ReportDetails.jsx) | — |

## Product & Market Subsystem

**Developer:** Lauza Amru Kasyafa

| Module Number | Module Name | FrontEnd | BackEnd |
| ------------- | ----------- | -------- | ------- |
| 1 | Product Listing & Management Module | • [AddProduct.jsx](https://github.com/ojjjall/Unideal-app/blob/main/src/pages/AddProduct.jsx) &nbsp; • [MyItem.jsx](https://github.com/ojjjall/Unideal-app/blob/main/src/pages/MyItem.jsx) &nbsp; • [ProductDetails.jsx](https://github.com/ojjjall/Unideal-app/blob/main/src/pages/ProductDetails.jsx) | • ProductController.js &nbsp; • ProductService.js &nbsp; • ProductRoutes.js |
| 2 | Search & Filter Module | • [Home.jsx](https://github.com/ojjjall/Unideal-app/blob/main/src/pages/Home.jsx) | — |
| 3 | Transaction & Payment Module | • [Checkout.jsx](https://github.com/ojjjall/Unideal-app/blob/main/src/pages/Checkout.jsx) &nbsp; • [Payment.jsx](https://github.com/ojjjall/Unideal-app/blob/main/src/pages/Payment.jsx) &nbsp; • [OrderReceipt.jsx](https://github.com/ojjjall/Unideal-app/blob/main/src/pages/OrderReceipt.jsx) &nbsp; • [MyOrder.jsx](https://github.com/ojjjall/Unideal-app/blob/main/src/pages/MyOrder.jsx) &nbsp; • [Wallet.jsx](https://github.com/ojjjall/Unideal-app/blob/main/src/pages/Wallet.jsx) &nbsp; • [TopUp.jsx](https://github.com/ojjjall/Unideal-app/blob/main/src/pages/TopUp.jsx) | — |

## Analytics & Insights Subsystem

**Developer:** Saleh Nabil

| Module Number | Module Name | FrontEnd | BackEnd |
|---|---|---|---|
| 1 | User Activity Dashboard Module | • [UserActivityDashboard.jsx](./src/pages/UserActivityDashboard.jsx)<br>• [ActivityFilters.jsx](./src/components/ActivityFilters.jsx)<br>• [UserAnalyticsChart.jsx](./src/components/UserAnalyticsChart.jsx)<br>• [SessionMetricsCard.jsx](./src/components/SessionMetricsCard.jsx) | • AnalyticsController.js<br>• ActivityService.js<br>• AnalyticsRoutes.js |
| 2 | Sales & Performance Module | • [AdminSalesDashboard.jsx](./src/pages/AdminSalesDashboard.jsx)<br>• [StudentSalesDashboard.jsx](./src/pages/StudentSalesDashboard.jsx)<br>• [SalesMetricsCard.jsx](./src/components/SalesMetricsCard.jsx)<br>• [RevenueChart.jsx](./src/components/RevenueChart.jsx)<br>• [TopProductsTable.jsx](./src/components/TopProductsTable.jsx)<br>• [CategoryPerformanceChart.jsx](./src/components/CategoryPerformanceChart.jsx) | • SalesController.js<br>• SalesService.js<br>• PerformanceRoutes.js |
| 3 | Buyer Spending Summary Module | • [BuyerSpendingSummary.jsx](./src/pages/BuyerSpendingSummary.jsx)<br>• [SpendingByCategoryChart.jsx](./src/components/SpendingByCategoryChart.jsx)<br>• [SpendingTrendsChart.jsx](./src/components/SpendingTrendsChart.jsx)<br>• [TopBuyersTable.jsx](./src/components/TopBuyersTable.jsx)<br>• [CategoryBreakdownCard.jsx](./src/components/CategoryBreakdownCard.jsx) | • SpendingController.js<br>• SpendingService.js<br>• SpendingRoutes.js |

## Communication & Support Subsystem

*Developer:* ZENG YUXI

| Module Number | Module Name | FrontEnd | BackEnd |
|---|---|---|---|
| 1 | Chat & Messaging Module | • [ChatWidget.jsx](./src/components/ChatWidget.jsx)<br>• [MessagingPanel.jsx](./src/components/MessagingPanel.jsx)<br>• [ConversationList.jsx](./src/components/ConversationList.jsx) | • ChatController.js<br>• MessageService.js<br>• ChatRoutes.js |
| 2 | Meetup Management Module | • [MeetupScheduler.jsx](./src/components/MeetupScheduler.jsx)<br>• [MeetupDetails.jsx](./src/components/MeetupDetails.jsx)<br>• [MapView.jsx](./src/components/MapView.jsx) | • MeetupController.js<br>• MeetupService.js<br>• MeetupRoutes.js |
| 3 | Help Centre & Support Module | • [FAQ.jsx](./src/pages/FAQ.jsx)<br>• [SupportTicket.jsx](./src/pages/SupportTicket.jsx)<br>• [FeedbackForm.jsx](./src/components/FeedbackForm.jsx) | • SupportController.js<br>• SupportTicketService.js<br>• SupportRoutes.js |

## Service & Asset Sharing Subsystem

**Developer:** Zahra Aulia Putri

| Module Number | Module Name | FrontEnd | BackEnd |
|---|---|---|---|
| 1 | Academic Service Request & Offer Module | • [ServiceList.jsx](./src/pages/ServiceList.jsx)<br>• [AddService.jsx](./src/pages/AddService.jsx)<br>• [ServiceDetails.jsx](./src/pages/ServiceDetails.jsx)<br>• [ServiceRequest.jsx](./src/pages/ServiceRequest.jsx) | • ServiceController.js<br>• ServiceService.js<br>• ServiceRoutes.js |
| 2 | Asset Borrowing & Lending Module | • [AssetList.jsx](./src/pages/AssetList.jsx)<br>• [AddAsset.jsx](./src/pages/AddAsset.jsx)<br>• [AssetDetails.jsx](./src/pages/AssetDetails.jsx)<br>• [MyAssets.jsx](./src/pages/MyAssets.jsx) | • AssetController.js<br>• AssetService.js<br>• AssetRoutes.js |
| 3 | Booking & Deposit Management Module | • [BookingForm.jsx](./src/pages/BookingForm.jsx)<br>• [BookingDetails.jsx](./src/pages/BookingDetails.jsx)<br>• [MyBookings.jsx](./src/pages/MyBookings.jsx)<br>• [DepositManagement.jsx](./src/pages/DepositManagement.jsx) | • BookingController.js<br>• BookingService.js<br>• BookingRoutes.js |

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

## ✨ Features

### User Management
- User Registration
- User Login
- Password Recovery
- Profile Management
- Student Verification
- Admin Verification Review
- User Access Management

### Product Marketplace
- Product Listing
- Product Search
- Product Details
- Payment Management

### Analytics
- User Activity Monitoring
- Sales Performance Tracking

### Communication
- Chat System
- Notifications
- Feedback Submission
- Report Management

### Service & Asset Sharing
- Academic Services
- Asset Lending
- Booking Management

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

- @ojjjall — Project Lead
- Garrah Thabit Mohammed
- Lauza Amru Kasyafa
- Saleh Nabil Ahmed
- Zeng Yuxi
- Zahra Aulia Putri

---

## 📚 Documentation & Support

- Base44 Documentation
- GitHub Repository Management
- Project Development Documentation

- [Base44 Documentation](https://docs.base44.com/Integrations/Using-GitHub)
- [Support](https://app.base44.com/support)

## 📝 License

This project is developed for educational purposes under the Application Development Project I course.
