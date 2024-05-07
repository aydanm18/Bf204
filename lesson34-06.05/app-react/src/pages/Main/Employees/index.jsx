import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import { useState } from 'react';
import { getAll } from '../../../api';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Employees() {
    const [expanded, setExpanded] = React.useState(false);
    const [data, setData] = useState([]);
    React.useEffect(() => {
        getAll("/employees").then((res) => {
            console.log(res.data)
            setData(res.data)
        })
    }, [])
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='row'>
            {data && data.map((employee) => {
                return (
                   <div className='col-4'>
 <Card sx={{ maxWidth: 345 }}>

<CardMedia
    component="img"
    height="194"
image={employee.image}
    alt="Paella dish"
/>
<CardContent>
    <Typography variant="h5" color="text.secondary">Age:{employee.age}
    </Typography>
    <Typography variant="h5" color="text.secondary">Salary:{employee.salary}

    </Typography>
    <Typography variant="h5" color="text.secondary">Position:{employee.position}

    </Typography>
</CardContent>
<CardActions disableSpacing>
    <IconButton color='info'>
        <InfoOutlinedIcon />
    </IconButton>


</CardActions>

</Card>
                   </div>
                )

            })}
        </div>
    );
}