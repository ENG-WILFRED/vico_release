# VICO Newsletter & Contact Email Setup Guide

## 📧 Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

This installs:
- `@prisma/client` - Database ORM
- `nodemailer` - Email sending
- `prisma` - Database CLI tools

### 2. Configure Environment Variables

Copy the `.env.example` to `.env.local` and fill in your actual values:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:

```env
# Database (PostgreSQL recommended)
DATABASE_URL="postgresql://user:password@localhost:5432/vico?schema=public"

# SMTP Configuration (Gmail, SendGrid, Mailgun, etc.)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-specific-password"

# Admin notification email
ADMIN_EMAIL="admin@vico.com"

# Next.js
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

### 3. Database Setup

#### Option A: Local PostgreSQL

```bash
# Install PostgreSQL locally or use Docker
docker run --name postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres:15

# Then initialize Prisma
npx prisma migrate dev --name init
```

#### Option B: Prisma PostgreSQL (Cloud)

```bash
# Login to Prisma
npx prisma-platform-login

# Create a new database
npx prisma-postgres-create-database --name vico
```

### 4. Generate Prisma Client

```bash
npx prisma generate
```

### 5. Run Migrations

```bash
npx prisma migrate dev --name init
```

This creates the `newsletter` and `contact` tables.

---

## 📧 SMTP Configuration

### Gmail Setup

1. Enable 2-Factor Authentication in your Google Account
2. Generate an [App Password](https://myaccount.google.com/apppasswords)
3. Use the 16-character password as `SMTP_PASS`

```env
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="xxxx xxxx xxxx xxxx"  # Your 16-char app password
```

### SendGrid Setup

1. Create a SendGrid account
2. Generate an API key
3. Use the API key as `SMTP_PASS`

```env
SMTP_HOST="smtp.sendgrid.net"
SMTP_PORT="587"
SMTP_USER="apikey"
SMTP_PASS="SG.your-api-key"
```

### Mailgun Setup

1. Create a Mailgun account
2. Find your SMTP credentials in the dashboard

```env
SMTP_HOST="smtp.mailgun.org"
SMTP_PORT="587"
SMTP_USER="postmaster@your-domain.mailgun.org"
SMTP_PASS="your-password"
```

---

## 🎯 Features

### Newsletter Subscription (`/app/actions/newsletter.ts`)

When a user subscribes:

1. **Admin receives email** with subscriber info
2. **Subscriber receives confirmation** email with welcome message
3. **Data saved** to `newsletter` table in database

#### Usage in Components

```tsx
import { NewsletterForm } from "@/components/NewsletterForm";

export default function Page() {
  return <NewsletterForm />;
}
```

#### Direct Server Action Usage

```tsx
"use client";

import { subscribeNewsletter } from "@/app/actions/newsletter";

const result = await subscribeNewsletter("user@example.com");
// Returns: { success: true, message: "..." } or { success: false, error: "..." }
```

### Contact Form (`/app/actions/contact.ts`)

When a user submits the contact form:

1. **Admin receives** full submission details with reply-to sender email
2. **Sender receives** confirmation email
3. **Data saved** to `contact` table in database

#### Usage

```tsx
"use client";

import { sendContactEmail } from "@/app/actions/contact";

const result = await sendContactEmail({
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  phone: "+1-555-0000",
  service: "Tournament Management",
  message: "I'd like to learn more...",
});
```

---

## 📊 Database Schema

### Newsletter Table

```prisma
model Newsletter {
  id              String    @id @default(cuid())
  email           String    @unique
  subscribedAt    DateTime  @default(now())
  unsubscribedAt  DateTime?
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
}
```

### Contact Table

```prisma
model Contact {
  id        String    @id @default(cuid())
  firstName String
  lastName  String
  email     String
  phone     String
  service   String
  message   String    @db.Text
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
}
```

---

## 🔍 Viewing Data

### Prisma Studio

View and manage all data in a visual interface:

```bash
npx prisma studio
```

Opens at `http://localhost:5555`

### Database Queries

```bash
# Access database directly
psql postgresql://user:password@localhost:5432/vico

# View subscribers
SELECT * FROM newsletter;

# View contacts
SELECT * FROM contact;
```

---

## 🚀 Testing Emails

### Test Newsletter Subscription

1. Visit `http://localhost:3000`
2. Fill in the newsletter form with your email
3. Check your email for confirmation

### Test Contact Form

Implement your contact form with:

```tsx
"use client";

import { sendContactEmail } from "@/app/actions/contact";
import { useState } from "react";

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const result = await sendContactEmail({
      firstName: e.currentTarget.firstName.value,
      lastName: e.currentTarget.lastName.value,
      email: e.currentTarget.email.value,
      phone: e.currentTarget.phone.value,
      service: e.currentTarget.service.value,
      message: e.currentTarget.message.value,
    });

    if (result.success) {
      alert("Message sent successfully!");
      e.currentTarget.reset();
    } else {
      alert("Error: " + result.error);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  );
}
```

---

## ⚠️ Production Checklist

Before deploying:

- [ ] Set strong, unique `SMTP_PASS` in production
- [ ] Use environment secrets (not `.env.local`)
- [ ] Use `NEXT_PUBLIC_BASE_URL` for production domain
- [ ] Enable email verification (optional feature to add)
- [ ] Set up email templates in your SMTP provider
- [ ] Test email delivery with real addresses
- [ ] Configure `ADMIN_EMAIL` to your actual team inbox
- [ ] Set up email bounce/complaint handling
- [ ] Enable rate limiting on subscription endpoint
- [ ] Monitor email sending logs

---

## 🐛 Troubleshooting

### Email Not Sending

```javascript
// Check SMTP configuration
console.error("SMTP Error:", error);
// Common: incorrect password, port, or host
```

### Database Connection Failed

```bash
# Verify DATABASE_URL format
echo $DATABASE_URL

# Test connection
psql $DATABASE_URL -c "SELECT 1"
```

### Prisma Client Generation Error

```bash
# Clear cache and regenerate
rm -rf node_modules/.prisma
npx prisma generate
```

### Subscriber Already Exists

The system prevents duplicate subscriptions:

```
"Already subscribed"
```

To manage unsubscribes, use Prisma Studio or database query:

```sql
UPDATE newsletter SET "unsubscribedAt" = NOW() WHERE email = 'user@example.com';
```

---

## 📝 Email Templates

All email templates are defined in the server actions:

- **Newsletter Subscription**: `app/actions/newsletter.ts` (lines 49-68, 71-100)
- **Contact Form**: `app/actions/contact.ts` (lines 48-75, 78-105)

Customize the HTML/text templates directly in these files.

---

## 🔐 Security Notes

1. **Never commit `.env.local`** - it's in `.gitignore`
2. **Use app-specific passwords** - don't use your main email password
3. **Validate email** - consider adding email verification links
4. **Rate limit** - prevent spam subscriptions with rate limiting middleware
5. **Error handling** - never expose SMTP credentials in error messages

---

## 📞 Support

For issues or questions about email configuration:
- Gmail: [Create App Password](https://myaccount.google.com/apppasswords)
- SendGrid: [SMTP Documentation](https://sendgrid.com/docs/for-developers/sending-email/integrations/)
- Mailgun: [SMTP Documentation](https://documentation.mailgun.com/en/latest/user_manual.html#sending-via-smtp)
- Prisma: [Prisma Docs](https://www.prisma.io/docs/)
- Nodemailer: [Nodemailer Docs](https://nodemailer.com/)
