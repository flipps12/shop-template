import { Button, createTheme, ThemeProvider } from "@mui/material"
import Nav from "../components/nav1"
import ItemCart from "../components/itemCart";

const theme = createTheme({
    palette: {
        primary: {
            main: '#3b82f6', // bg-blue-500
        },
        secondary: {
            main: '#fff',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#3b82f6', // bg-blue-500
                    color: '#fff', // text-white
                    '&:hover': {
                        backgroundColor: '#2563eb', // hover:bg-blue-600
                    },
                },
            },
        },
    },
});

export default function Cart() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Nav />
            <main className="flex items-center justify-center h-[90vh]">
                <section className="flex flex-col w-[90%] shadow-xl p-8 rounded-lg bg-white sm:max-w-[50vw]">
                    <h1 className="text-center font-semibold text-3xl mb-6">Carrito</h1>
                    <div className="w-full">
                        <ItemCart />
                        <ItemCart />
                        <ItemCart />
                    </div>
                    <ThemeProvider theme={theme} >
                        <Button color="primary" variant="contained" sx={{ textTransform: 'none' }}>Pagar con Mercado-Pago</Button>
                    </ThemeProvider>
                </section>
            </main>
        </div >
    )
}