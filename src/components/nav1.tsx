import { ShoppingCart } from "lucide-react" // import { ShoppingCart, Star } from "lucide-react"

export default function Nav() {
    return (
        <header className="px-4 lg:px-6 h-[8vh] sm:h-14 flex items-center shadow-xl">
        <a className="flex items-center justify-center" href="/cart">
          <ShoppingCart className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Productos
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Categories
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </a>
        </nav>
      </header>
    )
}