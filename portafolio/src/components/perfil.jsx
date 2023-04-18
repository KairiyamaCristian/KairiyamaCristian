import '../App.css'

function Perfil()
    {
    return(
        <>
        <section >
        <article className='perfil-container'>
          <img className="perfil-img" src="https://unavatar.io/midudev" alt="el avatar de midudev" />
          <div>
            <strong>
              +10
            </strong>
            <span>
              Proyectos
            </span>
          </div>
          <div>
            <strong>
              +20
            </strong>
            <span>
              Certificados
            </span>
          </div>
          <div>
            <strong>
              +50
            </strong>
            <span>
              Tecnologias
            </span>
          </div>
        </article>
        <article>
          <strong>descripcion general</strong> 
          <span>blablablbblbalblablablablablablabla</span>
        </article>        
      </section>
        </>
    )
    }

export default Perfil
