import React from "react";
import { AppBar as MuiAppBar, Toolbar, Typography, IconButton, Avatar, AppBarProps as MuiAppBarProps, Badge, Menu } from "@mui/material"
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import { toggleDrawer } from "@/redux/states/drawer.state";
import { Notifications, MenuOutlined } from "@mui/icons-material";
import { DRAWER_WIDTH } from "../Sidenav/Sidenav";

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: DRAWER_WIDTH,
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));


const NavBar: React.FC = () => {

    const openDrawer = useSelector((state: AppStore) => state.drawer.open);
    const userInfo = useSelector((state: AppStore) => state.user);

    const dispatch = useDispatch();

    const handleToggleDrawer = () => dispatch(toggleDrawer())
    
    return (<AppBar position="absolute" open={openDrawer}>
        <Toolbar
            sx={{
                pr: '24px', // keep right padding when drawer closed
            }}
        >
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{
                    marginRight: '36px',
                    ...(openDrawer && { display: 'none' }),
                }}
                onClick={handleToggleDrawer}
            >
                <MenuOutlined />
            </IconButton >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >EMPRESA DEMO S.A</Typography>
            <IconButton color="inherit">
                <Badge badgeContent={0} color="secondary">
                    <Notifications />
                </Badge>
            </IconButton>
            <IconButton component="label">
                <Avatar alt="User">{userInfo.name.toUpperCase().slice(0,2)}</Avatar>
            </IconButton>
        </Toolbar >
    </AppBar >)
}

export default NavBar

