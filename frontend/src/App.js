
import {Switch, Route} from 'react-router-dom'
import Home from "./components/Home"
import SignUp from './components/SignUp'
import Login from './components/Login'
import Profile from './components/Profile'
import Tests from './components/Tests'
import Homeworks from './components/Homeworks'
import Projects from './components/Projects'


//CSS
import { ChakraProvider } from "@chakra-ui/react"
import "./css/App.css"



const App = () =>{
  return (
    <ChakraProvider>
        <Switch>
            <Route exact path={["/", "/home"]} component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route  exact path='/register' component={SignUp} />
            <Route exact path='/profile' component={Profile} />
            <Route  exact path='/tests' component={Tests}/>
            <Route exact path='/homeworks' component={Homeworks}/>
            <Route exact path='/projects' component={Projects}/>
        </Switch>
    </ChakraProvider>
   
  
  )
}

export default App
