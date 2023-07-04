// Router settings.

/*----------------------------------------------------
 *
 * Visit
 * https://reactrouter.com/en/main/start/tutorial
 * for more details.
 *
 * ---------------------------------------------------*/

import { createBrowserRouter /*Navigate*/ } from "react-router-dom";

import HomePage from "./pages/home";
// import AboutPage from './pages/about';
// import CertificationsPage from './pages/certifications';
// import ContactPage from './pages/contact';
// import GalleryPage from './pages/gallery';
// import ProjectsPage from './pages/projects';
// import ProjectDetailsPage from './pages/project-details';

import ErrorPage from "./pages/error-page";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // Error page.
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      // { path: '/about', element: <AboutPage /> },
      // { path: '/projects', element: <ProjectsPage /> },
      // { path: '/gallery', element: <GalleryPage /> },
      // { path: '/contact', element: <ContactPage /> },
      // { path: 'about/certifications', element: <CertificationsPage /> },

      // Nested routes - unique id - dynamic routes.
      // {
      //     path: '/projects/:id',
      //     element: <ProjectDetailsPage />,
      // },

      // Navigate to non existents pages.
      // {
      //     path: 'portfolio', // For exemple, the portfolio path does not exist or for some reason was chaged.
      //     element: <Navigate to='/projects' />, // So here we define the new path that the user will be landing.
      // },
    ],
  },
]);
