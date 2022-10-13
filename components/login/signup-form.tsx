import {useForm} from "react-hook-form";
import axios from "axios";
import {ILoginResponse} from "../../interfaces/ILoginResponse";
import {useRouter} from "next/router";


export const SignupForm = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const router = useRouter()
    const handleFormSubmit = async ({email,password}:any) => {
        // should block ui
        let baseUrl = process.env.NEXT_PUBLIC_API_URL
        let loginUrl = `${baseUrl}auth/register`
        axios.post(loginUrl,{
            email,
            password
        }).then(() => {
            router.push('/auth/login')
        }).catch(function (error) {
            console.log(error);
        });
    }
    return(<>
        <div>
            <div>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <div className='form-element'>
                        Email
                        <input
                            type='email'
                            {...register("email", { required: true })}
                        />
                    </div>
                    {errors.email && <div className='form-error'>Email Required</div>}
                    <div className='form-element'>
                        Password
                        <input
                            type='password'
                            {...register("password", { required: true })}
                        />
                    </div>
                    {errors.email && <div className='form-error'>Password Required</div>}
                    <button
                        type='submit'
                        className='btn btn-default rounded bg-blue-500 hover:bg-blue-600 text-white w-1/2'
                    >
                        <span>Sign Up</span>
                    </button>
                </form>
            </div>
        </div>
    </>)
}