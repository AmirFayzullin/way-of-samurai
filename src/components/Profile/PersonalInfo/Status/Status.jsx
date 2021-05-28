import React from 'react';
import s from "./Status.module.css";

class Status extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    };

    setEditMode = (isOn) => {
        this.setState({
            editMode: isOn
        });

        if (!isOn) this.props.updateStatus(this.state.status);
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.target.value
        });
    };

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <p onDoubleClick={() => this.setEditMode(true)}
                       className={s.status}
                    >
                        {this.props.status || "-----------"}
                    </p>
                }
                {this.state.editMode &&
                    <input className={s.statusInput}
                           autoFocus={true}
                           onBlur={() => this.setEditMode(false)}
                           onChange={this.onStatusChange}
                           value={this.state.status}
                    />
                }
            </>
        )
    }
}

export default Status;