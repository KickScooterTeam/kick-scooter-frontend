import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from '../icons/logo.svg';
import axios from "axios";
import {API_BASE_URL} from "../constants/apiConstants";


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Windy
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp(props) {
    const classes = useStyles();

    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = e => {
        const {name, value} = e.target
        setState(prevState => ({
            ...prevState, [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();

        const payload = {
            "firstName": state.firstName,
            "lastName": state.lastName,
            "email": state.email,
            "password": state.password
        }

        axios.post(API_BASE_URL + `identity-service/accounts/sign-up`, payload).then((res) => {
            if (res.status === 200) {
                console.log(res.data);
                props.history.push('/greeting');
            }

        }).catch((error) => {
            alert(error.response.data.error)
        })
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <img src={logo} alt={logo} height={45} width={45}/>
                <Typography variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                value={state.firstName}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                value={state.lastName}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={state.email}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={state.password}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSubmit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/sign-in" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright/>
            </Box>
        </Container>
    );
}