# Frontend Deployment Guide

## Environment Setup

1. **Create Environment File**:
   Create a `.env.local` file in the root of your frontend project with:
   ```
   NEXT_PUBLIC_BACKEND_URL=https://backend.kartikeymahawar1234.workers.dev
   ```

2. **For Production Deployment**:
   - If using Vercel: Add the environment variable in your Vercel dashboard
   - If using Netlify: Add the environment variable in your Netlify dashboard
   - If using other platforms: Add the environment variable according to your platform's documentation

## Backend Integration

Your frontend is now connected to your Cloudflare Workers backend with the following features:

### Newsletter Subscription
- **Contact Form**: Users can subscribe when sending a message
- **Newsletter Tab**: Dedicated newsletter subscription form
- **Footer**: Quick newsletter subscription in the footer

### Admin Dashboard
- **Access**: Navigate to `/admin` to access the newsletter admin dashboard
- **Features**:
  - View all subscribers
  - Send release announcements
  - Send custom newsletters
  - Track campaign history

## API Endpoints Used

- `POST /submit-newsletter` - Subscribe to newsletter
- `GET /get-newsletters` - Get all subscribers (admin)
- `POST /send-release-announcement` - Send release announcement (admin)
- `POST /send-custom-newsletter` - Send custom newsletter (admin)
- `GET /get-campaigns` - Get campaign history (admin)

## Testing

1. **Test Newsletter Subscription**:
   - Go to the contact page
   - Try subscribing with a new email
   - Try subscribing with the same email (should show "already subscribed" error)

2. **Test Admin Dashboard**:
   - Navigate to `/admin`
   - Check if subscribers are listed
   - Try sending a test release announcement

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the .next folder to Netlify
```

### Manual Deployment
```bash
npm run build
npm start
```

## Zoho Integration Setup

### Prerequisites
- Zoho account with access to Zoho Campaigns
- Domain `mahawarkartikey.in` configured in Zoho
- Email `thoughts@mahawarkartikey.in` set up

### Setup Steps
1. **Follow the Zoho Setup Guide**: See `backend/ZOHO_SETUP.md` for detailed instructions
2. **Get API Credentials**: Set up Zoho Developer Console and get access tokens
3. **Configure Backend**: Set environment variables for Zoho integration
4. **Test Email Sending**: Use the admin dashboard to test email functionality

### Environment Variables for Zoho
```bash
# Set these in your backend using wrangler secret
wrangler secret put ZOHO_CLIENT_ID
wrangler secret put ZOHO_CLIENT_SECRET
wrangler secret put ZOHO_ACCESS_TOKEN
wrangler secret put ZOHO_REFRESH_TOKEN
wrangler secret put ZOHO_LIST_KEY
```

## Troubleshooting

1. **CORS Issues**: The backend is configured with CORS for your domain `mahawarkartikey.in`
2. **Environment Variables**: Make sure `NEXT_PUBLIC_BACKEND_URL` is set correctly
3. **Backend Status**: Check if your backend is running at the specified URL
4. **Zoho Integration**: Follow the setup guide in `backend/ZOHO_SETUP.md`

## Next Steps

1. **Complete Zoho Integration**: Follow the setup guide to enable actual email sending
2. **Add Authentication**: Protect the admin dashboard with authentication
3. **Add Analytics**: Track newsletter performance
4. **Customize Templates**: Update email templates to match your brand

## Your Configuration

- **Backend URL**: `https://backend.kartikeymahawar1234.workers.dev`
- **Portfolio Domain**: `https://www.mahawarkartikey.in`
- **Newsletter Email**: `thoughts@mahawarkartikey.in`
- **Admin Dashboard**: `https://www.mahawarkartikey.in/admin` 