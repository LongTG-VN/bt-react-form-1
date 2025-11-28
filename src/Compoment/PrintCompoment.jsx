import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AddStudent , StudentSearch} from "./slice"
import { useDispatch } from "react-redux";

const PrintCompoment = () => {
  const studentBegins = useSelector((state) => state.listStudent.Students);
  const students = useSelector((state) => state.listStudent.ListSearchStudent);
const dispatch = useDispatch();  
  console.log(students);
  
  const renderStudent = () => {
    return students?.map((student) => (
      <tr key={student.mssv}>
        <th scope="row">{student.mssv}</th>
        <td>{student.name}</td>
        <td>{student.phone}</td>
        <td>{student.email}</td>
      </tr>
    ));
  };

  useEffect(() => {
  dispatch(StudentSearch('')); // reset search để load full list
}, [studentBegins]);
 const changeSearch = (e) => {
    const name = e.target.value;
    console.log(name);
    dispatch(StudentSearch(name));
 }

  return (
    <div className='mt-3'>
        <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Search</span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" onChange={changeSearch}/>
            </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">MSSV</th>
            <th scope="col">Họ tên</th>
            <th scope="col">Số điện thoại</th>
            <th scope="col">email</th>
          </tr>
        </thead>
        <tbody>{renderStudent()}</tbody>
      </table>
    </div>
  );
};

export default PrintCompoment;