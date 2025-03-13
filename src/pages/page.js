import * as React from 'react';
import Navbar from '../components/layout/navbar/navbar';
import { Outlet } from 'react-router-dom';
import Home from '../components/Home';

export default function Page() {
    return <>
        <Navbar />
    </>
}