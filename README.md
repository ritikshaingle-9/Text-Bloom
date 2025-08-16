*#Text Bloom*

##Overview
Text Bloom is a full-stack AI-powered web application that transforms user-provided text prompts into visually stunning images using advanced text-to-image generation models. It includes secure JWT-based authentication and a credit-based usage system. This project was developed as part of the Session 2024-25 mini project.

##Features

###🔍 Core Features
1)Text-to-Image Generation: Turn imaginative text prompts into high-quality images.
2)User Authentication: Secure JWT-based login and registration.
3)Credit System: Users can generate images based on available credits.
4)Protected Routes: Only authenticated users can generate images and view their credits.

###🚀 Advanced Features
React.js Frontend with Tailwind CSS: Sleek, modern, and responsive UI.
Toast Notifications: Real-time feedback for better user experience.
Token-Based Session Management: JWTs stored securely in localStorage.
Scalable Architecture: Modular and scalable structure with Express and MongoDB.

##Technology Stack

###🖥️ Frontend
React.js (with Vite for blazing-fast builds)
Tailwind CSS for modern UI styling
React Router for route management
Toastify for in-app notifications

###🔧 Backend
Node.js with Express.js
MongoDB with Mongoose for database management
JWT for authentication
bcrypt for password encryption
CORS for secure cross-origin requests

##🧠 AI Model

Text-to-Image Generation Model (e.g., Stable Diffusion or DALL·E — configurable)
API-ready architecture for integration with model services
Project Structure
Text-Bloom/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page-level components
│   │   ├── services/      # API and Auth services
│   │   └── assets/        # Static files
│   └── package.json
├── server/                # Node.js backend
│   ├── controllers/       # Route logic
│   ├── models/            # Mongoose models
│   ├── routes/            # Express route handlers
│   ├── middleware/        # Auth middleware
│   └── index.js
└── README.md

Authentication Flow

Users register using /api/user/register.

Upon login, a JWT token is generated and stored in localStorage.

Protected routes check token validity using middleware (userAuth).

If valid, the server processes the request with req.userId attached.

API Endpoints
🔐 User Routes (/api/user)

POST /register — Register a new user

POST /login — User login

GET /credits — Fetch user's remaining credits (protected)

🖼️ Image Routes (/api/image)

POST /generate-image — Generate image from prompt (protected)

Usage

Launch both the frontend and backend servers.

Register or log in with your account.

Input a creative text prompt.

Click generate to receive your AI-generated image.

Each generation deducts one credit from your balance.

Future Enhancements

🛍️ Add credit purchasing with Stripe or other payment providers

📦 Integration with custom AI models or local inference

🧾 Generation history with cloud image storage

🌐 Multilingual UI support

📱 Mobile App version (React Native or Flutter)

Contributing

This is an academic project. Suggestions and contributions are welcome!

Fork the repository

Create a feature branch

Submit a pull request

Contact

For questions or collaboration:

GitHub: YourUsername

Project Link: Text Bloom

⚠️ Note: This system is developed for educational purposes only and should not be used in production without further testing and security reviews.