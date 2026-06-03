export const emailVerificationTemplate = (otpCode: string) => `
Subject: Verify Your Email Address

🔐 Email Verification Required

Dear User,

Thank you for registering with Ultimate Gamer & Hacker Platform.

To complete your account verification, please use the One-Time Password (OTP) below:

━━━━━━━━━━━━━━━━━━━━
🔑 ${otpCode}
━━━━━━━━━━━━━━━━━━━━

⏳ This code is valid for 10 minutes.

For your security:
• Do not share this code with anyone.
• Our team will never ask for your OTP.
• If you did not create an account, you can safely ignore this email.

Once verified, you'll gain access to:
🎮 Games & Downloads
💻 Ethical Hacking Learning Resources
🎬 Videos & Media Content
📷 Photos & Wallpapers
🎵 Music & Entertainment
💬 Global Chat Community
🌈 10 Personalized Themes
🛡️ Secure User Dashboard
⚡ Fast Downloads & Purchases

If you need assistance, please contact our support team.

Thank you for choosing Ultimate Gamer & Hacker Platform.

Best Regards,
🛡️ Ultimate Gamer & Hacker Platform Team
© 2026 Ultimate Gamer & Hacker Platform. All rights reserved.
`;
