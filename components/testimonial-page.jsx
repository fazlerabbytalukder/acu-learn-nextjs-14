"use client"

import quote from "@/assets/quote.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { Button, buttonVariants } from "./ui/button";

export const TestimonialPage = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(true);
    };

    return (
        <section className="container md:pt-12 lg:pt-24 mb-12 lg:mb-24">
            <div className="flex flex-col items-center mb-10">
                <h2 className="text-center text-5xl font-bold mb-2">What ACU Graduates Are Saying?</h2>
                <p className="text-center">More than 2,000 graduates who got jobs are saying</p>
            </div>
            <div className="relative">
                <div className={cn(
                    "grid grid-cols-3 gap-5 overflow-y-hidden transition-all duration-500",
                    isExpanded ? "h-auto" : "h-[500px]"
                )}>
                    <div className="col-1 space-y-5">
                        <div className="testimonial-card rounded-lg border bg-[#F8F8FA] p-4">
                            <p>ACU MERN course is a very helpful course for skill development. They tried to solve my every problem in live class. Also the support instructors are very good. For these reasons the learning journey at MERN was extraordinary for me.</p>
                            <div className="mt-5">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-x-3">
                                        <div className="bg-[#111827] h-10 w-10 rounded-full flex justify-center items-center">
                                            <p className="uppercase text-white">FR</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Fazle Rabby</p>
                                            <small>Front End Developer batch-1</small>
                                        </div>
                                    </div>
                                    <Image
                                        src={quote}
                                        alt="quote"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card rounded-lg border bg-[#F8F8FA] p-4">
                            <p>I typed and backspaced every time how to describe you as a teacher. Ca not describe actually. You are such a great teacher. Someone from Bangladesh doing this great. Thank You.</p>
                            <div className="mt-5">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-x-3">
                                        <div className="bg-[#111827] h-10 w-10 rounded-full flex justify-center items-center">
                                            <p className="uppercase text-white">RK</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Ratul Khan</p>
                                            <small>Back End Developer batch-0</small>
                                        </div>
                                    </div>
                                    <Image
                                        src={quote}
                                        alt="quote"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card rounded-lg border bg-[#F8F8FA] p-4">
                            <p>Completed the 86 videos one by one without 0% boringness. Sumit vai, you made me inconsistent to consistent. The more I hear you more I want to know. You are unstoppable. God bless Vai.</p>
                            <div className="mt-5">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-x-3">
                                        <div className="bg-[#111827] h-10 w-10 rounded-full flex justify-center items-center">
                                            <p className="uppercase text-white">SM</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Shubhankar Majumdar</p>
                                            <small>Web Developer batch-5</small>
                                        </div>
                                    </div>
                                    <Image
                                        src={quote}
                                        alt="quote"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card rounded-lg border bg-[#F8F8FA] p-4">
                            <p>I can assure everybody: if anyone just finishs this playlist and can capture the information, he wont get stuck anywhere in react interview. I faced 3 international interviews and could answer properly. This is a gem.</p>
                            <div className="mt-5">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-x-3">
                                        <div className="bg-[#111827] h-10 w-10 rounded-full flex justify-center items-center">
                                            <p className="uppercase text-white">MS</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Md Solayman</p>
                                            <small>MERN Developer batch-5</small>
                                        </div>
                                    </div>
                                    <Image
                                        src={quote}
                                        alt="quote"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 space-y-5">
                        <div className="testimonial-card rounded-lg border bg-[#F8F8FA] p-4">
                            <p>No doubt, you are just amazing. I am highly motivated, helped from your videos. I almost stoped watching english videos these days. Your rich videos could be in different language yet you are doing them in Bangla thats so nice of you. Highly appritiable. May Allah bless you and give you the best rewards</p>
                            <div className="mt-5">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-x-3">
                                        <div className="bg-[#111827] h-10 w-10 rounded-full flex justify-center items-center">
                                            <p className="uppercase text-white">SM</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Shanewaz Maruf</p>
                                            <small>MERN Developer batch-2</small>
                                        </div>
                                    </div>
                                    <Image
                                        src={quote}
                                        alt="quote"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card rounded-lg border bg-[#F8F8FA] p-4">
                            <p>I have not said before that I like all your videos, your understanding rules are different from others. To be specific, the video that made me fall in love with your explanation is React JS in 10 minutes. It was a great video</p>
                            <div className="mt-5">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-x-3">
                                        <div className="bg-[#111827] h-10 w-10 rounded-full flex justify-center items-center">
                                            <p className="uppercase text-white">RI</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Robiul Islam</p>
                                            <small>Back End Developer batch-0</small>
                                        </div>
                                    </div>
                                    <Image
                                        src={quote}
                                        alt="quote"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card rounded-lg border bg-[#F8F8FA] p-4">
                            <p>Bro, your video and other channels videos, the process of understanding is completely different. Just mind blowing. Brother we always expect such videos from you.</p>
                            <div className="mt-5">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-x-3">
                                        <div className="bg-[#111827] h-10 w-10 rounded-full flex justify-center items-center">
                                            <p className="uppercase text-white">TI</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Tanvirul Islam</p>
                                            <small>Web Developer batch-3</small>
                                        </div>
                                    </div>
                                    <Image
                                        src={quote}
                                        alt="quote"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 space-y-5">
                        <div className="testimonial-card rounded-lg border bg-[#F8F8FA] p-4">
                            <p>The Data Science program delivered by Ostad is perfect for me, I would recommend to anyone who might be interested to take the course.</p>
                            <div className="mt-5">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-x-3">
                                        <div className="bg-[#111827] h-10 w-10 rounded-full flex justify-center items-center">
                                            <p className="uppercase text-white">AS</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold">ARM Salahuddin</p>
                                            <small>Data Science Certificate</small>
                                        </div>
                                    </div>
                                    <Image
                                        src={quote}
                                        alt="quote"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card rounded-lg border bg-[#F8F8FA] p-4">
                            <p>Even though I come from a non-CS background, I felt that understanding data science would help me advance in my profession. In order to do so, I enrolled in an Ostad Data Science course. I believed it would be tough for me to understand without prior knowledge, but after taking the Ostad Data course, I learned that it is simple to cra</p>
                            <div className="mt-5">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-x-3">
                                        <div className="bg-[#111827] h-10 w-10 rounded-full flex justify-center items-center">
                                            <p className="uppercase text-white">GH</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Galib Hasan</p>
                                            <small>Full Stack Web Development</small>
                                        </div>
                                    </div>
                                    <Image
                                        src={quote}
                                        alt="quote"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card rounded-lg border bg-[#F8F8FA] p-4">
                            <p>ACUs specialty is that they focus more on design psychology than design. Which is very useful for a student job and can differentiate himself from other ten. This industry focused practice has helped me a lot professionally.</p>
                            <div className="mt-5">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-x-3">
                                        <div className="bg-[#111827] h-10 w-10 rounded-full flex justify-center items-center">
                                            <p className="uppercase text-white">GH</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Shafayet Rana</p>
                                            <small>UX/UI Batch 6</small>
                                        </div>
                                    </div>
                                    <Image
                                        src={quote}
                                        alt="quote"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card rounded-lg border bg-[#F8F8FA] p-4">
                            <p>This course is one of the best course in my life. Be it the learning experience or the support of the master team, everything was amazing. Taught from the very basics to the details so nicely, I got the chance to learn a lot.</p>
                            <div className="mt-5">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-x-3">
                                        <div className="bg-[#111827] h-10 w-10 rounded-full flex justify-center items-center">
                                            <p className="uppercase text-white">AH</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Abu Hasan</p>
                                            <small>Front End Developer Batch 6</small>
                                        </div>
                                    </div>
                                    <Image
                                        src={quote}
                                        alt="quote"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {!isExpanded && (
                    <div className="absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-32 pb-8">
                        <Button className={cn(buttonVariants({ size: "lg" }))} onClick={handleExpand}>
                            More Review
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
};