import React, {useContext, useState, useCallback} from 'react';
import StudentContext from './StudentContext';

export default function DeleteStudent(){

    const context = useContext(StudentContext);

    const [idToDelete, setIdToDelete] = useState('')

    const deleteStudentRecord = useCallback(()=>{
        return(
        context.deleteStudent(idToDelete)
        )
    },
    [context, idToDelete])

    return(
        <React.Fragment>
            <div className="container">
                <input  type="text"
                        className="form-control"
                        value={idToDelete}
                        onChange={(e)=>setIdToDelete(e.target.value)}
                />
                <button className="btn btn-danger"
                        onClick={deleteStudentRecord}
                > Delete student by ID </button>
            </div>
        </React.Fragment>
    )
}
