import React, {useState, useEffect} from 'react';
import s from "./Status.module.css";

const Status = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => props.isOwner && setEditMode(true);
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };
    const onChangeStatus = (e) => setStatus(e.currentTarget.value);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    return (
        <>
            {!editMode &&
            <p onDoubleClick={activateEditMode}
               className={s.status}
            >
                {props.status || "-----------"}
            </p>
            }
            {editMode &&
            <input className={s.statusInput}
                   autoFocus={true}
                   onBlur={deactivateEditMode}
                   onChange={onChangeStatus}
                   value={status}
            />
            }
        </>
    )
};


export default Status;