
import { useEffect, useState } from "react"
import {baseUrl} from '../constants/Movies'
import {Movie} from '../typescript'
import Image  from "next/image"
interface Props{
    netflixOriginals: Movie[]
}
function Banner({netflixOriginals}: Props ){

    const [movie, setMovie] = useState <Movie | null >(null)
    //  to get a random movie everytime we refresh
    useEffect(() => {
setMovie(
    // to generate a random movie
    netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
)
    }, [netflixOriginals])

    console.log(netflixOriginals)
  return (
    <div>

        <div className="absolute top-0 left-0 h-[95vh] w-screen">
        <Image
          src='https://image.tmdb.org/t/p/original/'     
          layout="fill"
       />
      
        </div>
    </div>
  )
}

export default Banner