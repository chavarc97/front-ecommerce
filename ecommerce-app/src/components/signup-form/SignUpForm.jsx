

const SignUpForm = () => {
    return (
        <div>
            <h1 className=" text-5xl font-semibold">Welcome</h1>
            <p className=" font-medium text-lg text-gray-500 mt-4">Welcome! please sign up 🚀</p>
            <form action="" className="mt-5">
                <div className="mt-2">
                    <label htmlFor="first_name" className=" text-lg font-medium">First Name</label>
                    <input type="text"
                        id='first_name'
                        name='first_name'
                        className=" w-full mt-1 border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                        placeholder="John"
                    />
                </div >
                <div className="mt-2">
                    <label htmlFor="last_name" className="text-lg font-medium"> Last Name</label>
                    <input type="text"
                        id='last_name'
                        name='last_name'
                        className=" w-full mt-1 border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                        placeholder="Doe"
                    />
                </div>
                <div>
                    <label htmlFor="gender" className=" text-lg font-medium">
                        Gender
                    </label>
                    <select
                        className=" w-full mt-1 border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 text-gray-400"
                        name="gender"
                        id="gender"
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
                        type="email"
                        id='email'
                        name='email'
                        className=" w-full mt-1 border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                        placeholder="name@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="password" className=" text-lg font-medium">
                        Password
                    </label>
                    <input
                        type="password"
                        id='password'
                        name='password'
                        className=" w-full mt-1 border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                        placeholder="Password"
                    />
                </div>
                <div className="mt-8 text-center">
                    <button type="submit" className="bg-gradient-to-tr from-blue-500 to-sky-500 w-full rounded-md px-4 py-2 text-white">
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm