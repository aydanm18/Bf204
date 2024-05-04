import React, { useState } from 'react'
import StudentRegister from './StudentRegister'
import TeacherRegister from './TeacherRegister'


// const Register = ({form,setForm}) => {
    
//     const [registerPage, setRegisterPage] =useState("student");
//     return (
//         <>
//             <>
//                 {registerPage == "student" ? (
//                    <StudentRegister  registerPage={registerPage} setRegisterPage={setRegisterPage} form={form} setForm={setForm}/>
//                 ) : (
//                     <TeacherRegister registerPage={registerPage} setRegisterPage={setRegisterPage} form={form} setForm={setForm}/>
//                 )}
//             </>

//         </>
//     )
// }

// export default Register

// import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



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

export default function Register({setForm}) {
  const [value, setValue] = React.useState(0);
  const [registerPage, setRegisterPage] =useState("student");
  


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' , }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Student Register" {...a11yProps(0)} />
          <Tab label="Teacher Register" {...a11yProps(1)} />
         
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
       <StudentRegister registerPage={registerPage} setRegisterPage={setRegisterPage} setForm={setForm} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <TeacherRegister registerPage={registerPage} setRegisterPage={setRegisterPage} setForm={setForm}/>
      </CustomTabPanel>
     
    </Box>
  );
}


