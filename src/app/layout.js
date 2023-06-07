import Footer from './components/footer/Footer';
import NavBar from './components/navBar/Navbar';

import "./styles/_global.sass";

export const metadata = {
  title: "Manuel Freire, pintura",
  generator: "Next.js",
  applicationName: "manuel-freire",
  keywords: ["Next.js", "React", "JavaScript"],
  assetPrefix:
    "https://cdn.mydomainhttps://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css.com",
};


export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body >
        <NavBar />

        <main>{children}</main>

        <Footer/>
      </body>
    </html>
  )
}
