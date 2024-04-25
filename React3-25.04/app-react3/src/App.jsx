import { useState } from "react";
import courses from "./data/data.js";
import AddForm from './components/AddForm'
import './App.css'
import Courses from './components/Courses';



function App() {
  const [data, setData] = useState(courses);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredCourses = data.filter((q) => {
    return q.name
      .toLowerCase().trim().includes(searchQuery.trim().toLowerCase());
  });

  console.log(filteredCourses)

  return (
    <>
      <AddForm data={data} setData={setData} />
      <Courses data={filteredCourses} />
    </>
  )
}

export default App
