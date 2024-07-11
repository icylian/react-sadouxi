import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function ButtonAppBar() {
    return (
        <AppBar sx={{ position: 'fixed' }}>
            <Toolbar>

                {/* 抽屉 */}
                {/* <TemporaryDrawer /> */}

                <Typography align="left" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    说给sadouxi
                </Typography>

            </Toolbar>
        </AppBar>
    );
}