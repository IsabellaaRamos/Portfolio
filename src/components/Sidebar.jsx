
import Avatar from "../img/isa2.jpeg";

import '../styles/components/sidebar.sass';
import InformationContainer from "./InformationContainer";

import SocialNetworks from "./SocialNetworks";


const Sidebar = () => {
    return (
    
    <aside id="sidebar">
        <img src={Avatar} alt="Isabella Ramos" />
        <p className="title0">Olá Mundo!</p>
        <p className="title" >Engenharia da Computação 💻 👩‍💻</p>
        <p className="title2">Front-end /React /Html /Css /JavaScript /Python /Sass</p>
        
        <SocialNetworks />
        <InformationContainer />

        <section id='download1'>
            <a href="#" className="btn-dv1" id='btn1'>Download currículo</a>
        </section>
        
    </aside>


)
};

export default Sidebar;
