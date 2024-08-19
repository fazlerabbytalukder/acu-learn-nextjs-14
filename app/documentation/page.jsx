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
            <header className="z-40 bg-background/60 backdrop-blur-md fixed top-0 left-0 right-0 border-b ">
                <SessionProvider>
                    <div className="container flex h-20 items-center justify-between py-6 ">
                        <MainNav items={navLinks} />
                    </div>
                </SessionProvider>
            </header>
            <div className="mt-32 container">
                <div className="mb-5">
                    <h3 className="text-xl text-gray-900 font-bold mb-2">Documentation</h3>
                    <p className="text-base text-gray-900 font-normal">We, ACU Learn Limited, registered under the Bangladesh Companies Act (Act XVIII) of 1994 (hereafter referred to as "Company"), with the incorporation number C-165312/2020, are dedicated to protecting your privacy with regard to the protection of your personal information. To make sure we can use your services, we might get your information and occasionally share it. This notice explains our information policies and the choices you have regarding the collection and use of your information in an effort to further protect your privacy. To make sure that everyone using the website, https://ACU Learn.app/ (hence "the website") and the "ACU Learn application" (subsequently "the Application") is aware of the privacy policy that regulates their use, by entering onto the website or application, you are indicating that you have read and agree to the terms and conditions outlined in this Privacy Policy. You cannot use the Website or App unless you accept our Privacy Policy, which governs the gathering and use of your personal information. If you have any concerns or questions regarding this privacy statement, you may email our Customer Support at support@ACU Learn.app.</p>
                </div>
                <div className="mb-5">
                    <h3 className="text-xl text-gray-900 font-bold mb-2">OVERVIEW</h3>
                    <p className="text-base text-gray-900 font-normal">We take the duty to protect your online privacy seriously. We also recognize the need to protect and handle any personally identifiable information you give with us ("personal information"). Your name, address, phone number, email address, and other contact information are among the details we deem to be personal about you. To purchase a product from our website or application, you must submit the following information, but it is not limited to a phone number, bank account information, date of birth, class, school, courses, or curriculum. This Privacy Policy also applies to information gathered on users who are not listed as members, such as browsing habits, pages visited, etc. Additionally, the Website and App ask for your permission to link your ACU Learn Account to your Social Account, and if you provide such permission, the data will be taken directly from your social media account.</p>
                </div>
                <div className="mb-5">
                    <h3 className="text-xl text-gray-900 font-bold mb-2">HOW INFORMATION IS COLLECTED</h3>
                    <p className="text-base text-gray-900 font-normal">Before or at the time that we collect personal information, we shall decide why we are gathering the data. We only gather and use personal data if it is necessary for the reasons we have described and for other compatible ones unless we have the authorized personnel's permission or it is required by law. We shall only keep personal data for these uses for as long as necessary. We gather personal information in an appropriate and lawful manner with the knowledge or consent of the relevant personnel. Personal information must be relevant to the purposes for which it is used and accurate, full, and up-to-date to the degree required for those purposes.</p>
                </div>
            </div>
            <SiteFooter />
        </div>
    );
};

export default page;