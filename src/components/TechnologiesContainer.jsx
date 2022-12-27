import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiPython,
  DiSass
  
}  from 'react-icons/di'

// import SiTypescript from 'react-icons/ri'


import '../styles/components/technologiescontainer.sass'


const texto1= ''

const technologies = [
  {id: "html", name:"HTML5", icon: <DiHtml5 />, desc:texto1},
  {id: "css", name:"CSS3", icon: <DiCss3 />, desc:'' },
  {id: "js", name:"JavaScript", icon: <DiJsBadge />, desc:'' },
  {id: "node", name:"Node.js", icon: <DiNodejsSmall />, desc:'' },
  {id: "react", name:"React", icon: <DiReact />, desc:'' },
  {id: "python", name:"Python", icon: <DiPython />, desc:'' },
  {id: "sass", name:"Sass", icon: <DiSass />, desc:'' },
//  {id: "ts", name:"TypeScript", icon: <SiTypescript />, desc:'Programação TS' }

]

const TechnologiesContainer = () => {
  return <section className='technologies-container'>
    <h2>Tecnologias</h2>
    <div className='technologies-grid'>
      {technologies.map((tech) => (
        <div className='technology-card' id={tech.id} key={tech.id}>
        {tech.icon}
        <div className="technology-info">
          <h3>{tech.name}</h3>
          <p>{tech.desc}</p>

        </div>
        </div>
      ))}

    </div>
  </section>;
};

export default TechnologiesContainer