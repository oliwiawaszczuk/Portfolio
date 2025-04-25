import type { Metadata } from "next";
import "./globals.css";
import {ReactFlowProvider} from "@xyflow/react";

export const metadata: Metadata = {
  title: "Oliwia Waszczuk - Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
            <ReactFlowProvider>
                {children}
            </ReactFlowProvider>
      </body>
    </html>
  );
}
