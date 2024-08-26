import { getCourseDetails } from "@/queries/courses";
import CourseDetails from "./_components/CourseDetails";
import CourseDetailsIntro from "./_components/CourseDetailsIntro";

const SingleCoursePage = async ({ params: { id } }) => {
    const course = await getCourseDetails(id);
    // console.log(course.category.title);

    return (
        <>
            <CourseDetailsIntro
                course={course}
            />

            <CourseDetails course={course} />

            {/* {course?.testimonials && <Testimonials testimonials={replaceMongoIdInArray(course?.testimonials)} />} */}

            {/* <RelatedCourses /> */}
        </>
    );
};
export default SingleCoursePage;
