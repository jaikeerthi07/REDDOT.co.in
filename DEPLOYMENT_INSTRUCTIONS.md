# Deployment Instructions for REDDOT.co.in

## Prerequisites
1. GitHub account
2. Vercel account (can sign in with GitHub)

## Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `reddot-website`
3. Set to Public or Private (your choice)
4. Do NOT initialize with a README
5. Click "Create repository"

## Step 2: Push Code to GitHub
Run these commands in your terminal:

```bash
cd c:\Users\Jaikeerthi\Videos\REDDOT.co.in
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/reddot-website.git
git branch -M main
git push -u origin main
```

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

## Step 3: Deploy to Vercel
1. Go to https://vercel.com/new
2. Sign in with GitHub
3. Click "Continue with GitHub"
4. Select your `reddot-website` repository
5. Configure project settings:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

## Step 4: Add Environment Variables
In Vercel dashboard, go to your project settings > Environment Variables and add:

```
GROQ_API_KEY=your_groq_api_key_here
MONGODB_URI=your_mongodb_connection_string_here
MONGODB_DB_NAME=reddot-website
CONTACT_EMAIL=keerthijai909@gmail.com
```

Note: The EMAIL_PASSWORD is no longer required. Form submissions will be logged to the console and can be extended with other notification methods.

## Step 5: Redeploy
After adding environment variables, trigger a new deployment from the Vercel dashboard.

## Important Notes
- For Gmail to work, you need to use an App Password, not your regular password
- Make sure to enable 2-Factor Authentication on your Google account first
- Generate an App Password at: https://myaccount.google.com/apppasswords

## Contact Information
- Founder: Jai Keerthi
- Location: Chennai, India
- Phone: +91 8072163133
- Email: keerthijai909@gmail.com
- LinkedIn: https://www.linkedin.com/in/jai-keerthi-03931b341