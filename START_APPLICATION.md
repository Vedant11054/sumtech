# 🚀 Starting the Application

## Step 1: Start the Backend Server
Open a terminal and run:
```bash
npm run server
```

Expected output:
```
✅ Server running on http://localhost:3001
📧 Email service configured for: vedantghubade04@gmail.com
```

## Step 2: Start the Frontend (in another terminal)
```bash
npm run dev
```

Expected output:
```
  VITE v5.4.19  ready in XXX ms

  ➜  Local:   http://localhost:5173/
```

## Step 3: Test the Contact Form
1. Open http://localhost:5173/contact
2. Fill out the form with your details
3. Click "Send Message"
4. You should see a success notification
5. Check vedantghubade04@gmail.com for the email

## ⚠️ Troubleshooting

### "Failed to send message" error:
1. ✅ Ensure backend is running (`npm run server`)
2. ✅ Check that both frontend (port 5173) and backend (port 3001) are running
3. ✅ Verify `.env` file has EMAIL_PASSWORD set (16 characters)
4. ✅ Check browser console (F12) for detailed errors
5. ✅ Check terminal running the server for error logs

### Backend won't start:
- Make sure port 3001 is not in use
- Run: `npm run server:dev` for watch mode with auto-reload

### Email not received:
- Check Gmail Inbox, Spam, and All Mail folders
- Verify EMAIL_PASSWORD is correct (from app passwords, not account password)
- Check server logs for error messages

## 📧 Email Test
To test if Gmail is configured correctly, run:
```bash
node test-email.mjs
```

Should output:
```
✅ Gmail connection successful!
✅ Ready to send emails!
```
