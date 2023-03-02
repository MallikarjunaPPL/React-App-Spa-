import Header from "./Components/Header/header"
import Projects from "./Components/Projects/project"
import SideNav from "./Components/SideNav/nav"
import './App.css';

function App() {
  return (
<div className="main_cont">
     <Header/>
     <div className="btn_cont">
      <SideNav/>
     <Projects/>
     </div>
     </div>
  );
}

export default App;
