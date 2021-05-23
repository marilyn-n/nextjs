import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

const Form = () => {

    return ( 
        <>
            <Paper elevation={3} className="paper-container">
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <TextField
                            fullWidth
                            id="standard-size-small"
                            label="Label"
                            placeholder="Placeholder"
                            helperText="Full width!"
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            fullWidth
                            id="standard-size-small"
                            label="Label"
                            placeholder="Placeholder"
                            helperText="Full width!"
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="standard-size-small"
                            label="Label"
                            placeholder="Placeholder"
                            helperText="Full width!"
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="standard-size-small"
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Full width!"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            id="standard-size-small"
                            label="Label"
                            placeholder="Placeholder"
                            helperText="Full width!"
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            id="standard-size-small"
                            label="Label"
                            placeholder="Placeholder"
                            helperText="Full width!"
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />       
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
}
 
export default Form;
