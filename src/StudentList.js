import React, {useContext} from 'react';
import StudentContext from './StudentContext';
import AddStudent from './AddStudent';

export default function StudentList(){

    let context= useContext(StudentContext);

    return (
        <React.Fragment>
            <ul className='list-group'>
                {context.getStudents().map(student => {
                    return(
                    
                    <li className='list-group-item' key={student.studentNumbers}>
                       <p> Student Number: {student.studentNumber} </p>
                       <p> Year of Study: {student.yearOfStudy} </p>
                       <p> Gender: {student.gender} </p>  
                       <p> Graduated: {student.graduated} </p>                     
                    </li>
                    )
                    }
                )}
            </ul>
            <AddStudent />
        </React.Fragment>
    )
}