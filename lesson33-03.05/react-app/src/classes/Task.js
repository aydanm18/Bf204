class Task {
    constructor( title, description, topic, deadline, teacherId) {
        this.id =  new Date();
        this.title = title;
        this.description = description;
        this.topic = topic;
        this.deadline = deadline;
        this.createdAt = new Date();
        this.teacherId = teacherId;
        this.assignments = [];
    }
}

export default Task