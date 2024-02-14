import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="flex translate-y-20 px-2 max-w-screen-lg mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
