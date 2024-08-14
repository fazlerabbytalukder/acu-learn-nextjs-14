import { replaceMongoIdInObject } from "@/lib/convertData";
import { Module } from "@/model/module.model";

export async function create(moduleData) {
    try {
        const modulet = await Module.create(moduleData);
        return JSON.parse(JSON.stringify(modulet));
    } catch (e) {
        throw new Error(e)
    }
}

export async function getModule(moduleId) {
    try {
        const modulet = await Module.findById(moduleId).lean();
        return replaceMongoIdInObject(modulet);
    } catch (e) {
        throw new Error(e)
    }
}