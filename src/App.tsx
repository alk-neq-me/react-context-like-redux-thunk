import { useRoutes } from "react-router-dom";
import ContextProvider from "./context/contextProvider"
import routes from "./router";


function App() {
  const content = useRoutes(routes);

  return (
    <>
      <ContextProvider>
        {content}
      </ContextProvider>
    </>
  )
}

export default App
