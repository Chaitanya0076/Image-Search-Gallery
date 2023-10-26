import Nav from "./Nav"
import Section from "./Section"
import './App.css'
import ImageContainer from "./ImageContainer"
import { useState, createContext } from "react"
import SearchImageContainer from "./SearchImageContainer"

export const ThemeContext = createContext(null);

function App() {
  const [inputSearch, setinputSearch] = useState("")
  const [visible, setvisible] = useState(true)
  const [mode, setmode] = useState(true)
  const [theme, settheme] = useState("light")
  console.log(inputSearch)

  const togglemode=()=>{
      setmode(curr=> !curr)
  }

  const toggleTheme = () => {
    settheme((mode ? "dark" : "light"))
    console.log(mode,theme)
  }

  const togglevis=() =>{
       setvisible(false)
  }

  const setinput = (str)=>{
    if(str){
      setinputSearch(str)
    }
  }
  
  // toggleTheme()
  console.log(inputSearch)


  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App" id={theme}>
          <Nav setnavInput={setinput} setvis={togglevis} setTheme={togglemode} Theme={mode} toggle={toggleTheme}/>
          {visible && (<Section setsectionInput={setinput} setvis={togglevis} />)}
          {visible && (<ImageContainer />)}

          <SearchImageContainer searchInput={inputSearch} />
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
