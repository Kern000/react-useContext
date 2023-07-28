import React, {useState, useEffect, useMemo} from 'react';
import StudentContext from './StudentContext';
import StudentList from './StudentList';

export default function App(){

  const [formState, setFormState] = useState([])

  useEffect(() => {
    console.log('Form state updated:')
  }, 
  [formState])

  const context = useMemo(()=>{
    return(
      {
      getStudents: () => {
        return formState
      },
      addStudent: (studentNumber, yearOfStudy, gender, graduated) => {
        setFormState(
          [...formState,
           {
            'studentNumber': studentNumber,
            'yearOfStudy': yearOfStudy,
            'gender': gender,
            'graduated': graduated,
           }
          ]
        )
      },
      deleteStudent: (studentNumberToDelete) => {
        let clonedList = formState.slice()
        let indexToDelete = clonedList.findIndex(s=> s.studentNumber === studentNumberToDelete)
        let left = clonedList.slice(0, indexToDelete)
        let right = clonedList.slice(indexToDelete+1)
        setFormState(
          [...left,...right]
        )
      },
      formState
      }
    )
  }, [formState]) //useMemo to prevent recalc, memorizing the result of computation, unless dependencies changed

  return (
    <StudentContext.Provider value={context}>
      <StudentList />
    </StudentContext.Provider>
  )
}
