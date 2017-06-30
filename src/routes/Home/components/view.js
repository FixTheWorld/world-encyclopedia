/**
 * Created by changjin.zhang on 4/17/2017.
 */
import React,{Component} from 'react';
import {Nav,NavItem,InputGroup,FormGroup,FormControl,Button,ButtonToolbar,ButtonGroup,Glyphicon,Row,Col} from 'react-bootstrap';

import '../index.scss';
import Footer from '../../../component/Footer';
class Home extends Component{
    transform(e){
        const ele=e.target
        const className=ele.getAttribute('class');
        ele.setAttribute('class',className+' cj-rotate');
        setTimeout(()=>{
            ele.setAttribute('class',className);
        },1500);
    }
    render(){
        return (
            <div className="cj-main">
                <header className="cj-header">
                    <h2>世界百科</h2>
                    <h4 style={{textAlign:"right"}}> </h4>
                </header>
                <article className="cj-content container">
                    <section>
                        <header className="cj-search container">
                            <InputGroup>
                                <FormControl placeholder="我可以实现你的愿望，但是.." type="text" />
                                <InputGroup.Button bsStyle="primary"><Button><Glyphicon glyph="search"/></Button></InputGroup.Button>
                            </InputGroup>
                        </header>
                        <ul className="cj-menu-cont">
                            <li>
                                <div className="cj-menu-left">
                                    <Glyphicon glyph="tint" className="cj-menu-icon"/>
                                    <div className="cj-menu-text">人物</div>
                                </div>
                                <div className="cj-menu-right">
                                    他们存在着，书写着故事
                                </div>
                            </li>
                            <li>
                                <div className="cj-menu-left">
                                    <Glyphicon glyph="globe" className="cj-menu-icon"/>
                                    <div className="cj-menu-text">设定</div>
                                </div>
                                <div className="cj-menu-right">
                                    世界和构成她的种种
                                </div>
                            </li>
                            <li>
                                <div className="cj-menu-left">
                                    <Glyphicon glyph="flash" className="cj-menu-icon"/>
                                    <div className="cj-menu-text">史诗</div>
                                </div>
                                <div className="cj-menu-right">
                                    宏大震撼的短篇故事
                                </div>
                            </li>
                            <li>
                                <div className="cj-menu-left">
                                    <Glyphicon glyph="leaf" className="cj-menu-icon"/>
                                    <div className="cj-menu-text">其他</div>
                                </div>
                                <div className="cj-menu-right">
                                    其他相关
                                </div>
                            </li>
                        </ul>
                    </section>
                </article>
                <Footer/>
            </div>
        );
    }
}
export default Home;