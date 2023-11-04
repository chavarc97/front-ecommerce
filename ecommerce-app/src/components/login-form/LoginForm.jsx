import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { loginUserService } from "@/services/userService"
import { useAuthContext } from '@/hooks/useAuthContext'


const LoginForm = () => {
  const navigate = useNavigate()
  const { login } = useAuthContext()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await loginUserService(data)
      if (response.status === 200) {
        // console.log('Usuario ha iniciado sesión exitosamente', response.data.token)
        login(response.data.token)
        navigate('/')
      }
    } catch (error) {
      console.log('Ocurrio un error en Login', error.message)
    }
  }

  return (
    <div>
      <h1 className=" text-5xl font-semibold">Welcome Back</h1>
      <p className=" font-medium text-lg text-gray-500 mt-4">Welcome back! Please sign in</p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
        <div>
          <label className=" text-lg font-medium"> Email</label>
          <input type="email"
            className=" w-full mt-1 border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
            {...register('email', { required: true })}
          />
        </div>
        {errors.email && <span className=" font-medium text-md text-red-700 mt-4">This field is required</span>}
        <div className="mt-5">
          <label className=" text-lg font-medium"> Password</label>
          <input type="password"
            className=" w-full mt-1 border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
          />
        </div>
        {errors.password && <span className=" font-medium text-md text-red-700 mt-4">This field is required</span>}
        <div className="mt-8 text-center">
          <button type="submit" className="bg-gradient-to-tr from-blue-500 to-sky-500 w-full rounded-md px-4 py-2 text-white">
            Login
          </button>
        </div>
        <div className="mt-2 text-center">
          <button className="bg-gradient-to-tr from-slate-600 to-gray-600 w-full rounded-md px-4 py-2 text-white">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm