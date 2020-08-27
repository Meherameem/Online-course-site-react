import React from 'react';
import './CourseList.css'

const CourseList = (props) => {
    console.log(props);
    const {name,image,instructor,duration,price} = props.course;
    return ( 
            <div class="container">
                <div class="row card-float">
                    <div class="col-lg-6">
                        <div class="card card-style card-display">
                            <img src={image} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">{name}</h5>
                                <p class="card-text">
                                    Instructor : {instructor} <br/>
                                    Duration : {duration} <br/>
                                    Price : ${price}
                                </p>
                            <button class="btn btn-primary"onClick={()=>props.handleAddCourse(props.course)}>Enroll Now</button>
                            </div>
                        </div>
                    </div>
                 </div>
             </div>
    );
};

export default CourseList;