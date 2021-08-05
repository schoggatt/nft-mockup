import React, {Component} from 'react'
import {withRouter} from 'react-router';

class NotFoundPage extends React.Component{

    constructor()
    {
        super();
    }

    render()
    {
        return(
            <p>404 Not Found!</p>
        );
    }
}

export default withRouter(NotFoundPage);