import React from 'react';
import ReactDOM from 'react-dom';



class Application extends React.Component {
    render() {
        return <div >
            <
            h1 > Mind Body Nutrition < /h1> <
        h2 > Students
        for Preventive and Integrative Medicine < /h2> < /
        div > ;
    }
}

/*
 * Render the above component into the div#app
 */
ReactDOM.render( < Application / > , document.getElementById('app'));
