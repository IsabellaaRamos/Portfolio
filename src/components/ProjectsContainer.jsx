import Foto from '../img/ptf.jpg'
import FotoSnake from '../img/snake.gif'
import FotoNetflix from '../img/netflix.gif'
import FotoSistema from '../img/sistema.gif'
import '../styles/components/projectscontainer.sass'

const descricao1 = "Criação de um projeto de controle financeiro, com inclusão, exclusão e leitura dos valores de receita e despesa para o calculo do saldo final"
const descricao2 = "Criação do Projeto Clone da Netflix,  "
const descricao3 = ""






const projetos = [
  {id: "projeto1", name:"Sistema de Controle Financeiro", img: FotoSistema, desc: descricao1, link:'https://github.com/IsabellaaRamos/sistema-financeiro' },
  {id: "projeto2", name:"Clone Netflix", img: FotoNetflix, desc: descricao2, link:'https://github.com/IsabellaaRamos/netflix'  },
  {id: "projeto3", name:"Snake Game in Python", img: FotoSnake, desc: descricao3, link:'#' },
  {id: "projeto4", name:"Carregando...", img: Foto, desc: descricao3, link:'#' },
]


const ProjectsContainer = () => {

  return (
    <section className='projects-container'>
      <h2>Projetos</h2>

      <div className='meus-projetos'>
      {projetos.map((proj) => (
        <div className='projeto-card' id={proj.id} key={proj.id}>
          <div id="projeto-info">
            <a href={proj.link} target="_blank">
              <img className='image-proj' src={proj.img} alt="projeto" />
            </a>
            
            
            
            <h3>{proj.name}</h3>
            <p>{proj.desc}</p>
        </div>
        </div>
      ))}

    </div>
      
      

    </section>
  )
}

export default ProjectsContainer

{/* <section id='projeto'>
        <a href="https://github.com/" className='btn' id='teste' >
          Ver Projetos
          
        </a> */}