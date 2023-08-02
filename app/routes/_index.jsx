import { useLoaderData } from "@remix-run/react"
import { getGuitarras } from "~/models/guitarras.server"
import { getPosts } from "~/models/posts.server"
import ListadoGuitarras from '~/components/listado-guitarras'
import styleGuitarras from '~/styles/guitarras.css'

export function meta() {}

export function links() {
  return[
    {
      rel: 'stylesheet',
      href: styleGuitarras
    }
  ]
}

export async function loader() {
  const [guitarras, posts] = await Promise.all([getGuitarras(), getPosts()])

  return {
    guitarras: guitarras.data,
    posts: posts.data,
  }
}

function Index() {
  const { guitarras, posts } = useLoaderData()
  return (
    <>
      <main className='contenedor'>
        <ListadoGuitarras 
          guitarras={guitarras}
        />
      </main>
    </>
  )
}

export default Index
