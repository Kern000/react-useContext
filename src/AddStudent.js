import React, {useContext, useState, useCallback} from 'react';
import StudentContext from './StudentContext';

export default function AddStudent(){

    const context = useContext(StudentContext)

    const [studentNumber, setStudentNumber] = useState('')
    const [yearOfStudy, setYearOfStudy] = useState('')
    const [gender, setGender] = useState('')
    const [graduated, setGraduated] = useState('')

    const createStudentRecord = useCallback(()=> {
        return(
        context.addStudent(studentNumber, yearOfStudy, gender, graduated)
        )},
        [context, studentNumber, yearOfStudy, gender, graduated]); //ensure function not recreated on every render unless the dependencies change

    return(
        <React.Fragment>
                <h2> Add a student </h2>
                <div className="form-check">
                    <label> Enter Student Number: </label>
                    <input  type="text"
                            className="form-check-input mb-2"
                            name="studentNumber"
                            value={studentNumber}
                            onChange={(e)=>setStudentNumber(e.target.value)}
                    />
                    <br/>
                    <label> Enter Year of Study </label>
                    <input  type="number"
                            className="form-check-input mb-2"
                            name="yearOfStudy"
                            value={yearOfStudy}
                            onChange={(e)=> setYearOfStudy(e.target.value)}
                    />
                    <br/>
                    <label> Enter Gender: </label>
                    <input  type="radio"
                            className="form-check-input mb-2"
                            name="gender"
                            value="male"
                            checked={gender==="male"}
                            onChange={(e)=> setGender(e.target.value)}
                    /> male
                    <input  type="radio"
                            className="form-check-input mb-2"
                            name="gender"
                            value="female"
                            checked={gender==="female"}
                            onChange={(e)=>setGender(e.target.value)}
                    /> female
                    <br/>
                    <label> Enter Graduated (true/false): </label>
                    <input  type="radio"
                            className="form-check-input mb-2"
                            name="graduated"
                            checked={graduated==="true"}
                            onChange={()=>setGraduated("true")}
                    /> true
                    <input  type="radio"
                            className="form-check-input mb-2"
                            name="graduated"
                            checked={graduated==="false"}
                            onChange={()=>setGraduated("false")}
                    /> false
                    <br/>
                </div>
                <button className="btn btn-primary"
                        onClick={createStudentRecord}> Add Student Details </button>            
        </React.Fragment>
    )
}