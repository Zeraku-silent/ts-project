import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit';
import { STATUS } from '../../config/statuses';
import axios from 'axios';

interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const todoAdapter = createEntityAdapter<ITodo>();

const initialState = todoAdapter.getInitialState({
    status: STATUS.IDLE,
});

export const getTodos = createAsyncThunk('todos/getTodos', async () => {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/'
    );
    console.log(response);
    return response.data as ITodo[];
});

const testEntitySlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTodos.pending, (state) => {
                state.status = STATUS.PENDING;
            })
            .addCase(getTodos.fulfilled, (state, action) => {
                state.status = STATUS.SUCCESS;
                todoAdapter.addMany(state, action.payload);
            });
    },
});

export default testEntitySlice.reducer;
export const { selectAll: selectTodos, selectById: selectTodoById } =
    todoAdapter.getSelectors((state) => state.todos);
