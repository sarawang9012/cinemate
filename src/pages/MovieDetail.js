import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import Backup from "../assets/images/backup.png";
export const MovieDetail = () => {
    const [movie, setMovie] = useState({});
    const [imgBaseUrl, setImgBaseUrl] = useState("");
    const [imgSize, setImgSize] = useState("");
    const params = useParams();
    const imgUrl = movie.poster_path ? imgBaseUrl + imgSize + movie.poster_path : Backup;
    useTitle(movie.title);
    useEffect(() => {
        async function fetchImgConfig() {
            const response = await fetch('https://api.themoviedb.org/3/configuration', {
                method: 'get',
                headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGJjZTM2ZTMzODMyMjEyMGExZDg4Y2YzYWQ1ZGIwZiIsInN1YiI6IjY1NjFiNjkwYjIzNGI5MDEzOTI3NTNjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.we774Aad_p0GfXRJMy1NOFtifFLO7rbtv8c04o_Ueao' }
            });
            const data = await response.json();
            setImgBaseUrl(data.images.base_url);
            setImgSize(data.images.poster_sizes[4]);

        }
        fetchImgConfig();
    }, []);
    useEffect(() => {
        async function fetchMovie() {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/movie/${params.id}?language=en-US`, {
                method: 'get',
                headers: { 'Authorization': `Bearer ${process.env.REACT_APP_AUTH_TOKEN}` }
            });
            const json = await response.json();
            setMovie(json);

        }
        fetchMovie();
    }, [params.id]);
    return (
        <main>
            <section className="flex justify-around flex-wrap mt-4">
                <div className="max-w-sm mt-4 mx-9">
                    <img className="rounded" src={imgUrl} alt={movie.title} />
                </div>
                <div className="max-w-2xl mt-6 mx-10 ">
                    <h1 className="text-4xl font-bold text-gray-700 dark:text-white">{movie.title}</h1>
                    <p className="text-lg text-gray-700 mt-4 dark:text-white">{movie.overview}</p>
                    {movie.genres ?
                        (<p className="my-8">
                            {movie.genres.map((genre) => (
                                <span className="text-lg text-gray-700 border rounded border-gray-300 p-2 mr-4 dark:text-white" key={genre.id}>{genre.name}</span>
                            ))}
                        </p>
                        ) : ""
                    }
                    <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <p className="ms-2 text-lg  text-gray-700 dark:text-white">{movie.vote_average}</p>
                        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                        <p className="text-lg font-medium text-gray-700 dark:text-white">{movie.vote_count} reviews</p>
                    </div>
                    <div className="flex items-center mt-4">
                        <p className="font-bold text-lg mr-2 text-gray-700 dark:text-white">Runtime:</p>
                        <p className="text-lg text-gray-700 dark:text-white">{movie.runtime} min.</p>
                    </div>
                    <div className="flex items-center mt-4">
                        <p className="font-bold text-lg mr-2 text-gray-700 dark:text-white">Budget:</p>
                        <p className="text-lg text-gray-700 dark:text-white">{movie.budget}</p>
                    </div>
                    <div className="flex items-center mt-4">
                        <p className="font-bold text-lg mr-2 text-gray-700 dark:text-white">Revenue:</p>
                        <p className="text-lg text-gray-700 dark:text-white">{movie.budget}</p>
                    </div>
                    <div className="flex items-center mt-4">
                        <p className="font-bold text-lg mr-2 text-gray-700 dark:text-white">Release Date:</p>
                        <p className="text-lg text-gray-700 dark:text-white">{movie.release_date}</p>
                    </div>
                    <div className="flex items-center mt-4">
                        <p className="font-bold text-lg mr-2 text-gray-700 dark:text-white">IMDB Code:</p>
                        <a className="text-lg text-gray-700 dark:text-white" target="_blank" href={`https://www.imdb.com/title/${movie.imdb_id}`} rel="noreferrer">{movie.imdb_id}</a>
                    </div>
                    </div>
                    </section>
                    </main>
    );
                }



























