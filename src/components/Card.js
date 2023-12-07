import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Backup from "../assets/images/backup.png";
export const Card = ({movie}) => {
    const [imgBaseUrl, setImgBaseUrl] = useState("");
    const [imgSize, setImgSize] = useState("");
    const {id, original_title, poster_path,overview} = movie;
    const imgUrl = poster_path ? imgBaseUrl + imgSize + poster_path :Backup ;
    useEffect(()=>{
        async function fetchImgConfig(){
            const response = await fetch('https://api.themoviedb.org/3/configuration', { 
            method: 'get',    
            headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGJjZTM2ZTMzODMyMjEyMGExZDg4Y2YzYWQ1ZGIwZiIsInN1YiI6IjY1NjFiNjkwYjIzNGI5MDEzOTI3NTNjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.we774Aad_p0GfXRJMy1NOFtifFLO7rbtv8c04o_Ueao' } });
            const data = await response.json();
            setImgBaseUrl(data.images.base_url);
            setImgSize(data.images.poster_sizes[4]);

        }
        fetchImgConfig();
    },[]);
    return (
        <div className="m-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/movie/${id}`}>
                <img className="rounded-t-lg" src={imgUrl} alt="" />
            </Link>
            <div className="p-5">
                <Link to={`/movie/${id}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
            
            </div>
        </div>

    )
}
