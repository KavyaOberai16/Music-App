import { useRef } from "react";

export const Search = ({fn})=>{
    const artist = useRef();
    return (
    <>
    <label>Artist Name</label>
    <input ref={artist} type = 'text' className="form-control" placeholder="Type to Search the Artist/Song"/>
    <button className="btn btn-danger" onClick={()=>{
        fn(artist.current.value);
    }}> Search it</button>
    </>
    );
}