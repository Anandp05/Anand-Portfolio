import { BrowserRouter } from "react-router-dom"
import {About,Contact,Experience,Feedbacks,Hero,Navbar,StarsCanvas,Tech,Works} from './components';


const App=()=> {


  return (
<BrowserRouter>
 <div className="realative z-0 bg-primary">
   <div className="bg-hero-pattern bg-cover">
       <Navbar/>
       <Hero/>
   </div>
 </div>
 <About/>
 <Experience/>
 <Tech/>
 <Works/>
 <Feedbacks/>
 <div className="relative z-0">
 <Contact/>
 <StarsCanvas/>
 
 </div>
</BrowserRouter>

  )
}

export default App
