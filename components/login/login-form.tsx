import Link from "next/link";
import {useForm} from "react-hook-form";
import axios from "axios";
import {ILoginResponse} from "../../interfaces/ILoginResponse";
import {authenticationService} from "../../services/authentication";
import {useRouter} from "next/router";


export const LoginForm = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const router = useRouter()
    const handleFormSubmit = async ({email,password}:any) => {
        // should block ui
        let baseUrl = process.env.NEXT_PUBLIC_API_URL
        let loginUrl = `${baseUrl}auth/login`
        axios.post<ILoginResponse>(loginUrl,{
            email,
            password
        }).then((resp) => {
            authenticationService.login({
                email,
                token: resp.data.token
            })
            router.push('/home')
        }).catch(function (error) {
                console.log(error);
            });
    }
    return (<>
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
                            <span>Login</span>
                        </button>
                    </form>
                 </div>
                 <div className='grid grid-cols-1'>
                     <div>
                         Not registered?
                     </div>
                     <div>
                         <button  className='btn btn-default rounded bg-blue-500 hover:bg-blue-600 text-white w-1/2'>
                             <Link href='/auth/signup'>
                                 <a>Sign up Now!</a>
                             </Link>
                         </button>

                     </div>
                 </div>
             </div>
        </>)
}