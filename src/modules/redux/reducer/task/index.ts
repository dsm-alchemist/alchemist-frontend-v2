import TaskState from "./interface";
import { taskActionType } from "../../action/task";
import { SET_TASK_ID } from "../../action/task/interface";

const initState: TaskState = {
    taskId: 0
};

const TaskReducer = (
    state = initState,
    action: taskActionType
) => {
    switch (action.type) {
        case SET_TASK_ID:
            return {
                ...state,
                taskId: action.payload,
            }
        default:
            return state;
    }
}

export default TaskReducer;