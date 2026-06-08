import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Review Crisis Alerter – Instant Alerts for Negative Google Reviews",
  description: "Monitor Google My Business reviews and get instant SMS/email alerts when ratings drop below 4 stars. Protect your local business reputation."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="381a6538-7bcd-4e23-b9fd-c7fd86909832"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
