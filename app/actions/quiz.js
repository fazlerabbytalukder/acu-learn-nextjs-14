"use server";

import { getSlug } from "@/lib/convertData";
import { Quizset } from "@/model/quizset-model";
import { Quiz } from "@/model/quizzes-model";
import { createQuiz } from "@/queries/quizzes";
import mongoose from "mongoose";

export async function updateQuizSet(quizset, dataToUpdate) {
    try {
        await Quizset.findByIdAndUpdate(quizset, dataToUpdate);
    } catch (e) {
        throw new Error(e);
    }
}

export async function addQuizToQuizSet(quizSetId, quizData) {
    try {
        // console.log(quizSetId, quizData);

        const transformedQuizData = {};

        transformedQuizData["title"] = quizData["title"];
        transformedQuizData["description"] = quizData["description"];
        transformedQuizData["slug"] = getSlug(quizData["title"]);
        transformedQuizData["options"] = [
            {
                text: quizData.optionA.label,
                is_correct: quizData.optionA.isTrue,
            },
            {
                text: quizData.optionB.label,
                is_correct: quizData.optionB.isTrue,
            },
            {
                text: quizData.optionC.label,
                is_correct: quizData.optionC.isTrue,
            },
            {
                text: quizData.optionD.label,
                is_correct: quizData.optionD.isTrue,
            },
        ];

        // console.log(transformedQuizData);
        const createdQuizId = await createQuiz(transformedQuizData);
        // console.log(createdQuizId);

        const quizSet = await Quizset.findById(quizSetId);
        quizSet.quizIds.push(createdQuizId);
        quizSet.save();
    } catch (e) {
        throw new Error(e);
    }
}


export async function deleteQuiz(quizId, quizSetId) {
    try {
        const quizSet = await Quizset.findById(quizSetId);
        quizSet.quizIds.pull(new mongoose.Types.ObjectId(quizId));
        await Quiz.findByIdAndDelete(quizId);
        quizSet.save();
    } catch (err) {
        throw new Error(err);
    }
}






export async function changeQuizSetPublishState(quizSetId) {
    const quizSet = await Quizset.findById(quizSetId);
    try {
        const res = await Quizset.findByIdAndUpdate(quizSetId, { active: !quizSet.active }, { lean: true });
        return res.active;
    } catch (err) {
        throw new Error(err);
    }
}

export async function deleteQuizSet(quizSetId) {
    try {
        await Quizset.findByIdAndDelete(quizSetId);
    } catch (err) {
        throw new Error(err);
    }
}
// export async function changeCoursePublishState(courseId) {
//     const course = await Course.findById(courseId);
//     try {
//         const res = await Course.findByIdAndUpdate(courseId, { active: !course.active }, { lean: true });
//         return res.active;
//     } catch (err) {
//         throw new Error(err);
//     }
// }

// export async function deleteCourse(courseId) {
//     try {
//         await Course.findByIdAndDelete(courseId);
//     } catch (err) {
//         throw new Error(err);
//     }
// }