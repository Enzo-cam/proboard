import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <>
        <main className="container mx-auto mt-5 md:mt-20 md:flex md:justify-center">
          <div className="md:w-2/3 lg:w-2/5 max-sm:my-10">
            {/* Renderiza todos los componentes que esten dentro de este ROUTE. */}
            <Outlet />
          </div>
        </main>
    </>
  )
}

export default AuthLayout