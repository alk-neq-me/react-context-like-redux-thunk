import { TypeOf, ZodType, boolean, object, string } from "zod";
import { Todo } from "../../context/todo/types";
import { useStateContext } from "../../context/contextProvider";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTodo } from "../../context/todo/todoAction";
import { useEffect } from "react";


const createTodoScheme: ZodType<Todo> = object({
  uuid: string(),
  title: string({ required_error: "title must be reqired" }).min(5).max(25),
  description: string({ required_error: "title must be reqired" }),
  isCompleted: boolean()
});

type CreateTodoInput = TypeOf<typeof createTodoScheme>;


function TodoForm() {
  const { dispatch } = useStateContext();

  const method = useForm<CreateTodoInput>({
    resolver: zodResolver(createTodoScheme),
    defaultValues: {
      uuid: crypto.randomUUID(),
      isCompleted: false
    }
  });

  const { formState: {errors, isSubmitSuccessful} } = method;

  useEffect(() => {
    method.reset();
  }, [isSubmitSuccessful])

  console.log(errors)

  const onSubmit: SubmitHandler<CreateTodoInput> = (value) => {
    console.log(value)
    dispatch(createTodo({ ...value, uuid: crypto.randomUUID() }));
  }

  return (
    <div className="flex">
      <form onSubmit={method.handleSubmit(onSubmit)} className="flex flex-col bg-red-50 gap-2 items-start">
        <input {...method.register("title")} placeholder="title" />
        <input {...method.register("description")} placeholder="description" />
        <input type="checkbox" {...method.register("isCompleted")} />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default TodoForm;
