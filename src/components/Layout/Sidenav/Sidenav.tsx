import { toggleDrawer } from "@/redux/states/drawer.state";
import { AppStore } from "@/redux/store";
import { ChevronLeft } from "@mui/icons-material";
import { Divider, Drawer as MuiDrawer, IconButton, Toolbar } from "@mui/material"
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { DrawerListItems } from "./components";

export const DRAWER_WIDTH: number = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: DRAWER_WIDTH,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const Sidenav: React.FC = () => {

    const openDrawer = useSelector((state: AppStore) => state.drawer.open)
    const dispatch = useDispatch();

    const handleToggleDrawer = () => dispatch(toggleDrawer())

    return (<Drawer variant="permanent" open={openDrawer}>
        <Toolbar
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
            }}
        >
            <IconButton onClick={handleToggleDrawer}>
                <ChevronLeft />
            </IconButton>
        </Toolbar>
        <Divider />
        <DrawerListItems />
    </Drawer>)
}

export default Sidenav