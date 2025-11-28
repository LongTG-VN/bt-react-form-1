import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useSelector } from "react-redux";
import { AddStudent } from "./slice"
import { useDispatch } from "react-redux";


const FormInputCompomet = () => {
    const students = useSelector((state) => state.listStudent);
    const dispatch = useDispatch();
    console.log(students);

    const formRegister = useFormik({
        initialValues: {
            mssv: '',
            name: '',
            phone: '',
            email: ''
        },
        validationSchema: yup.object({
            mssv: yup.string().required('Vui lòng nhập MSSV'),
            name: yup.string().required('Vui lòng nhập Tên'),
            phone: yup
                .string()
                .required('Vui lòng nhập Điện thoại')
                .matches(/^[0-9]{9,11}$/, 'Số điện thoại không hợp lệ'),
            email: yup.string().email('Email không hợp lệ').required('Vui lòng nhập email')
        }),
        onSubmit: (values, { resetForm }) => {
            console.log('Submit data:', values);
            alert('Submit thành công!');
            dispatch(AddStudent(values))
            console.log(students);
            resetForm();
        }
    });

    return (
        <div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">@</span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>

            <div className='p-3 mb-2 bg-black text-white'>
                <h1>Thông tin Sinh Viên</h1>
            </div>
            <form onSubmit={formRegister.handleSubmit}>
                <div className='row row-cols-2'>
                    <div className='mb-3 col'>
                        <label htmlFor='mssv' className='form-label'>Mã Sinh Viên</label>
                        <input
                            type='text'
                            className='form-control'
                            id='mssv'
                            name='mssv'
                            value={formRegister.values.mssv}
                            onChange={formRegister.handleChange}
                            onBlur={formRegister.handleBlur}
                        />
                        {formRegister.touched.mssv && formRegister.errors.mssv && (
                            <p className='text-danger'>{formRegister.errors.mssv}</p>
                        )}
                    </div>
                    <div className='mb-3 col'>
                        <label htmlFor='name' className='form-label'>Họ Tên</label>
                        <input
                            type='text'
                            className='form-control'
                            id='name'
                            name='name'
                            value={formRegister.values.name}
                            onChange={formRegister.handleChange}
                            onBlur={formRegister.handleBlur}
                        />
                        {formRegister.touched.name && formRegister.errors.name && (
                            <p className='text-danger'>{formRegister.errors.name}</p>
                        )}
                    </div>
                    <div className='mb-3 col'>
                        <label htmlFor='phone' className='form-label'>Số Điện thoại</label>
                        <input
                            type='text'
                            className='form-control'
                            id='phone'
                            name='phone'
                            value={formRegister.values.phone}
                            onChange={formRegister.handleChange}
                            onBlur={formRegister.handleBlur}
                        />
                        {formRegister.touched.phone && formRegister.errors.phone && (
                            <p className='text-danger'>{formRegister.errors.phone}</p>
                        )}
                    </div>
                    <div className='mb-3 col'>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <input
                            type='email'
                            className='form-control'
                            id='email'
                            name='email'
                            value={formRegister.values.email}
                            onChange={formRegister.handleChange}
                            onBlur={formRegister.handleBlur}
                        />
                        {formRegister.touched.email && formRegister.errors.email && (
                            <p className='text-danger'>{formRegister.errors.email}</p>
                        )}
                    </div>
                </div>
                <button type='submit' className='btn btn-primary  ' >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FormInputCompomet;
