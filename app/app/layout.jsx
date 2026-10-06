import "./globals.css";

export const metadata = {
  title: "CRO Pulse — AI Conversion & E-Commerce Auditor",
  description: "أداة تدقيق وتحليل صفحات المنتجات والمتاجر بالذكاء الاصطناعي",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
