import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

/*Les importation de page*/
import HomePage from './pages/HomePage.tsx';

const router = createBrowserRouter([
    {
     element: <App />,
     children: [
       {
         path: "/",
         element: <HomePage />,
       },
       {
         path: "/qui-suis-je",
         element: <h1>Page Qui suis-je</h1>,
       },
       {
         path: "/mariage",
         element: <h1>Page Mariage</h1>,
       },
       {
         path: "/portraits",
         element: <h1>Page Portraits</h1>,
       },
       {
         path: "/tarifs",
         element: <h1>Page Tarifs</h1>,
       },
      ]
    },
  ]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(document.getElementById('root')!).render(
     <HelmetProvider>
       <RouterProvider router={router}/>
     </HelmetProvider>
)
