import { useRouter } from "next/router";
//import Navbar from "../navbar";
import dynamic from "next/dynamic";
import { Roboto, Open_Sans } from "next/font/google";

const disableNavbar = ['/auth/login', '/auth/register', '/404', '/maintenance'];

// Dynamic imports
const Navbar = dynamic(() => import("../navbar"), { ssr: false });
const TampilanProduk = dynamic(() => import("../../../views/product"), { ssr: false, loading: () => <p>Loading produk...</p> });

type AppShellProps = {
    children: React.ReactNode;
}

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
});

const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

const AppShell = (props:AppShellProps) => {
    const { children } = props;
    const { pathname } = useRouter();
    return (
        <main>
            {!disableNavbar.includes(pathname) && (
                <div className={roboto.className}>
                <Navbar />
                </div>
            )}
            <div className={openSans.className}>
                {children}
            </div>
        </main>     
    );
};

export default AppShell;