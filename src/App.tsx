import { ThemeProvider } from "@emotion/react";
import { Button, createTheme } from "@mui/material"
import { ShoppingCart, Star } from "lucide-react"
import { ExpandMore } from '@mui/icons-material';

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

const dark = createTheme({
  palette: {
    primary: {
      main: '#111',
    },
    secondary: {
      main: '#fff',
    },
  },
});

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-[8vh] sm:h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <ShoppingCart className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Products
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Categories
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </a>
        </nav>
      </header>
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
                  <Button color="primary" variant="contained">Ver catálogo</Button>
                </ThemeProvider>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <ExpandMore sx={{ fontSize: 60 }} className="text-white font-xl" />
          </div>
        </section>
        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img
                  alt={`Product`}
                  className="object-cover w-full h-60"
                  height="400"
                  src={`https://guiadelempresario.com/wp-content/uploads/2020/09/Producto-scaled.jpg?height=400&width=300`}
                  style={{
                    aspectRatio: "300/400",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                  {/* <Button variant="secondary">View Product</Button> */}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Product Name</h3>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-600">$99.99</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-current text-yellow-500" />
                      <span className="ml-1 text-sm">4.5</span>
                    </div>
                  </div>
                  <ThemeProvider theme={dark}>
                    <Button className="w-full" color="primary" variant="contained">Añadir</Button>
                  </ThemeProvider>
                </div>
              </div>
            </div>
          </div>
        </section>
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