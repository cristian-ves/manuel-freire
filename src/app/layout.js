import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/Navbar";
import WhatsappButton from "./components/whatsappButton/WhatsappButton";

import "./styles/_global.sass";

export const metadata = {
  title: "Manuel Freire | Pintura",
  generator: "Next.js",
  applicationName: "manuel-freire",
  keywords: ["Next.js", "React", "JavaScript"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <NavBar />

        <main>{children}</main>

        <WhatsappButton />

        <Footer />
      </body>
    </html>
  );
}
