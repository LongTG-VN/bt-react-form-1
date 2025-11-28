import { createSlice } from "@reduxjs/toolkit"

const student = [
    {
        mssv: 1,
        name: "Nguyễn Văn A",
        phone: "09381111111",
        email: "nguyenvana@gmail.com"
    },
    {
        mssv: 2,
        name: "Nguyễn Văn B",
        phone: "09382223232",
        email: "nguyenvanb@gmail.com"
    }
];


const initialState = {
    Students: student,
    ListSearchStudent: student,
}

const ManaStudents = createSlice(
    {
        name: "listStudent",
        initialState,
        reducers: {
            AddStudent: (state, action) => {
                const student = action.payload;

                const students = [...state.Students];

                students.push(student);

                state.Students = students;

                console.log("Thêm Thành Công");

            },
            StudentSearch: (state, action) => {
                const name = action.payload;
                const students = [...state.Students];

                if (name === "") {
                    state.ListSearchStudent = students;
                } else {
                    const SearchStudents = students.filter(stu =>
                        stu.name.toLowerCase().includes(name.toLowerCase())
                    );
                    state.ListSearchStudent = SearchStudents;
                }
            }
        }
    }
)
export const { AddStudent, StudentSearch } = ManaStudents.actions

export default ManaStudents.reducer
