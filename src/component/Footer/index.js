/**
 * Created by changjin.zhang on 6/30/2017.
 */
import React,{Component} from 'react';
import browserHistory from '../../routes/history';
import {Glyphicon} from 'react-bootstrap';
export default class Footer extends Component{
    render(){
        return (
            <footer className="cj-footer">

                <ul className="cj-btm-nav container">
                    <li onClick={()=>browserHistory.push('/')}>
                        <Glyphicon glyph="fire" className="cj-btm-icon"/>
                        <div className="cj-nav-text">营火</div>
                    </li>
                    <li onClick={()=>browserHistory.push('/war')}>
                        <Glyphicon glyph="tower" className="cj-btm-icon"/>
                        <div className="cj-nav-text">战争</div>
                    </li>
                    <li onClick={()=>browserHistory.push('/')}>
                        <Glyphicon glyph="th-large" className="cj-btm-icon"/>
                        <div className="cj-nav-text">行装</div>
                    </li>
                </ul>
            </footer>
        );
    }
}