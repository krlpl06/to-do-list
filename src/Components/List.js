import React from "react";
import Task from "./Task";

function List(props){
    console.log(props.state)
    return(
        <div>
            {props.state.list && props.state.list.map((item, i) => <Task  taskName={item.taskName} 
                                                                            taskDesc={item.taskDesc}
                                                                            taskDate={item.taskDate}
                                                                            taskKey={item.taskKey}
                                                                            onDeleteTask={props.onDeleteTask}
                                                                            onMarkAsDone={props.onMarkAsDone}
                                                                            i={i}
                                                                            key={i}/>)}
        </div>
        
    )
}

export default List