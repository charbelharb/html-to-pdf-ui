import type { NextPage } from 'next'
import {useRouter} from "next/router";
import {useEffect} from "react";
import {authenticationService} from "../services/authentication";

const Home: NextPage = () => {
  let router = useRouter()
  useEffect(() => {
    let user = authenticationService.getUser()
    if(user){
      router.push('/home')
    }
  })
  return (
   <>
   </>
  )
}

export default Home
