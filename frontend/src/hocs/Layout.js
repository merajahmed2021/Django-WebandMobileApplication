import React,{Fragment} from 'react'
// import NavBar from '../components/Navbar';
import { connect } from 'react-redux';
import NavBar from '../components/Navbar';

function Layout({children}) {
    return (
        <Fragment >
            <NavBar />
            {children}
        </Fragment>
    );
}
export default Layout;