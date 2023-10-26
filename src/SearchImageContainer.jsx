import axios from "axios"
import { useState } from "react";
import PropTypes from 'prop-types'
import Avatar from '@mui/material/Avatar';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import  './App.css'


const API_KEY = 'Y8viyfJkSHi1uXqzB8Ma96juWOj_gn31m7yyEvBnsYc';
const imagePerPage = 20;

const SearchImageContainer = ({ searchInput }) => {

    const [images, setImages] = useState([]);
    // const [totalPages, settotalPages] = useState(0);
    
    // useEffect(()=>{
    //      const getImages = async()=>{

    //      }
    //     getImages();
    // },[])


    const fetchImages = async () => {
        try {
            const result = await axios.get(`https://api.unsplash.com/search/photos?query=${searchInput}&page=1&per_page=${imagePerPage}&client_id=${API_KEY}`)
            setImages(result.data.results)
            // settotalPages(result.data.total_pages)
        } catch (error) {
            console.log(error)
        }
    }

    if (searchInput) {
        fetchImages()
    }
    
    // const downloadImg = async (imgSrc,forceDownload = false)=>{
    //     if(!forceDownload){
    //         link =imgSrc
    //     }
    //      const imageBlob = await fetch(imgSrc)
    //            .then((res)=>res.arrayBuffer())
    //            .then((buffer)=> new Blob([buffer],{type: "image/jpeg"}))

    //     console.log(imageBlob)

    //      link = URL.createObjectURL(imageBlob)
    //      console.log(link)
    // }


    return (
        <>
        {searchInput && <h1 className="search-title">Showing the Images of <span className="name">{`"${searchInput}"`}</span></h1>}
        <div className="image-container">{
            images.map(item =>{  
            return (
                    <div className='image-box' key={item.id}>
                        <div className="image">
                            <img src={item.urls.small} alt={item.alt_description} style={{ width: '100%' }} />
                        </div>
                        <div className='user-box'>
                            <div className='user-box-inside'>
                                <Avatar alt="Remy Sharp" src={item.user.profile_image.large} />
                                <div className='user-details'>
                                    <div>{item.user.name}</div>
                                    <div style={{ color: '#4e4e4e' }}>@{item.user.username}</div>
                                </div>
                            </div>
                            <div className='like'>
                              <a href={item.links.download} download={"Image"} ><DownloadOutlinedIcon fontSize='small' className='download-btn'/></a>
                                <ThumbUpOffAltIcon fontSize='small' />
                                <span>{item.likes%1000 === item.likes ? item.likes : `${Math.floor(item.likes/1000)}.${Math.floor((item.likes%1000)/100)}k`}</span>
                            </div>
                        </div>
                    </div>
            )
        })}
        </div>
        </>
    )
}

SearchImageContainer.propTypes ={
    searchInput: PropTypes.string
}

export default SearchImageContainer