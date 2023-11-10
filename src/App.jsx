
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router'
import { Toaster } from 'react-hot-toast'
import { getInfoToLocal } from './helper/getInfoToLocal'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userAdded } from './redux/features/auth/authSlice';

function App() {
  const user = JSON.parse(getInfoToLocal('user'));
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      dispatch(userAdded(user))
    }
  }, [])

  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  )
}

export default App
