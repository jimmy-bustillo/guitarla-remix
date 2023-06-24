import imagen from "../../public/img/nosotros.jpg"
import styles from "~/styles/nosotros.css"

export function meta() {
  return (
    [
      {title: "GuitarLA - Sobre Nosotros"},
      {desscription: 'Ventas de guitarras, blog de musica'}
    ]
  )
    
  
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className='contenedor nosotros'>
      <h2 className='heading'>Nosotros</h2>
      <div className='contenido'>
        <img src={imagen} alt='imagen sobre nosotros' />
        <div>
          <p>
            Cras feugiat sit amet augue id fermentum. Pellentesque gravida ac
            odio id volutpat. Phasellus non enim enim. Vivamus sollicitudin erat
            luctus elit ornare egestas. Suspendisse ac enim pretium, pulvinar
            nisi at, malesuada massa. Nam nec sollicitudin tortor. In hac
            habitasse platea dictumst. Duis libero diam, tempus quis metus eu,
            ultricies viverra erat. Maecenas accumsan, eros fermentum auctor
            ultricies, tortor nunc aliquet dui, nec consequat turpis tortor at
            velit. Cras vitae leo sed lorem dignissim ultricies. Praesent non
            lectus at sapien volutpat hendrerit. Duis id consequat mauris, ac
            feugiat lorem. Pellentesque a lacus suscipit, convallis mauris et,
            scelerisque felis. Vivamus sollicitudin, tortor quis laoreet
            vehicula, nunc diam ullamcorper nisl, eget hendrerit mauris augue et
            tortor.
          </p>
          <p>
            Cras feugiat sit amet augue id fermentum. Pellentesque gravida ac
            odio id volutpat. Phasellus non enim enim. Vivamus sollicitudin erat
            luctus elit ornare egestas. Suspendisse ac enim pretium, pulvinar
            nisi at, malesuada massa. Nam nec sollicitudin tortor. In hac
            habitasse platea dictumst. Duis libero diam, tempus quis metus eu,
            ultricies viverra erat. Maecenas accumsan, eros fermentum auctor
            ultricies, tortor nunc aliquet dui, nec consequat turpis tortor at
            velit. Cras vitae leo sed lorem dignissim ultricies. Praesent non
            lectus at sapien volutpat hendrerit. Duis id consequat mauris, ac
            feugiat lorem. Pellentesque a lacus suscipit, convallis mauris et,
            scelerisque felis. Vivamus sollicitudin, tortor quis laoreet
            vehicula, nunc diam ullamcorper nisl, eget hendrerit mauris augue et
            tortor.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros
