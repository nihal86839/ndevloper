export const passwordResetTemplate = (otpCode: string) => `
Subject: Password Reset Verification Code

🔐 Password Reset Request

Dear User,

We received a request to reset the password for your Ultimate Gamer & Hacker Platform account.

Your verification code is:

━━━━━━━━━━━━━━━━━━━━
🔑 ${otpCode}
━━━━━━━━━━━━━━━━━━━━

⏳ This code will expire in 10 minutes.

If you did not request a password reset, please ignore this email. Your account will remain secure.

For security reasons:
• Never share this code with anyone.
• Our team will never ask for your OTP.
• Use a strong password when creating a new password.
• Enable all available account security features.

If you believe this request was unauthorized, contact support immediately.

Best Regards,
🛡️ Ultimate Gamer & Hacker Platform Security Team
© 2026 Ultimate Gamer & Hacker Platform. All rights reserved.
`;
