import React, { useState } from 'react';
import { nanoid } from 'nanoid'

const AddForm = ({ data, setData }) => {
    const [courseName, setCourseName] = useState("");
    const [coursePrice, setCoursePrice] = useState(0);
    const [courseImage, setCourseImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (courseName !== "" && coursePrice !== "" && courseImage !== "") {
            let newCourse = {
                id: nanoid(),
                name: courseName,
                price: coursePrice,
                img: courseImage
            };
            setData([...data, newCourse]);
        } else {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Input is empty !!!",
                showConfirmButton: false,
                timer: 1500 
            });
        }
        setCourseName("");
        setCoursePrice(0);
        setCourseImage("");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Course Name</label><br />
                <input type="text" onChange={(e) => setCourseName(e.target.value)} value={courseName} /><br />
                <label htmlFor="">Course Price</label><br />
                <input type="number" onChange={(e) => setCoursePrice(e.target.value)} value={coursePrice} /><br />
                <label htmlFor="">Course Image</label><br />
                <input type="url" onChange={(e) => setCourseImage(e.target.value)} value={courseImage} /><br />
                <button type='submit'>Add Course</button>
            </form>
        </>
    )
}

export default AddForm;
