
import ProductItem from "./ProductItem";

export default function ProductList() {
    return (
        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-gray-100">
            <div className="container px-4 md:px-6">
                <h2 id="products" className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Todos los productos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <ProductItem />
                </div>
            </div>
        </section>
    )
}