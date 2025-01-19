import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/*Les importation de page*/


const router = createBrowserRouter([
    {
     element: <App />,
     children: [
       {
         path: "/",
         element: <App />,
       },
       {
         path: "/home",
         element: <App />,
       },
      ]
    },
  ]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(document.getElementById('root')!).render(
      <RouterProvider router={router}/>
)
