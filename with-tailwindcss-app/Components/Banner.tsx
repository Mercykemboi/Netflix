import Image  from "next/image"
import { useEffect, useState } from "react"
import {Movie} from '../typescript'
interface Props{
    netflixOriginals: Movie[]
}
function Banner({netflixOriginals}: Props ){

    const [movie, setMovie] = useState <Movie | null >(null)
    useEffect(() => {
setMovie(
    netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
)
    }, [netflixOriginals])

    console.log(netflixOriginals)
  return (
    <div>

        <div>
            {/* <Image/> */}
        </div>
    </div>
  )
}

export default Banner