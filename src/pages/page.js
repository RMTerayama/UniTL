import * as React from 'react';
import Navbar from '../components/layout/navbar/navbar';
import { Outlet } from 'react-router-dom';
import Home from './Home';

export default function Page() {
    return <>
        <Navbar />
    </>
}