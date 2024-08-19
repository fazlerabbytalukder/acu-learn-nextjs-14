import xd from "@/assets/adobe.svg";
import bootstrap from "@/assets/bootstrap.svg";
import figma from "@/assets/figma.svg";
import nextjs from "@/assets/next js.svg";
import reactjs from "@/assets/react.svg";
import telwind from "@/assets/telwind.svg";
import { SectionTitle } from "@/components/section-title";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getCategories } from "@/queries/categories";
import { getCourseList } from "@/queries/courses";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CourseCard from "./courses/_components/CourseCard";


const HomePage = async () => {
    const courses = await getCourseList();
    const categories = await getCategories();

    return (
        <>
            <section className="space-y-6 pb-8 pt-6 md:pb-12 md:py-32 grainy">
                <div className="container flex justify-center items-center relative">
                    <div className="flex max-w-[50rem] lg:max-w-[64rem] flex-col items-center gap-4 text-center relative isolate">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        >
                            <div
                                style={{
                                    clipPath:
                                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                                }}
                                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            />
                        </div>
                        <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium border shadow-lg">
                            Hey, Welcome To ACU
                        </span>
                        <h1 className="font-heading text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
                            Learn, Grow, Succeed Together
                        </h1>
                        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                            “Empowering Learners and Instructors in a Unified Platform”
                        </p>
                        <div className="flex items-center gap-3 flex-wrap justify-center">
                            <Link href="/courses" className={cn(buttonVariants({ size: "lg" }))}>
                                Explore Now
                            </Link>
                            <Link
                                href="/register/instructor"
                                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
                            >
                                Become An Instructor
                            </Link>
                        </div>
                    </div>
                    <div className="image-box">
                        <div className="absolute -top-[130px] left-[80px] lg:left-[150px] transform rotate-[-30deg]">
                            <Image
                                src={nextjs}
                                alt="icon"
                                className="animate-upDowntwo hidden md:block"
                            />
                        </div>
                        <div className="absolute -top-[130px] right-[80px] lg:right-[150px] transform rotate-[30deg]">
                            <Image
                                src={reactjs}
                                alt="icon"
                                className="animate-upDown hidden md:block"
                            />
                        </div>
                        <div className="absolute top-[80px] right-[10px] lg:right-[30px] transform rotate-[15deg]">
                            <Image
                                src={bootstrap}
                                alt="icon"
                                className="animate-leftRight hidden md:block"
                            />
                        </div>
                        <div className="absolute top-[80px] left-[10px] lg:left-[30px] transform rotate-[-15deg]">
                            <Image
                                src={telwind}
                                alt="icon"
                                className="animate-leftRight hidden md:block"
                            />
                        </div>
                        <div className="absolute -bottom-[100px] left-[80px] lg:left-[150px] transform rotate-[-30deg]">
                            <Image
                                src={xd}
                                alt="icon"
                                className="animate-upDown hidden md:block"
                            />
                        </div>
                        <div className="absolute -bottom-[100px] right-[80px] lg:right-[150px] transform rotate-[30deg]">
                            <Image
                                src={figma}
                                alt="icon"
                                className="animate-upDowntwo hidden md:block"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* Categories Section */}
            <section
                id="categories"
                className="container space-y-6  py-8  md:py-12 lg:py-24"
            >
                <div className="flex items-center justify-between">
                    <SectionTitle>Categories</SectionTitle>

                    <Link
                        href={""}
                        className=" text-sm font-medium  hover:opacity-80 flex items-center gap-1"
                    >
                        Browse All <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                </div>
                <div className="mx-auto grid justify-center gap-4 grid-cols-2  md:grid-cols-3 2xl:grid-cols-4">
                    {categories.map((category) => {
                        return (
                            <Link
                                href={`/categories/${category.id}`}
                                key={category.id}
                                className="relative overflow-hidden rounded-lg border bg-background p-2 hover:scale-105 transition-all duration-500 ease-in-out"
                            >
                                <div className="flex  flex-col gap-4 items-center justify-between rounded-md p-6">
                                    <Image
                                        src={`/assets/images/categories/${category.thumbnail}`}
                                        alt={category.title}
                                        width={100}
                                        height={100}
                                    />
                                    <h3 className="font-bold">{category.title}</h3>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* Courses */}
            <section id="courses" className="container space-y-6   md:py-12 lg:py-24">
                <div className="flex items-center justify-between">
                    <SectionTitle>Courses</SectionTitle>
                    <Link
                        href={"/courses"}
                        className=" text-sm font-medium  hover:opacity-80 flex items-center gap-1"
                    >
                        Browse All <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
                    {courses.map((course) => {
                        return (
                            <CourseCard key={course.id} course={course} />
                        );
                    })}
                </div>
            </section>
        </>
    );
};
export default HomePage;
