
class Student {
    constructor( fullName, username, email, password, profileImage) {
        this.id = nanoid();
        this.fullName = fullName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.grades = [];
        this.profileImage = profileImage;
    }

    calcAvgGrade(grades) {
        let sum = 0;
        for (let i = 0; i < grades.length; i++) {
            sum += grades[i];
        }
        return sum / grades.length;
    }
}
