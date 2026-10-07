import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sachin-profile.vercel.app"),
  title: "Sachin Kumar — Strategy, Growth & Problem Solving",
  description: "Sachin Kumar — FMS Delhi MBA working across strategy, growth, consumer businesses, data and execution.",
  keywords: ["Sachin Kumar","FMS Delhi","strategy","growth","consumer internet","GTM","program management","business"],
  openGraph: { title:"Sachin Kumar — Strategy, Growth & Problem Solving", description:"Business, data, technology and execution.", type:"website", url:"https://sachin-profile.vercel.app" },
  twitter: { card:"summary_large_image", title:"Sachin Kumar — Strategy, Growth & Problem Solving", description:"Business, data, technology and execution." },
  robots: { index:true, follow:true },
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
