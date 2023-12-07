import { useEffect, useState } from "react";
export const useFetch = (apiPath, queryTerm="") => {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchMovies() {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}${apiPath}?language=en-US&page=1&query=${queryTerm}`, { 
            method: 'get',    
            headers: { 'Authorization': `Bearer ${process.env.REACT_APP_AUTH_TOKEN}` } });
            const json = await response.json();
            setData(json.results);

        }
        fetchMovies();
    }, [apiPath,queryTerm]);
  return { data };
}
