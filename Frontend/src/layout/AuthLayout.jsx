import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <>
        <div>AuthLayout</div>
        {/* Renderiza todos los componentes que esten dentro de este ROUTE. */}
        <Outlet />
    </>
  )
}

export default AuthLayout