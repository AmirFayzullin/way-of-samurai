import React from 'react';
import s from './FormsControls.module.css';

const FormControl = ({input, meta, children, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
            <div>
                {children}
            </div>
            {hasError ?
                <div><span>{meta.error}</span></div>
                : ""
            }
        </div>
    );
};

export const Textarea = (props) =>
    <FormControl {...props}><textarea {...props.input} {...props}/></FormControl>;


export const Input = (props) =>
    <FormControl {...props}><input {...props.input} {...props}/></FormControl>;