export async function getPosts() {
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)

  return (resultado = await respuesta.json())
}
