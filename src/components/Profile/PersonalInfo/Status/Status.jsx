import React from 'react';
import s from "./Status.module.css";

class Status extends React.Component {
    state = {
        editMode: false,
    };

    setEditMode = (isOn) => {
        this.setState({
            editMode: isOn
        });
    };

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <p onDoubleClick={() => this.setEditMode(true)}
                       className={s.status}
                    >
                        {this.props.status}
                    </p>
                }
                {this.state.editMode &&
                    <input className={s.statusInput}
                           autoFocus={true}
                           onBlur={() => this.setEditMode(false)}
                           value={this.props.status}
                    />
                }
            </>
        )
    }
}

export default Status;