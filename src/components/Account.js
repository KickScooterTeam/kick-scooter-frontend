import Typography from "@material-ui/core/Typography";
import React from "react";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import {makeStyles} from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Account(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <ListItem button onClick={handleClickOpen}>
                <ListItemIcon> <PersonOutlineRoundedIcon/></ListItemIcon>
                <ListItemText primary='Account'/>
            </ListItem>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Account
                        </Typography>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItem button>
                        <ListItemText primary="First Name" secondary="user first name"/>
                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <ListItemText primary="Last Name" secondary="user last name"/>
                    </ListItem>
                </List>
            </Dialog>
        </div>
    );
}