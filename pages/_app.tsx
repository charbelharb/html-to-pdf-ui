import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {authenticationService} from "../services/authentication";
import {useEffect} from "react";
import {useRouter} from "next/router";
import {MainLayout} from "../Layouts/main";

function MyApp({ Component, pageProps }: AppProps) {
  const useUser = () => ({
    user: authenticationService.getUser(),
    loading: false
  })
  const { user, loading } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (!(user || loading)) {
      if(!router.route.startsWith('/auth/signup'))
        router.push('/auth/login')
    }else {
      router.push('/');
    }

  },[user, loading])
  return (
      <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
      </>
  )
}

export default MyApp
