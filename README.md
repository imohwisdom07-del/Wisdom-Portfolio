# E-MAX TRADE
### _A crypto merchant trading platform — built for real use_

> **Live Demo →** [e-max-trade-p3nd.vercel.app](https://e-max-trade-p3nd.vercel.app)

---

## Overview

**E-Max Trade** is a frontend web application for a crypto merchant trading business. It was built as a real working demo for a client who was manually handling crypto trades over WhatsApp — the goal was to give the business a proper, professional web presence.

The platform supports two types of users: **customers** who want to buy or sell crypto, and an **admin** who manages rates and confirms transactions.

---

## Features

### 🌐 Public (No Login Required)
- Live crypto calculator — enter an amount and instantly see the Naira equivalent
- Buy/Sell toggle supporting USDT, BTC, ETH, SOL
- Real-time exchange rates page with 24h change display
- "How It Works" section explaining the 3-step trading process
- Scrolling ticker showing recent transaction activity

### 👤 Customer Portal
- Sign up and login flow
- Dashboard showing total traded balance, profit, and active trades
- Trade history with status tags (Paid / Pending)
- Payout accounts management (add bank account for receiving Naira)
- Security settings with Two-Factor Auth toggle
- ID Verified badge system

### 🔐 Admin Portal
- Hidden entry — accessed by holding the logo for 4 seconds
- Staff login with admin email verification
- Secure terminal with admin key access
- Market Control dashboard — set dollar exchange rate and profit margin
- Live payout calculator for all supported assets
- Order Management — view pending transactions, mark as paid or decline

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **React.js** | UI components and state management |
| **React Router DOM** | Multi-page navigation |
| **Vite** | Build tool and dev server |
| **CSS (Custom)** | All styling — no UI framework used |
| **Vercel** | Deployment and hosting |

---

## Pages

| Route | Description |
|---|---|
| `/` | Landing page with crypto calculator |
| `/rates` | Real-time exchange rates table |
| `/how-it-works` | 3-step trading guide |
| `/login` | Customer login |
| `/signup` | Customer registration |
| `/dashboard` | Customer overview |
| `/dashboard/history` | Trade history |
| `/dashboard/payout` | Payout accounts |
| `/dashboard/security` | Security settings |
| `/admin` | Hidden admin entry (hold logo 4s) |
| `/admin/terminal` | Admin secure terminal |
| `/admin/market` | Market rate controls |
| `/admin/orders` | Order management |

---

## Honest Notes

- **No backend** — this is a frontend-only demo. Authentication and data are simulated on the client side. No real money moves, no real transactions.
- Built as a **demo/proof of concept** for a real client use case
- The hidden admin portal is a creative frontend feature, not a real security implementation

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/imohwisdom07-del/E-max-trade.git

# Navigate into the project
cd E-max-trade

# Install dependencies
npm install

# Start development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## What I Learned

- Building complex multi-page React apps with multiple user roles
- Managing different UI states for authenticated vs unauthenticated users
- Designing a dual-portal architecture (customer + admin) from scratch
- Building interactive UI components like calculators, toggles, and data tables
- Translating a real business workflow into a web interface

---

## Roadmap / Future Improvements

- [ ] Connect real backend (Node.js + Express or Supabase)
- [ ] Real authentication with JWT or Firebase Auth
- [ ] Live crypto price API integration (CoinGecko or Binance API)
- [ ] Real payment confirmation via Paystack webhook
- [ ] Mobile responsive design

---

## Author

**Wisdom Imoh**
Frontend Developer | Lagos, Nigeria

[![GitHub](https://img.shields.io/badge/GitHub-imohwisdom07--del-black?style=flat&logo=github)](https://github.com/imohwisdom07-del)
[![Live Demo](https://img.shields.io/badge/Live-e--max--trade-orange?style=flat&logo=vercel)](https://e-max-trade-p3nd.vercel.app)

---

⭐ If you like this project, leave a star!
