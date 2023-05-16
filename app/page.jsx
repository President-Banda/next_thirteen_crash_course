'use client';
import { useState, useEffect } from "react";
import LoadingPage from "./loading";
import Link from "next/link"
import Courses from "./components/Courses"

const HomePage = () => {

  const [ courses, setCourses ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const fetchCourses = async() => {
      const response = await fetch('/api/courses');
      const data = await response.json();
      setCourses(data);
      setLoading(false);
    }

    fetchCourses();
  }, []);

  if(loading){
    return <LoadingPage />
  }

  return (
    <div>
      <h1>Welcome To Presidents Crash Course</h1>

      <Courses />
    </div>
  )
}

export default HomePage