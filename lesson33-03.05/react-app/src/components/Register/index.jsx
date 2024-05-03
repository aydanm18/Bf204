import React, { useState } from 'react'
import StudentRegister from './StudentRegister'
import TeacherRegister from './TeacherRegister'

const Register = () => {
    const [registerPage, setRegisterPage] = useState("student")
    return (
        <>
            <>
                {registerPage == "student" ? (
                    <StudentRegister registerPage={registerPage} setRegisterPage={setRegisterPage} />
                ) : (
                    <TeacherRegister registerPage={registerPage} setRegisterPage={setRegisterPage} />
                )}
            </>

        </>
    )
}

export default Register