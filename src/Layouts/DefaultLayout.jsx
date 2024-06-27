import { Navigate, Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer'
import { useStateContext } from '../Context/context'

const DefaultLayout = () => {
  const { user, token } = useStateContext();

  return (
    <div>
         <Navbar />
         <Outlet />
         <Footer />
    </div>
  )
}

export default DefaultLayout