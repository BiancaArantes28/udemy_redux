import React from 'react';
import NewList from './NewList';
import List from './List';
import './Home.css'

const Home = (props) => (
    <div className="page-container">
        
        <NewList />
        <List />
    </div>
)

export default Home