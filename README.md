# Ink-to-Image Converter
A full-stack AI-powered application that transforms text prompts into stunning images using the ClipDrop API. It features user authentication, credit-based usage, and secure payment integration via Razorpay.

## 🚀 Features
🔐 JWT Authentication  
💳 Credit-based usage system  
🖼️ AI-powered text-to-image generation  
<<<<<<< HEAD
🛒 Razorpay integration for purchasing credits 
⚙️ Modern React.js frontend with Tailwind CSS  
🔧 Robust Express.js backend with MongoDB
🔔 Toast notifications for better UX
=======
🛒 Razorpay integration for purchasing credits  
⚙️ Modern React.js frontend with Tailwind CSS  
🔧 Robust Express.js backend with MongoDB  
🔔 Toast notifications for better UX  

>>>>>>> a3ad8c294dc217be6d99475d8f83396b3018cbf4

## Project Structure
/client → React Frontend (Vite + Tailwind)  
/server → Node.js + Express Backend

## Authentication Flow
New users register via /api/user/register  
JWT is generated and stored in localStorage  
Token is sent in headers for protected routes  
userAuth middleware decodes the token and attaches req.userId  

## 🧾 API Endpoints

User Routes (/api/user)  
POST /register  
POST /login  
GET /credits (Protected)  

Image Routes (/api/image)
POST /generate-image (Protected)

