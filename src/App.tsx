import { ThemeProvider } from "@emotion/react";
import { Button, createTheme } from "@mui/material"
import { ExpandMore } from '@mui/icons-material';
import ProductList from "./components/ProductList";
import Nav from "./components/nav1";

const scrollToCatalogo = () => {
  const element = document.getElementById('products');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#fff',
    },
  },
});

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Nav />

      <main className="flex-1">
        <section className="flex flex-col h-[92vh] items-center justify-end w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Welcome to Our Store
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Discover amazing products at unbeatable prices. Shop now and enjoy free shipping on all orders!
                </p>
              </div>
              <div className="space-x-4">
                <ThemeProvider theme={theme}>
                  <Button color="primary" variant="contained" onClick={scrollToCatalogo} sx={{ textTransform: 'none' }}>Ver catálogo</Button>
                </ThemeProvider>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <ExpandMore sx={{ fontSize: 60 }} className="text-white font-xl" />
          </div>
        </section>

        <ProductList />

        <section className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Our Newsletter</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Stay up to date with the latest products and deals. Sign up for our newsletter today.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  {/* <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Subscribe</Button> */}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        {/* <p className="text-xs text-gray-500">© 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav> */}
      </footer>
    </div>
  )
}