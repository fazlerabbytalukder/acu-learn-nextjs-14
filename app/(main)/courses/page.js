import { getCourseList } from "@/queries/courses";
import CourseCard from "./_components/CourseCard";




const SIZE_FILTERS = {
    id: "size",
    name: "Size",
    options: [
        { value: "S", label: "S" },
        { value: "M", label: "M" },
        { value: "L", label: "L" },
    ],
};



const CoursesPage = async () => {
    const courses = await getCourseList();

    return (
        <section
            id="courses"
            className="container space-y-6   dark:bg-transparent py-6"
        >
            {/* <h2 className="text-xl md:text-2xl font-medium">All Courses</h2> */}
            {/* header */}
            <div className="flex items-baseline justify-between pb-6 flex-col gap-4 lg:flex-row">
                {/* <SearchCourse /> */}

                <div className="flex items-center justify-end gap-2 max-lg:w-full">
                    {/* <FilterCourseMobile /> */}
                </div>
            </div>
            {/* header ends */}
            <section className="pb-24">
                <div className="">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {courses.map((course) => {
                            return (
                                <CourseCard key={course.id} course={course} />
                            );
                        })}
                    </div>
                </div>
            </section>
        </section>
    );
};
export default CoursesPage;
