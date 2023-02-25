import React from 'react';
import {Grid , TextField,makeStyles,Button} from "@material-ui/core";


const useStyle = makeStyles(theme=>({
    root:{
     '& .MuiInputBase-root':{
         margin:theme.spacing(1)
     },
        '& .MuiFormLabel-root ,.MuiInputBase-input':{
            fontSize:15
        },
        '& .MuiButton-label':{
            fontSize:15
        },

    }
}))

const FormContact = (props) => {
    const classes=useStyle();
    return(
        <div className={classes.root}>
            <Grid container>
                <Grid item>
                    <TextField variant={'outlined'} label={'Name'} fullWidth/>
                    <TextField variant={'outlined'} label={'Email'} fullWidth/>
                    <TextField variant={'outlined'} label={'Subject'} fullWidth/>
                    <TextField variant={'outlined'} size={'medium'} type={'text'} label={'Message'} multiline={true} fullWidth rows={20}/>
                </Grid>
                <Grid item md={12}>
                    <Button variant="contained" color="primary" size='large'>Send</Button>

                </Grid>
            </Grid>
        </div>
    )
    }

;

export default FormContact;
