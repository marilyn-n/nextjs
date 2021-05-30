import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: '.5rem',
  },
  avatar: {
    backgroundColor: red[500],
  },
  box: {
    margin: '3rem 0',
  }
}));

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { users: data }
    }
}

const Users = ({ users }) => {
    const classes = useStyles();

    return ( 
        <>
        <Container maxWidth="md">
            <Box component="div" display="flex" flexWrap="wrap" justifyContent="center" className={classes.box}>
                {users.map(user => (
                  <Card className={classes.root} key={user.id}>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                          R
                        </Avatar>
                      }
                      title={`${user.name}`}
                      subheader={`${user.email}`}
                    />
                  </Card>
                ))}
            </Box>
          </Container>
        </>
     );
}
 
export default Users;