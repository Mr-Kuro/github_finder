import { Link, Outlet } from "react-router-dom"
import style from './App.module.css'

function App() {

  return (
    <div className={style.app}>
      <div className={style.title}>
        <img className={style.svg} src="./avatar.svg" alt="logo do site" />
        <Link to="/"><h1>Github Finder</h1></Link>
        
      </div>
      <Outlet />
    </div>
  )
}

export default App
