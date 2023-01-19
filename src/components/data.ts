
import {Task} from "../store";

//имитация загрузки данных
export const getData = () => {
    return [
        {
            id: 1,
            text: 'Get money',
            isDone: false,
        },
        {
            id: 2,
            text: 'Buy what you need',
            isDone: false,
        },
        {
            id: 3,
            text: 'Enjoy',
            isDone: false,
        }
    ] as Task[]
}