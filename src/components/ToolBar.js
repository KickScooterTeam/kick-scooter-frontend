import React, {useState} from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HistoryIcon from '@material-ui/icons/History';

import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import PaymentRoundedIcon from '@material-ui/icons/PaymentRounded';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';

import logo from '../icons/logo.svg';
// import Payment from "./Payment";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import {useHistory} from "react-router";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100 % - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'center',
    },
    drawerLogo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    contentCenter: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },

}));

export default function ToolBar(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [payment, setPayment] = useState('payment');
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [open1, setOpen1] = React.useState(false);

    const handleClose = () => {
        setOpen1(false);
    };
    const handleToggle = () => {
        setOpen1(!open1);
    };

    const history = useHistory();

    const clickLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        history.push('/sign-in');
    }

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar
                position="static"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" style={{flex: 1}}>
                        WINDY
                    </Typography>
                    <Button color='inherit' onClick={clickLogout}>Logout</Button>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <img src={logo} alt="logo" width={45} height={45} style={useStyles.drawerLogo}/>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>

                </div>
                <Divider/>
                <List>
                    <ListItem button>
                        <ListItemIcon> <PersonOutlineRoundedIcon/></ListItemIcon>
                        <ListItemText primary='Account'/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon> <HistoryIcon/></ListItemIcon>
                        <ListItemText primary='History'/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon> <HelpOutlineRoundedIcon/></ListItemIcon>
                        <ListItemText primary='Help'/>
                    </ListItem>
                    <ListItem button onClick={handleToggle}>
                        <ListItemIcon> <PaymentRoundedIcon/></ListItemIcon>
                        <ListItemText primary='Payment'/>
                    </ListItem>
                    {/*<Backdrop className={classes.backdrop} open={open1} onClick={handleClose}>*/}
                    {/*    <Payment/>*/}
                    {/*</Backdrop>*/}
                </List>
            </Drawer>
        </div>
    );


}