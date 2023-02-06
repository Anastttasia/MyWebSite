import Welcome from '../Welcome/Welcome';
import AboutMe from '../AboutMe/AboutMe';
import Certificate from '../Certificate/Certificate';
import HardSkills from '../HardSkills/HardSkills';
import Portfolio from '../Portfolio/Portfolio'


const MainContent = () => {
    return (
        <div>
            <Welcome />
            <AboutMe />
            <Certificate />
            <HardSkills />
            {/* <Portfolio /> */}
        </div>
    )
}

export default MainContent;
