import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import * as sessionActions from './store/session';
import Splash from './components/Splash';
import SpotDetailsPage from './components/SpotDetails';
import CreateSpot from './components/CreateSpot';

function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => {
      setIsLoaded(true)
    });
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && <Outlet />}
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Splash />
      },
      {
        path: '/spots/:id',
        element: <SpotDetailsPage />
      },
      {
        path: '/spots/new',
        element: <CreateSpot />
      },
      {
        path: 'spots/manage'
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;