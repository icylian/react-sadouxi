import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import AppbarButton from './AppbarButton'
// import TemporaryDrawer from './Drawer'

export default function ButtonAppBar() {
    return (
        <AppBar sx={{ position: 'fixed' }}>
            <Toolbar>

                {/* 抽屉 */}
                {/* <TemporaryDrawer /> */}

                <Typography align="left" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Mofumofu Alpha
                </Typography>

            </Toolbar>
        </AppBar>
    );
}