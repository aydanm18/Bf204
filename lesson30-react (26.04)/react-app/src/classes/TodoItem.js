import {nanoid} from "nanoid"
class TodoItem {
    constructor(title) {
        this.title = title;
        this.id = nanoid();
        this.createAt=new Date();
        this.isDone=false;
    }
}
export default TodoItem;