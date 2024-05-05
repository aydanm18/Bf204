import React, { useState } from 'react'
// import StudentLogin from './StudentLogin'
// import TeacherLogin from './TeacherLogin'

// const Login = ({form,setForm}) => {
//     const [loginPage, setLoginPage] = useState("student")
//     return (
//         <>
//             {loginPage == "student" ? (
//                 <StudentLogin loginPage={loginPage} setLoginPage={setLoginPage}  form={form} setForm={setForm}/>
//             ) : (
//                 <TeacherLogin loginPage={loginPage} setLoginPage={setLoginPage} form={form} setForm={setForm} />
//             )}
//         </>
//     )
// }

// export default Login
// import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StudentLogin from './StudentLogin';
import TeacherLogin from './TeacherLogin';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Login({ setForm, setClassroom }) {
  const [value, setValue] = React.useState(0);
  const [loginPage, setLoginPage] = useState("student")

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Student Login" {...a11yProps(0)} />
          <Tab label="Teacher Login" {...a11yProps(1)} />

        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <StudentLogin loginPage={loginPage} setLoginPage={setLoginPage} setForm={setForm} setClassroom={setClassroom} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <TeacherLogin loginPage={loginPage} setLoginPage={setLoginPage} setForm={setForm} setClassroom={setClassroom} />
      </CustomTabPanel>

    </Box>
  );
}


