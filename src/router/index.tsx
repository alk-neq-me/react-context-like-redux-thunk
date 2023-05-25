import { RouteObject } from "react-router-dom";
import { Suspense } from "react"
import Layout from "../components/layout";
import Login from "../pages/Login";
import Home from "../pages/Home";
import TodoForm from "../components/Todo/TodoForm";
import TodoList from "../components/Todo/TodoList";
import ItemsList from "../components/Items/ItemsList";
import Order from "../components/Todo/Order";
import ItemsCreate from "../components/Items/ItemsForm";


const Loadable = <T extends Object>(Component: React.ComponentType<T>) => {
  return (props: T/* JSX.IntrinsicElements */) => {
    return (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Component {...(props as T)} />
      </Suspense>
    )
  }
}

const authRoutes: RouteObject = {
  path: "auth",
  children: [
    {
      path: "login",
      element: <Login />
    }
  ]
}

const normalRoutes: RouteObject = {
  path: "*",
  element: <Layout />,
  children: [
    {
      index: true,
      element: <Home />
    },

    // todo
    {
      path: "todo",
      children: [
        {
          path: "",
          element: <TodoList />
        },
        {
          path: "create",
          element: <TodoForm />
        }
      ]
    },

    // item
    {
      path: "items",
      children: [
        {
          path: "",
          element: <ItemsList />
        },
        {
          path: "create",
          element: <ItemsCreate />
        }
      ]
    },

    // order
    {
      path: "order",
      children: [
        {
          path: "",
          element: <Order />
        }
      ]
    }
  ]
}

const routes: RouteObject[] = [authRoutes, normalRoutes];
export default routes;
