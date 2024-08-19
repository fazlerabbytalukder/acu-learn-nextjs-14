import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import { SessionProvider } from "next-auth/react";

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
            <div>
                <header className="z-40 bg-background/60 backdrop-blur-md fixed top-0 left-0 right-0 border-b ">
                    <SessionProvider>
                        <div className="container flex h-20 items-center justify-between py-6 ">
                            <MainNav items={navLinks} />
                        </div>
                    </SessionProvider>
                </header>
                <div className="mt-32 container">
                    <div className="mb-80">
                        <h3 className="text-3xl text-gray-900 font-bold mb-2">About us</h3>
                        <p className="text-base text-gray-900 font-normal">ACU Learn is a skill development platform focusing on live learning. We have 30,000+ users on our platform and 4500+ learners who graduated and are still learning in ACU Learn.
                            We provide skill development opportunities to university students, job holders, job seekers, and freelancers who want to learn or develop skills from the best instructors.
                            Develop your skill with the best industry experts through live learning, task-based curriculum, and track your progress through our progress tracking dashboard. Get all the resources easily and get access to one of the richest talentpools.
                            Trade licence number- 164424</p>
                    </div>
                </div>
                <SiteFooter />
            </div>
        </div>
    );
};

export default page;