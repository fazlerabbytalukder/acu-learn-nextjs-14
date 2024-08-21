"use server"

import { Lesson } from "@/model/lesson.model";
import { Module } from "@/model/module.model";
import { create } from "@/queries/leaaons";
import mongoose from "mongoose";

export async function createLesson(data) {
    try {
        const title = data.get("title");
        const slug = data.get("slug");
        const moduleId = data.get("moduleId");
        const order = data.get("order");

        //   console.log(title, slug, moduleId, order);

        const createdLesson = await create({ title, slug, moduleId, order });
        //   console.log(createdLesson);

        const modulet = await Module.findById(moduleId);
        modulet.lessonIds.push(createdLesson?._id);
        modulet.save();

        return createdLesson;

    } catch (err) {
        throw new Error(err);
    }
}

export async function reOrderLesson(data) {
    try {
        await Promise.all(data.map(async (element) => {
            await Lesson.findByIdAndUpdate(element.id, { order: element.position });
        }));
    } catch (err) {
        throw new Error(err);
    }
}

export async function updateLesson(lessonId, data) {
    // console.log("**** updateLesson", lessonId, data);
    try {
        await Lesson.findByIdAndUpdate(lessonId, data);
    } catch (err) {
        throw new Error(err);
    }
}

export async function changeLessonPublishState(lessonId) {
    // console.log("changeLessonPublishState", lessonId);
    const lesson = await Lesson.findById(lessonId);
    try {
        const res = await Lesson.findByIdAndUpdate(lessonId, { active: !lesson.active }, { lean: true });
        return res.active
    } catch (err) {
        throw new Error(err);
    }
}

export async function deleteLesson(lessonId, moduleId) {
    try {
        const modulet = await Module.findById(moduleId);
        modulet.lessonIds.pull(new mongoose.Types.ObjectId(lessonId));
        await Lesson.findByIdAndDelete(lessonId);
        modulet.save();
    } catch (err) {
        throw new Error(err);
    }
}