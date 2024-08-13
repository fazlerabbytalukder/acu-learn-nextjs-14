import { Module } from "@/model/module.model";

export async function create(moduleData) {
    try {
        const modulet = await Module.create(moduleData);
        return JSON.parse(JSON.stringify(modulet));
    } catch (e) {
        throw new Error(e)
    }
}