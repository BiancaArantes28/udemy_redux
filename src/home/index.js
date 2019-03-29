import React from 'react';
import NewList from './NewList';
import List from './List';

const Home = (props) => (
    <div className="page-container">
        
        <NewList />
        <List />
    </div>
)

export default Home