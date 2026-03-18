# 🏕️ WanderLust

An Airbnb-inspired full-stack web application where users can explore, create, and manage travel listings. Built with the MERN stack (MongoDB, Express.js, EJS, Node.js).

---

## 🌐 Live Demo

> Coming soon / Deploy link here

---

## ✨ Features

- 🔐 User authentication — signup, login, logout (Passport.js)
- 🏠 Create, read, update, and delete listings
- 🗂️ Category filter bar (Trending, Rooms, Mountains, Castles, etc.)
- ⭐ Leave and delete reviews on listings
- 🗺️ Map integration with Mapbox for listing locations
- 🖼️ Image uploads via Cloudinary
- 💰 Tax toggle — display prices with/without 18% GST
- 🔒 Authorization — only listing owners can edit or delete
- ☁️ Session storage with MongoDB Atlas (connect-mongo)
- ✅ Flash messages for success and error feedback
- 📱 Fully responsive design with Bootstrap 5

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | EJS, Bootstrap 5, Font Awesome |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Auth | Passport.js, passport-local-mongoose |
| Maps | Mapbox GL JS |
| Image Upload | Cloudinary, Multer |
| Session Store | connect-mongo |
| Validation | Joi |

---

## 📁 Project Structure

```
wanderlust/
├── controllers/        # Route logic (listings, reviews, users)
├── models/             # Mongoose schemas (Listing, Review, User)
├── routes/             # Express routers
├── views/              # EJS templates
│   ├── layouts/        # Boilerplate layout
│   ├── listings/       # index, show, new, edit
│   └── users/          # login, signup
├── public/             # Static assets (CSS, JS)
├── utils/              # ExpressError, wrapAsync
├── middleware.js        # Custom middleware
├── app.js              # Main entry point
└── .env                # Environment variables (not committed)
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v22+
- MongoDB (local or Atlas)
- Cloudinary account
- Mapbox account

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/wanderlust.git
cd wanderlust

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
ATLASDB_URL=your_mongodb_atlas_url
SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_mapbox_token
```

### Run the App

```bash
node app.js
```

Visit `http://localhost:8080/listings`

---

## 🔑 Key Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/listings` | All listings |
| GET | `/listings/new` | New listing form |
| POST | `/listings` | Create listing |
| GET | `/listings/:id` | Show listing |
| PUT | `/listings/:id` | Update listing |
| DELETE | `/listings/:id` | Delete listing |
| POST | `/listings/:id/reviews` | Add review |
| DELETE | `/listings/:id/reviews/:reviewId` | Delete review |
| GET | `/signup` | Signup form |
| POST | `/signup` | Register user |
| GET | `/login` | Login form |
| POST | `/login` | Authenticate user |
| GET | `/logout` | Logout |

---

## 📸 Screenshots

> Add screenshots of your app here

---

## 🙋‍♂️ Author

**Syed Zeeshan Ali Kazmi**  
Full-Stack Developer | BS Information Technology — Virtual University of Pakistan  
[LinkedIn](https://linkedin.com/in/your-profile) · [GitHub](https://github.com/your-username)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
