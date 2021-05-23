import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Link from 'next/link';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    gap: {
        margin: theme.spacing(1, 5),
    },
    
}));

const Navbar = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return ( 
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit">
                        NextJS
                    </Typography>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="light"
                    >
                        <Link href="/">
                            <Tab label="Home" />
                        </Link>
                        <Link href="/">
                            <Tab label="About" />
                        </Link>
                        <Link href="/">
                            <Tab label="Contact" />
                        </Link>
                    </Tabs>
                    <Button
                        startIcon={<FavoriteIcon />}
                        variant="contained" 
                        color="secondary" 
                        href="#contained-buttons"
                        style={{ marginLeft: 'auto' }}
                        >
                        Link
                    </Button>
                </Toolbar>
            </AppBar>
        </>
     );
}
 
export default Navbar;