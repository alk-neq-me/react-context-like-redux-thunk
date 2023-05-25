import { ZodType, array, date, number, object, string, infer as zodInfer } from "zod"
import { Order, OrderItem } from "../../context/Order/types"
import { createUserScheme } from "../User/RegisterUserForm"
import { createItemsScheme } from "../Items/ItemsForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


export const createOrderItemScheme: ZodType<OrderItem> = object({
  uuid: string(),
  item: createItemsScheme,
  quantity: number().min(1),
  price: number().min(100),
  total: number()
});

// type CreateOrderItemInput = zodInfer<typeof createOrderItemScheme>;


export const createOrderScheme: ZodType<Order> = object({
  user: createUserScheme,
  order: array(createOrderItemScheme),
  createdAt: date(),
  updatedAt: date()
});

type CreateOrderInput = zodInfer<typeof createItemsScheme>;


function OrderForm() {
  const method = useForm<CreateOrderInput>({
    resolver: zodResolver(createOrderScheme),
  });

  const {} = method;

  return (
    <div>OrderForm</div>
  )
}

export default OrderForm
