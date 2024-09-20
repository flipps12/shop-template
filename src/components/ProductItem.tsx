import { ThemeProvider } from "@emotion/react";
import { Button, createTheme } from "@mui/material"

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

export default function ProductItem() {
    return (
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
                    {/* <div className="flex items-center">
                      <Star className="w-4 h-4 fill-current text-yellow-500" />
                      <span className="ml-1 text-sm">4.5</span>
                    </div> */}
                </div>
                <ThemeProvider theme={dark}>
                    <Button className="w-full" color="primary" variant="contained">Añadir</Button>
                </ThemeProvider>
            </div>
        </div>
    )
}