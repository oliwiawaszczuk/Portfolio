import type { Metadata } from "next";
import "./globals.css";
import {ReactFlowProvider} from "@xyflow/react";

export const metadata: Metadata = {
  title: "Oliwia Waszczuk - Portfolio",
  description: "Personal portfolio showcasing my projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ReactFlowProvider>
          <main className="min-h-screen">
            {children}
          </main>
        </ReactFlowProvider>
      </body>
    </html>
  );
}
