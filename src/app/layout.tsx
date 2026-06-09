import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Lato } from "next/font/google";



export const metadata: Metadata = {
  title: 'CineIQ - Your Spoiler-Free Movie Q&A AI',
  description: 'Ask questions about any movie without spoilers. Our AI intelligently answers based on your current watch time, ensuring a perfect, unruined viewing experience.',
  keywords: ["movie Q&A, AI, spoiler-free, film companion, cinematic insights, watch time, movie assistant, plot details"],
  openGraph: {
    "title": "CineIQ - Your Spoiler-Free Movie Q&A AI",
    "description": "Ask questions about any movie without spoilers. Our AI intelligently answers based on your current watch time, ensuring a perfect, unruined viewing experience.",
    "url": "https://cineiq.com",
    "siteName": "CineIQ",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/couple-watching-movie-cinema-with-3d-glasses_23-2151005429.jpg",
        "alt": "CineIQ interface on a tablet with a movie playing"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "CineIQ - Your Spoiler-Free Movie Q&A AI",
    "description": "Ask questions about any movie without spoilers. Our AI intelligently answers based on your current watch time, ensuring a perfect, unruined viewing experience.",
    "images": [
      "http://img.b2bpic.net/free-photo/couple-watching-movie-cinema-with-3d-glasses_23-2151005429.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${lato.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
