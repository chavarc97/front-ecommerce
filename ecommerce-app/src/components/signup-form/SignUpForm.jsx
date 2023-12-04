import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { registerUserService } from '@/services/userServices'

const SignUpForm = () => {
    // Usamos el hoook useNavigate para navegar hacia login
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    // Función que envia datos a la API
    const onSubmit = async (data) => {
        try {
            const response = await registerUserService(data)
            if (response.status === 201) {
                console.log('Usuario creado exitosamente')
                navigate('/login')
            }
        } catch (error) {
            console.log('Ocurrio un error en Signup', error.message)
        }
    }


    return (
        <main>
            <h1 className=" text-5xl font-semibold">Welcome</h1>
            <p className=" font-medium text-lg text-gray-500 mt-4">Welcome! please sign up 🚀</p>
            <form action="" className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-2">
                    <label htmlFor="first_name" className=" text-lg font-medium">First Name</label>
                    <input type="text"
                        className=" w-full mt-1 border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                        id='first_name'
                        name='first_name'
                        placeholder="John"
                        {...register('first_name', { required: true })}
                    />
                </div >
                {errors.first_name && <span>This field is required 🛑</span>}

                <div className="mt-2">
                    <label htmlFor="last_name" className="text-lg font-medium"> Last Name</label>
                    <input type="text"
                        className=" w-full mt-1 border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                        id='last_name'
                        name='last_name'
                        placeholder="Doe"
                        {...register('last_name', { required: true})}
                    />
                </div>
                {errors.last_name && <span>This field is required 🛑</span>}

                <div>
                    <label htmlFor="gender" className=" text-lg font-medium">
                        Gender
                    </label>
                    <select
                        className=" w-full mt-1 border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 text-gray-400"
                        name="gender"
                        id="gender"
                        {...register('gender')}
                    >
                        <option value="">Choose..</option>
                        <option value="M">Male</option>
                        <option value="">Female</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="email" className=" text-lg font-medium">
                        Email
                    </label>
                    <input
                        className=" w-full mt-1 border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                        type="email"
                        id='email'
                        name='email'
                        placeholder="name@example.com"
                        {...register('email', { required: true })}
                    />
                </div>
                {errors.email && <span>This field is required 🛑</span>}

                <div>
                    <label htmlFor="password" className=" text-lg font-medium">
                        Password
                    </label>
                    <input
                        className=" w-full mt-1 border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                        type="password"
                        id='password'
                        name='password'
                        placeholder="Password"
                        {...register('password', { required: true })}
                    />
                </div>
                {errors.password && <span>This field is required 🛑</span>}

                <div className="mt-8 text-center">
                    <button type="submit" className="bg-gradient-to-tr from-blue-500 to-sky-500 w-full rounded-md px-4 py-2 text-white">
                        Login
                    </button>
                </div>
            </form>
        </main>
    )
}

export default SignUpForm