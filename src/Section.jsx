import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types'
import { useRef } from 'react';

const Section = (props) => {

  const mystyle={
    background :'url(background-image.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover/center',
    backgroundPosition: 'center' 
  }

  const searchValue = useRef(null)
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    props.setvis()
    props.setsectionInput(searchValue.current.value)
  }

  return (
    <section className="section-box" style={mystyle}>
        <div className='section-position'>
           <h2>Download High Quality Images by creators</h2>
           <p>Over 2.4 million+ stock Images by our talented community</p>
            <div className='section-field'>
                <form className="section-form" onSubmit={handleSubmit}>
                    <SearchIcon color='disabled' className='search-icon' fontSize="small" />
                    <input type="search" ref={searchValue} placeholder="Search high resolution images, categories, wallpapers"/>
                </form>
            </div>
        </div>
    </section>
  )
}

Section.propTypes={
      setvis: PropTypes.func,
      setsectionInput: PropTypes.func
}

export default Section