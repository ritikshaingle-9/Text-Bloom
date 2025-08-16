# Text Bloom 

## Overview
Text Bloom is a full-stack AI-powered web application that transforms user-provided text prompts into visually stunning images using advanced text-to-image generation models. It includes secure JWT-based authentication and a credit-based usage system.

## Features

### 🔍 Core Features
1. Text-to-Image Generation: Turn imaginative text prompts into high-quality images.
2. User Authentication: Secure JWT-based login and registration.
3. Credit System: Users can generate images based on available credits.
4. Protected Routes: Only authenticated users can generate images and view their credits.

### 🚀 Advanced Features
1. React.js Frontend with Tailwind CSS: Sleek, modern, and responsive UI.
2. Toast Notifications: Real-time feedback for better user experience.
3. Token-Based Session Management: JWTs stored securely in localStorage.
4. Scalable Architecture: Modular and scalable structure with Express and MongoDB.

## Technology Stack

### 🖥️ Frontend
- React.js (with Vite for blazing-fast builds)
- Tailwind CSS for modern UI styling
- React Router for route management
- Toastify for in-app notifications

### 🔧 Backend
- Node.js with Express.js
- MongoDB with Mongoose for database management
- JWT for authentication
- bcrypt for password encryption
- CORS for secure cross-origin requests

## Authentication Flow
- Users register using /api/user/register.
- Upon login, a JWT token is generated and stored in localStorage.
- Protected routes check token validity using middleware (userAuth).

If valid, the server processes the request with req.userId attached.

## API Endpoints

#### 🔐 User Routes (/api/user)
- POST /register — Register a new user
- POST /login — User login
- GET /credits — Fetch user's remaining credits (protected)

#### 🖼️ Image Routes (/api/image)
- POST /generate-image — Generate image from prompt (protected)

## Usage
1. Launch both the frontend and backend servers.
2. Register or log in with your account.
3. Input a creative text prompt.
4. Click generate to receive your AI-generated image.
5. Each generation deducts one credit from your balance.


## Future Enhancements

- 🛍️ Add credit purchasing with Stripe or other payment providers.
- 📦 Integration with custom AI models or local inference.
- 🧾 Generation history with cloud image storage.
- 🌐 Multilingual UI support.
- 📱 Mobile App version (React Native or Flutter).

## Contact
For questions:<br>
GitHub:https://github.com/ritikshaingle-9<br>

* ⚠️ Note: This system is developed for educational purposes only and should not be used in production without further testing and security reviews. 