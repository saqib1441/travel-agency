import "./globals.css";
import { Poppins, Volkhov } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const volkhov = Volkhov({
  subsets: ["latin"],
  variable: "--volkhov-font",
  weight: ["700"],
});

export const metadata = {
  title: "Jadoo Travel Agency",
  description:
    "Explore unbeatable travel packages and vacation deals at [Your Travel Agency Name]. From family vacations to luxury getaways, we offer personalized adventure travel, eco-friendly options, and last-minute deals. Discover destination guides, book flights, and find the perfect hotel for your dream holiday. Start your journey today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${poppins.className} ${volkhov.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
