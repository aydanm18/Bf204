class Teacher {
    constructor(fullName, username, email, password, major, profileImage) {
        this.id =  new Date();
        this.fullName = fullName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.major = major;
        this.profileImage = profileImage;
    }
}

export default Teacher