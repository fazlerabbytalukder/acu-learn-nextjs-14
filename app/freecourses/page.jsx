import commingSoon from "@/assets/comming-soon.jpg";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import { SessionProvider } from "next-auth/react";
import Image from "next/image";

const navLinks = [
    {
        title: "About Us",
        href: "/about",
    },
    {
        title: "Courses",
        href: "/courses",
    },
    {
        title: "Free Courses",
        href: "/freecourses",
    },
    {
        title: "Documentation",
        href: "/documentation",
    },
];

const page = () => {
    return (
        <div>
            <header className="z-40 bg-background/60 backdrop-blur-md fixed top-0 left-0 right-0 border-b ">
                <SessionProvider>
                    <div className="container flex h-20 items-center justify-between py-6 ">
                        <MainNav items={navLinks} />
                    </div>
                </SessionProvider>
            </header>
            <div className="mt-32 container">
                <Image
                    src={commingSoon}
                    className="w-full h-full"
                    alt="Picture of the author"
                />
            </div>
            <SiteFooter />
        </div>
    );
};

export default page;