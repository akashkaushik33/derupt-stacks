// import ScreenContext from './ScreenContext.js';
// import ProfileScreen from './ProfileScreen.js';
// import SettingsScreen from './SettingsScreen.js';
// import NewChimeScreen from './NewChimeScreen.js';
// import ReceiveScreen from './ReceiveScreen.js';
// import SendScreen from './SendScreen.js';
// import HistoryScreen from './HistoryScreen.js';
// import ContactsScreen from './ContactsScreen.js';
// import ProposalsScreen from './ProposalsScreen.js';
// import NewProposalScreen from './NewProposalScreen.js';
// import HomeScreen from './HomeScreen.js';
// import LandingScreen from './LandingScreen.js';
// import DataSheet_localizationSheet from './DataSheet_localizationSheet.js';
// import DataSheet_txHistory from './DataSheet_txHistory.js';
// import DataSheet_attributes from './DataSheet_attributes.js';
// import DataSheet_chimes from './DataSheet_chimes.js';
// import DataSheet_formLabelsAndValues from './DataSheet_formLabelsAndValues.js';

import {Route, Routes} from 'react-router-dom';
import Page404 from "./pages/404";
import Home from "./pages/home";
import Profile from './pages/profile';
import Contacts from './pages/contacts';

/**
 * Routes component containing routes for the whole application
 * @returns {JSX}
 */
const AllRoutes = () => (
    <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/profile' element={<Profile/>} />
        <Route exact path='/contacts' element={<Contacts/>} />

        <Route element={<Page404/>} />
    </Routes>
);

export default AllRoutes;