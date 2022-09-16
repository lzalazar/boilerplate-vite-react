import { Dashboard, Groups, Devices, MapOutlined, PersonOutline, SettingsOutlined } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const DrawerListItems = () => {
    return (<Box sx={{ overflowY: 'auto', overflowX:"hidden" }}>
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <Dashboard />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <Groups />
                    </ListItemIcon>
                    <ListItemText primary="Empleados" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <Devices />
                    </ListItemIcon>
                    <ListItemText primary="Dispositivos" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <MapOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Zonas" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PersonOutline />
                    </ListItemIcon>
                    <ListItemText primary="Usuarios" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <SettingsOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Configuracion" />
                </ListItemButton>
            </ListItem>
        </List>
    </Box>)
}
export default DrawerListItems;