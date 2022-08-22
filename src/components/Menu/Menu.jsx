import React from 'react';
import '../Menu/Menu.css'


export default class Menu extends React.Component {

    render(){
        return(
            <div className='menu'>
                <a href="#" className='man'>MAN</a>
                <a href="#" className='woman'>WOMAN</a>
                <a href="#" className='jersey'>JERSEY</a>
                <a href="#" className='teams'>TEAMS</a>
                <a href="#" className='app'>APP</a>
          </div>
        )
    }
}