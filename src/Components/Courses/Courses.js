import React, { useState } from 'react';
import './Courses.css'
import CourseList from '../CourseList/CourseList';
import Cart from '../Cart/Cart';
import courseData from '../../fakeData/courseData';
import Header from '../Header/Header';
const Courses = () => {
    const courses = courseData;
    const [cart,setCart] = useState([]);
    const handleAddCourse = (course) =>{
        const newCart = [...cart,course];
        setCart(newCart);
    }
    return (
        <div>
            <Header cart={cart}></Header>
            <div className="row">
                <div className="col-lg-6" style={{display:'flex',flexWrap:'wrap'}}>
                    {courses.map(course =><CourseList handleAddCourse={handleAddCourse} course={course}></CourseList>)}
                </div>
                <div className="col-lg-6">
                    <Cart cart={cart}></Cart>
                 </div>
            </div>

        </div>
         
    );
};

export default Courses;