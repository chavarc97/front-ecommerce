
import './login.scss'
import LoginForm from "@/components/login-form/LoginForm"


const Login = () => {
  

  return (
    <>
      <main className=" flex w-full h-screen relative ">
        <div className=" w-full flex items-center justify-center lg:w-1/2 ">
          < LoginForm />
        </div>
        <div className=" hidden lg:flex  relative items-center justify-center w-1/2 z-0">
          <div className=" w-60 h-60 bg-gradient-to-tr from-blue-500 to-sky-500 rounded-full animate-pulse"/>
          <div className="w-full h-1/2 absolute bg-white/5 backdrop-blur-lg bottom-0 " >
          </div>
        </div>
      </main>
    </>
  )
}

export default Login