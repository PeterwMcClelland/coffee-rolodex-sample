import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar } from '@mui/material';

import { NavLink } from 'react-router-dom';

export const Header = () => {
    const [value, setValue] = useState();
  return (
    <div>
        <AppBar sx={{backgroundColor:'#232F3D'}} position="sticky">
            

        <Toolbar>
            
            <h1 className='home-h1'>Coffee Rolodex</h1>
            
            <Tabs 
            sx={{ml:'auto'}}
            textColor='inherit' 
            indicatorColor='secondary' 
            value={value} 
            onChange={( e, val) => setValue(val)}
            >
                    <Tab LinkComponent={NavLink} to="/coffee-list" label='Home'/>
                    <Tab LinkComponent={NavLink} to="/coffees" label='All Coffees'/>
                    <Tab LinkComponent={NavLink} to="/add" label='Add Coffee'/>
            </Tabs>
        </Toolbar>
        </AppBar>
    </div>
  );
};

export default Header;