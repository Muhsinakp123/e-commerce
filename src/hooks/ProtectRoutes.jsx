import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getFromLocalStorage } from "../utils/helpers"

const ProtectRoutes = () => {


  const navigator = useNavigate()

  useEffect(()=> {
    const token = getFromLocalStorage('access_token')

    // console.log(token, 'toke')
    if (!token) {
      navigator('login')
    }

  }, [])

  return (
    <></>
  )
}

export default ProtectRoutes