import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import CustomCard from '../common/CustomCard';

import ListItemFooter from './ListItemFooter';

const ListItem = () => (
    <CustomCard
        link="#"
        image="http://s2.glbimg.com/P6Nn4AXYPq-K1Xek4cCKyONYYyA=/e.glbimg.com/og/ed/f/original/2014/01/15/cafe.jpg"
        containerClass="list-item"
        footer={<ListItemFooter />}
    >
        <div>
            <div className="list-item-header">
                <Typography variant="subtitle1" componenet="h2">Café</Typography>
                <Checkbox />
            </div>
            <div></div>
            <Typography componenet="p">1 Unidade</Typography>
            <Typography componenet="p">R$ 10.00</Typography>
        </div>
    </CustomCard>
)

export default ListItem