import React, { lazy } from 'react';
import './App.css';
import MyImage from '../../public/pizza.jpg';
import ButtonComponent from './shared/Button';
import DashboardComponent from './DashboardComponent';
const TestComponent = lazy(() => import(/* webpackChunkName: 'TestComponentChunk' */ './TestComponent.jsx'));

const AppComponent = () => {
    const fetchUserDetails = () => {
        console.log("Test User");
    }
    return (
        <div className="container">
            <div>
                App Component
                <img src={MyImage} />
                <ButtonComponent />
                <DashboardComponent />
                <TestComponent />
            </div>
        </div>
    )
}

export default AppComponent;