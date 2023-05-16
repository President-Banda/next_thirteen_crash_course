'use client';
import { useState } from "react";

const CourseSearch = ( { getSearchResults } ) => {
    const [query, setQuery] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(query);
        const response = await fetch(`/api/courses/search?query=${query}`);

        const courses = await response.json();

        getSearchResults(courses);
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