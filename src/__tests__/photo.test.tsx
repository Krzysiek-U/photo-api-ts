import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { render } from '@testing-library/react';
import Photo from '../components/Photo';

const photo = { id : 1, author : 'Alejandro Escamilla' };
const index = 1;

describe( 'Photo component', () => {
    test('should match the snapshot', () => {
        const { container } = render(<Router>  <Photo key={index} photo={photo} /> </Router>  );
        expect(container).toMatchSnapshot();
        //expect(1).toBe(1);
    })    
});