// // src/components/applications/application1/HorizontalTabs.js
// import React from 'react';
// import { Tabs, Tab, Box } from '@mui/material';
// import { Link, useLocation } from 'react-router-dom';

// const HorizontalTabs = () => {
//     const location = useLocation();
//     const currentTab = location.pathname.split('/').pop();

//     return (
//         <Box sx={{ display: 'flex', ml: 4 }}>
//             <Tabs value={currentTab} variant="scrollable" scrollButtons="auto" aria-label="application tabs">
//                 <Tab label="AppView" value="AppView" component={Link} to="/applications/application1/AppView" />
//                 <Tab label="Performance" value="performance" component={Link} to="/applications/application1/performance" />
//                 <Tab label="Infrastructure" value="infrastructure" component={Link} to="/applications/application1/infrastructure" />
//                 <Tab label="Transactions" value="transactions" component={Link} to="/applications/application1/transactions" />
//                 <Tab label="Errors" value="errors" component={Link} to="/applications/application1/errors" />
//                 <Tab label="Logs" value="logs" component={Link} to="/applications/application1/logs" />
//                 <Tab label="Notifications" value="alerts" component={Link} to="/applications/application1/alerts" />
//             </Tabs>
//         </Box>
//     );
// };

// export default HorizontalTabs;
