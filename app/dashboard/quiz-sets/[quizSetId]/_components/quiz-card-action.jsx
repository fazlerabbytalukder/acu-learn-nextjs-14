"use client";

import { deleteQuiz } from "@/app/actions/quiz";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";



// import { deleteQuiz } from "@/app/actions/quiz"


export const QuizCardActions = ({ quiz, quizSetId }) => {
    const [action, setAction] = useState(null);
    const router = useRouter();
    const quizId = quiz.id;

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            switch (action) {
                case "delete-quiz": {
                    await deleteQuiz(quizId, quizSetId)
                    // console.log(quizId, quizSetId);

                    toast.success(`The quiz has been deleted`);
                    router.refresh();
                    break;
                }
                default: {
                    throw new Error("Invalid action");
                }
            }
        } catch (e) {
            toast.error(e.message);
        }
    }
    return (
        <form className="flex items-center justify-end gap-2 mt-6" onSubmit={handleSubmit}>
            <Button
                size="sm"
                className="text-destructive"
                variant="ghost"
                onClick={() => setAction("delete-quiz")}
            >
                <Trash className="w-3 mr-1" /> Delete
            </Button>
        </form>
    );
};