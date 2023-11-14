import { Outlet } from "react-router-dom"
import style from './App.module.css'

function App() {

  return (
    <div className={style.app}>
      <div className={style.logo}>
        <img className={style.svg} src="./avatar.svg" alt="" />
        <h1>Github Finder</h1>
      </div>
      <Outlet />
    </div>
  )
}

export default App
