export async function getGuitarras(){
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`
  )
  return resultado = await respuesta.json()
  
}