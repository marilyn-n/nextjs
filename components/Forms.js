import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '50%',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
  }));

const Form = () => {
    const classes = useStyles();

    return ( 
        <>
        <Container>
            <Paper
                className={classes.root}
                variant="outlined"
            >
            <TextField
                id="standard-size-small"
                label="Label"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                helperText="Full width!"
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            </Paper>
        </Container>
        </>
    );
}
 
export default Form;
