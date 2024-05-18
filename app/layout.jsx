import '@public/styles/globals.scss'
import { ThemeProvider } from '@context/ThemeContext';

export const metadata = {
  title: "Sb Ware",
  description: "Subscription Based Software Solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="app">
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  )
}
