// import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Topics from './Components/Topics/Topics';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import Quizzes from './Components/Quizzes/Quizzes';
import Error from './Components/Error/Error';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: ([
        {
          path: '/',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>,
          errorElement: <Error></Error>
        },
        {
          path: '/statistics',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>,
          errorElement: <Error></Error>
        },
        {
          path: '/topics/:topic',
          loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.topic}`),
          element: <Quizzes></Quizzes>,
          errorElement: <Error></Error>

        },
        {
          path: '/blog',
          element: <Blog></Blog>,
          errorElement: <Error></Error>
        }
      ])
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
