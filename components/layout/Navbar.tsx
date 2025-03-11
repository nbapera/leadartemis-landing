import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/navLinks";
import { ThemeChanger } from "@/app/Theme-changer";

const Navbar = () => {
    return (
        <nav className="py-4 bg-background/30 backdrop-blur-sm">
            <div className="container flex flex-row justify-between items-center">
                <Link href="/" className="mt-1">
                    <Image 
                        src="/logo1.png" 
                        alt="Logo" 
                        width={50} 
                        height={50} 
                        priority 
                    />
                </Link>
                <ul className="md:flex flex-row justify-between gap-8 hidden">

                </ul>

                <div className="flex flex-row justify-end space-x-2">
                    <ThemeChanger />
                    <Link href="https://app.leadartemis.com">
                        <Button>
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
