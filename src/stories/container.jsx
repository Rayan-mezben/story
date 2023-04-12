import React, { Children } from 'react';
import PropTypes from 'prop-types';
import './Container.css';

export const Container = ({child}) => {

    return (

        <div className="first">
               {child}
        </div>

    );
}