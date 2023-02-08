import React from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router';
import cookie from 'cookie'
import Login from './components/Login'
import Add from "./containers/Add"
import Listings from "./containers/Listings"
import BizDetails from './containers/BizDetails'

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"
export const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies["loggedIn"] ? true : false;
  };

// Write ProtectedRoute function here
const ProtectedRoute = (props) => {
    const {component: Component, } = props;

    return checkAuth() === true ? <Component /> : <Navigate to="/login" />
}



const Router = () => {
    return (
        <Routes>
            {/* <Route element={<ProtectedRoute />}>
				<Route path="/Add" element={<Add />}></Route>
			</Route> */}
            <Route exact path="/"  element={<Listings/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/Add" element={<ProtectedRoute component={Add}/>} />
            <Route path="/Listings/:id" element={<BizDetails/>} />
        </Routes>
    );
};

export default Router;