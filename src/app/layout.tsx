import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter, K2D, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const k2d = K2D({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JCDev - Création de Sites Web Modernes pour Entrepreneurs et PME",
  description:
    "JCDev propose des solutions sur mesure pour la création de sites web one-page, vitrine, e-commerce et landing pages. Améliorez votre visibilité en ligne avec des sites performants et sécurisés.",
  keywords: [
    "Création de site web",
    "Développement web",
    "Site vitrine",
    "Site e-commerce",
    "Landing page",
    "SEO",
    "Optimisation pour les moteurs de recherche",
    "Design web",
    "Responsive design",
    "Maintenance de site web",
    "Hébergement web",
    "JCDev",
  ],
  openGraph: {
    title: "JCDev - Création de Sites Web Modernes pour Entrepreneurs et PME",
    description:
      "JCDev propose des solutions sur mesure pour la création de sites web one-page, vitrine, e-commerce et landing pages. Améliorez votre visibilité en ligne avec des sites performants et sécurisés.",
    url: "https://jsncndl.github.io",
    images: ["https://jsncndl.github.io/opengraph-image.jpg"],
    siteName: "JCDev",
  },
  /*      themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff" },
    { media: "(prefers-color-scheme: dark)", color: "#000" },
  ], */
  applicationName: "JCDev",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${montserrat.className}`}>
        <ThemeProvider attribute="class">
          {/* <svg
            version="1.1"
            viewBox="0 0 600 600"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="absolute z-[-10]"
          >
            <defs>
              <linearGradient
                id="linearGradient2"
                x1="48.083"
                x2="78.106"
                y1="40.209"
                y2="51.486"
                gradientTransform="matrix(1.1046 -.29598 .29598 1.1046 -21.618 35.992)"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0798f2" offset=".13093" />
                <stop stopColor="#971ec1" offset=".34199" />
                <stop stopColor="#0798f2" offset=".75056" />
              </linearGradient>
              <filter
                id="filter3"
                x="-.38949"
                y="-.40335"
                width="1.779"
                height="1.8067"
                colorInterpolationFilters="sRGB"
              >
                <feGaussianBlur stdDeviation="15" />
              </filter>
            </defs>
            <path
              d="m30.298 70.489 24.782-38.96 11.224 34.801 13.594 3.4157c-0.22462 4.8527-0.44923 9.7055-0.67384 14.558 7.6291 5.4108 15.442 10.591 22.77 16.408-3.1224 0.27794-7.8128-0.70938-11.501-0.94032-6.5008-0.70162-12.999-1.4232-19.497-2.1527l-6.576-15.883-15.22 3.686-5.9354-12.395z"
              fill="url(#linearGradient2)"
              filter="url(#filter3)"
            />
          </svg> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
