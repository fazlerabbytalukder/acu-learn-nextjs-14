import AlertBanner from "@/components/alert-banner";
import { cn } from "@/lib/utils";
import { getQuizSetById } from "@/queries/quizzes";
import { Circle, CircleCheck } from "lucide-react";
import { AddQuizForm } from "./_components/add-quiz-form";
import { QuizCardActions } from "./_components/quiz-card-action";
import { QuizSetAction } from "./_components/quiz-set-action";
import { TitleForm } from "./_components/title-form";

const EditQuizSet = async ({ params: { quizSetId } }) => {
  const quizSet = await getQuizSetById(quizSetId);
  const quizzes = quizSet.quizIds.map(quiz => {
    return {
      id: quiz._id.toString(),
      title: quiz.title,
      options: quiz.options.map(option => {
        return {
          label: option.text,
          isTrue: option.is_correct
        }
      })
    }
  })


  return (
    <>
      {!quizSet.active && <AlertBanner
        label="This quiz Set is unpublished. It will not be visible in the quiz Set."
        variant="warning"
      />}
      <div className="p-6">
        <div className="flex items-center justify-end">
          <QuizSetAction quizSetId={quizSetId} isActive={quizSet?.status} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-6 mt-16">
          {/* Quiz List */}
          <div className="max-lg:order-2">
            <h2 className="text-xl mb-6">Quiz List</h2>
            {quizzes.length === 0 && (<AlertBanner
              label="No Quiz are in the set, add some using the form above."
              variant="warning"
              className="rounded mb-6"
            />)}
            <div className="space-y-6">
              {quizzes.map((quiz) => {
                return (
                  <div
                    key={quiz.id}
                    className=" bg-gray-50 shadow-md p-4 lg:p-6 rounded-md border"
                  >
                    <h2 className="mb-3">{quiz.title}</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {quiz.options.map((option) => {
                        return (
                          <div
                            className={cn(
                              "py-1.5 rounded-sm  text-sm flex items-center gap-1 text-gray-600"
                            )}
                            key={option.label}
                          >
                            {option.isTrue ? (
                              <CircleCheck className="size-4 text-emerald-500 " />
                            ) : (
                              <Circle className="size-4" />
                            )}

                            <p>{option.label}</p>
                          </div>
                        );
                      })}
                    </div>
                    <QuizCardActions quiz={quiz} quizSetId={quizSetId} />
                  </div>
                );
              })}
            </div>
          </div>
          {/*  */}
          <div>
            <div className="flex items-center gap-x-2">
              <h2 className="text-xl">Customize your quiz set</h2>
            </div>
            <div className="max-w-[800px]">
              <TitleForm
                initialData={{
                  title: quizSet.title,
                }}
                quizSetId={quizSet.id}
              />
            </div>

            <div className="max-w-[800px]">
              <AddQuizForm quizSetId={quizSetId} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditQuizSet;
