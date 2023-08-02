import { useLoaderData } from "@remix-run/react"
import { getPost } from "~/models/post.server"
import { formatearFecha } from "~/utils/helpers"
import styles from "~/styles/blog.css"

export function meta({ data }) {
  return [
    { title: `GuitarLA - ${data.data[0].attributes.nombre}` },
    {
      description: `Guitarras, venta de guitarras, guitarra${data.data[0].attributes.nombre}`
      },
  ]
}

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export async function loader({ params }) {
  const { postUrl } = params
  const post = await getPost(postUrl)
  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Entrada de blog no encontrada",
    })
  }
  return post
}

function Post() {
  const post = useLoaderData()

  const { titulo, contenido, imagen, publishedAt } = post.data[0].attributes

  return (
    <article className='contenedor post mt-3'>
      <img
        className='imagen'
        src={imagen.data.attributes.url}
        alt={`Imagen blog ${titulo}`}
      />
      <div className='contenido'>
        <h3>{titulo}</h3>
        <p className='fecha'>{formatearFecha(publishedAt)}</p>
        <p className='texto'>{contenido}</p>
      </div>
    </article>
  )
}

export default Post
