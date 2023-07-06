export async function loader({ params }) {
  const { guitarraUrl } = params

  return {}
}

function Guitarra() {
  return <div>$guitarraUrl</div>
}

export default Guitarra
