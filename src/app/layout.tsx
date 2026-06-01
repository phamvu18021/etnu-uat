import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/tableContent.css";
import { Providers } from "./providers";
import Layout from "@/layouts";
import Script from "next/script";

const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-montserrat"
});

export const metadata: Metadata = {
  title: "Đại học Thái Nguyên - Hệ đào tạo từ xa",
  description:
    "Hệ đào tạo từ xa Đại học Thái Nguyên - Tiết kiệm thời gian và chi phí, bằng cấp được Bộ GD&ĐT công nhận.",
  verification: {
    google: "c2euFsrK3MT0GbnTAe6V_ikDOZqvLntnf6TD76sGiUI",
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={montserrat.className}>
        <noscript>
          <iframe
            title="Google Tag Manager"
            src="https://www.googletagmanager.com/ns.html?id=GTM-W57CPPPF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W57CPPPF');
          `}
        </Script>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
