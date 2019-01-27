import React from "react";
import PropTypes from "prop-types";

function Form(props){
    return(
        <form onSubmit={props.onAddTask} className="form">
            <div className="form__name">
                <label htmlFor="taskName" className="label">tytuł</label>
                <textarea rows="1" name="taskName" onChange={props.onChangeTaskName}></textarea>
            </div>
            <div className="form__desc">
                <label htmlFor="taskDesc" className="label">opis</label>
                <textarea rows="4" name="taskDesc" onChange={props.onChangeTaskDesc}></textarea>
            </div>
            <div className="form__date">
                <label htmlFor="taskDate" className="label">data</label>
                <input 
                    type="date" 
                    name="taskDate" 
                    onInput={props.onChangeTaskDate}
                    defaultValue={props.state.taskDate}/>
            </div>
            <button className="form__add">dodaj</button>
        </form>
    )
}

Form.propTypes = {
    onChangeTaskName: PropTypes.func.isRequired,
    onChangeTaskDate: PropTypes.func.isRequired,
    onChangeTaskDesc: PropTypes.func.isRequired,
    onAddTask: PropTypes.func.isRequired
}

export default Form