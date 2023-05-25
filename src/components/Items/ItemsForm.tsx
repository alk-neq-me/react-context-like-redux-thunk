import { TypeOf, ZodType, date, number, object, string } from "zod";
import { Item } from "../../context/Items/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useStateContext } from "../../context/contextProvider";


export const createItemsScheme: ZodType<Item> = object({
  uuid: string(),
  label: string().min(5),
  code: string().min(5).max(7),
  price: number(),
  createdAt: date().default(new Date()),
  updatedAt: date().default(new Date())
})

type CreateItemInput = TypeOf<typeof createItemsScheme>;


function ItemsCreate() {
  // const { dispatch } = useStateContext();

  const method = useForm<CreateItemInput>({
    resolver: zodResolver(createItemsScheme),
    defaultValues: {
      uuid: crypto.randomUUID(),
      price: 0
    }
  });


  const {} = method;

  const onsubmit: SubmitHandler<CreateItemInput> = (value) => {
    console.log(value)
  }

  console.log(method.formState.errors)

  return (
    <div>
      <form onSubmit={method.handleSubmit(onsubmit)}>
        <input {...method.register("label")} />
        <input {...method.register("code")} />
        <input type="number" inputMode="decimal" {...method.register("price", { valueAsNumber: true })} />

        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default ItemsCreate;
