/**
 * Created by changjin.zhang on 4/17/2017.
 */
import React,{Component} from 'react';
import {Nav,NavItem,InputGroup,FormGroup,FormControl,Button,ButtonToolbar,ButtonGroup,Glyphicon,Row,Col} from 'react-bootstrap';
import '../index.scss';
class Home extends Component{
    render(){
        return (
            <div className="cj-main">
                <header className="cj-header">
                    <InputGroup>
                        <FormControl type="text" />
                        <InputGroup.Button bsStyle="primary"><Button><Glyphicon glyph="search"/></Button></InputGroup.Button>
                    </InputGroup>
                </header>
                <article className="cj-content container">
                    <img className="cj-bg" src={require("../../../assets/img/bg.png")} />
                    <div className="cj-bg2"> </div>
                    home
                </article>
                <footer className="cj-footer">
                    <ul className="cj-btm-nav container">
                        <li>
                            <Glyphicon glyph="fire" className="cj-btm-icon"/>
                            <div className="cj-nav-text">营火</div>
                        </li>
                        <li>
                            <Glyphicon glyph="tower" className="cj-btm-icon"/>
                            <div className="cj-nav-text">战争</div>
                        </li>
                        <li>
                            <Glyphicon glyph="th-large" className="cj-btm-icon"/>
                            <div className="cj-nav-text">行装</div>
                        </li>
                    </ul>
                </footer>
            </div>
        );
    }
}
export default Home;