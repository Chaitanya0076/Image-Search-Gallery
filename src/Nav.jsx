
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types'
import WordList from "../WordList.json"
import { useState, useRef } from 'react';



const Nav = (props) => {

    const [val, setVal] = useState('');
    const [searchList, setsearchList] = useState([]);
    const [res, setres] = useState(true)
    
    const searchInput = useRef(null)

   
    

    const SearchResults = (value) => {
        const results = WordList.filter((user) => {
            return value && user && user.word && user.word.toLowerCase().includes(value)
        })
        setsearchList(results)
    }

    const outcomes = searchList.map((result, id) => {
        return <div className='search-result-items' onClick={(e)=> {handleSelection(e.target.innerText)}} key={id}>{result.word}</div>
    })


    const handleChange = (valData) => {
        setVal(valData)
        SearchResults(valData)
    }
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setres(false)
        props.setvis()
        props.setnavInput(searchInput.current.value)
    }
    
    const handleMode = () => {
        props.setTheme()
        props.toggle()
    }
    
    const handleSelection = (selection) =>{
        searchInput.current.value = selection
        searchInput.current.innerText = selection
        setres(false)
        props.setvis()
        props.setnavInput(selection)
    }

    const toggleBtnIcon = document.querySelector('.toggle-btn i');
    const dropDownMenu = document.querySelector('.drop-down');

        const handletoggle =() =>{
            console.log("toggle");
            dropDownMenu.classList.toggle('open');
            const isOpen = dropDownMenu.classList.contains('open');
            
            toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
        }

    return (
        <>
            <nav className='nav-bar'>
                <h1 className="nav-title">Image Gallery</h1>
                <form className='search-form' onSubmit={handleSubmit}>
                    <SearchIcon color='disabled' className='search-icon' fontSize="small" />
                    <input type="search" placeholder="Search Images here" value={val} ref={searchInput} onChange={(e) => { handleChange(e.target.value) }} />
                </form>

                <div className='nav-cat-items'>
                    <h5 className='nav-cat'>Explore</h5>
                    <h5 className='nav-cat'>Collection</h5>
                    <h5 className='nav-cat'>Community</h5>
                </div>
                <div className='theme-setter'>
                <h5 className='dark-mode' >{props.Theme ? "Dark Mode" : "Light Mode"}</h5>
                <label className="switch">
                    <input type="checkbox" />
                    <span onClick={handleMode} className="slider round"></span>
                </label>
                </div>
                <div className="toggle-btn" onClick={handletoggle}><i className="fa-solid fa-bars"></i></div>
            </nav>
            <div className='drop-down'>
                    <h5 className='nav-cat'>Explore</h5>
                    <h5 className='nav-cat'>Collection</h5>
                    <h5 className='nav-cat'>Community</h5>
            </div>
            {res && (<div className='search-form-div'>
                {outcomes}
            </div>)}

        </>
    )
}

Nav.propTypes={
    setvis: PropTypes.func,
    setnavInput: PropTypes.func,
    setTheme: PropTypes.func,
    toggle: PropTypes.func,
    Theme: PropTypes.bool
}

export default Nav