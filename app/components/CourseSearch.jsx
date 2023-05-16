'use client';
import { useState } from "react";

const CourseSearch = () => {
    const [query, setQuery] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(query);
    }

  return (
    <form className="search-form" onSubmit={ handleSubmit }>
        <input className="search-input" type="text" placeholder="Search Courses..." value={ query }
        onChange={ (e)=> setQuery( e.target.value )} ></input>

        <button className="search-button" type="submit">
            Search
        </button>
    </form>
  )
}

export default CourseSearch