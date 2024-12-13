import Timer from "./Components/Timer"
import RealTime from "./Components/RealTime"
import Counter from "./Components/Counter"
import {NavLink,Routes,Route} from "react-router-dom"
export default function App(){
  return(
    <div>
    <div>
 <NavLink to="./Timer">Timer</NavLink>
<NavLink to="./RealTime">RealTime</NavLink>
<NavLink to="./Counter">Counter</NavLink>
    </div>
    <Routes>
    <Route path="./" element= {<RealTime />}></Route>
    <Route path="Timer" element= {<Timer />}></Route>
    <Route path="RealTime" element= {<RealTime />}></Route>
    <Route path="Counter" element= {<Counter />}></Route>
    </Routes>
    </div>
  )
}