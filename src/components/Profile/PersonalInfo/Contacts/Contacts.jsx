import s from "./Contacts.module.css";
import React from "react";

const Contacts = ({contacts}) => {
    if (!Object.values(contacts).some(contact => contact)) return null;

    return <>
        <b>Contacts: </b>
        {
            Object.keys(contacts).map(key =>
                contacts[key] ?
                    <div key={key} className={s.contact}>
                        <b>{key}: </b> {contacts[key]}
                    </div>
                    :
                    null
            )
        }
    </>
};

export default Contacts;