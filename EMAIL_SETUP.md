# Email Backend Setup Guide

## Overview
The contact form now sends emails to vedantghubade04@gmail.com through a Node.js backend using Nodemailer.

## Setup Instructions

### 1. Install Backend Dependencies
```bash
npm install express cors dotenv nodemailer
npm install --save-dev @types/express @types/node ts-node
```

### 2. Create Gmail App Password
1. Go to https://myaccount.google.com/apppasswords
2. Select "Mail" and "Windows Computer" (or your device)
3. Google will generate a 16-character password
4. Copy this password

### 3. Configure Environment Variables
1. Create or update `.env` file in project root:
```
EMAIL_USER=vedantghubade04@gmail.com
EMAIL_PASSWORD=your_16_char_app_password
PORT=3001
FRONTEND_URL=http://localhost:5173
```

### 4. Running the Backend

**Development Mode:**
```bash
npm run server:dev
```

**Production Mode:**
```bash
npm run server
```

### 5. Update package.json Scripts
Add these scripts to your `package.json`:
```json
"scripts": {
  "server": "node --loader ts-node/esm server/index.ts",
  "server:dev": "tsx watch server/index.ts",
  "dev": "concurrently \"npm run server:dev\" \"vite\"",
  "build": "vite build && tsc --outDir dist server/index.ts"
}
```

### 6. Optional: Install Additional Tools
For better development experience:
```bash
npm install --save-dev concurrently tsx
```

## API Endpoint

### POST /api/send-email
Sends contact form email to vedantghubade04@gmail.com

**Request Body:**
```json
{
  "to": "vedantghubade04@gmail.com",
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Inc",
  "phone": "+91 1234567890",
  "subject": "Product Inquiry",
  "message": "I'm interested in your products..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

## Deployment

For production deployment (Vercel, Railway, etc.):
1. Add EMAIL_USER and EMAIL_PASSWORD to your hosting platform's environment variables
2. Update FRONTEND_URL to your production domain
3. Deploy the backend separately or use serverless functions

## Troubleshooting

**Email not sending:**
- Verify app password is correct (16 characters with spaces removed)
- Check "Less secure app access" is enabled (for regular Gmail accounts)
- Ensure firewall/VPN allows SMTP connections

**CORS errors:**
- Update FRONTEND_URL in .env to match your frontend domain
- Check CORS configuration in server/index.ts

**Connection timeout:**
- Verify internet connection
- Check if Gmail SMTP server (smtp.gmail.com:587) is accessible
