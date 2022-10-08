import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { render } from '@testing-library/react';
import Photo from '../components/Photo';
//import { createMemoryHistory } from 'history';


const photo = { id : 1, author : 'Alejandro Escamilla' };
const index = 1;


describe( 'Photo component', () => {
    test('should match the snapshot', () => {
        //const history = createMemoryHistory({ initialEntries: ['/'] });
        //const history = createMemoryHistory({ initialEntries: ['/page1', '/page2'] });
        const { container } = render(
            <Router >
                <Photo photo={photo} />
            </Router>  
        );
        expect(container).toMatchSnapshot();
    })    
});