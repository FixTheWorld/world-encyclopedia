/**
 * Created by changjin.zhang on 6/26/2017.
 */
import React,{Component} from 'react';
import {Table,Button,FormGroup,InputGroup,FormControl,Glyphicon,Modal} from "react-bootstrap";

export default class AI extends Component{
    constructor(props){
        super(props);
        this.state={text:'',output:"output"};
    }
    analyse(){
        console.log();
        const text=this.state.text;
        const settings={
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({text})
        };
        fetch('/api/lexer',settings)
            .then((res)=>res.json())
            .then((json)=>{
                console.log('json',json);
                let output;
                let {n,f,s,t,nr,ns,nt,nw}=["普通名词","方位名词","处所名词","时间名词","人名","地名","机构团体名","作品名"];
                console.log(n);
                // json.items.map((item,index)=>{
                //
                // });
                if(json.error_code){
                    this.setState({output:json.error_msg});
                }else{
                    this.setState({output:JSON.stringify(json.items,null,4)});
                }
            });
    }
    render(){
        return (
            <article className="cj-main">
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            value={this.state.text}
                            onChange={(e)=>this.setState({text:e.target.value})}
                            type="text"
                            inputRef={(input)=>{this.productName=input}}
                        />
                        <InputGroup.Button>
                            <Button onClick={this.analyse.bind(this)}>analyse</Button>
                        </InputGroup.Button>
                    </InputGroup>
                </FormGroup>
                <pre>
                    {this.state.output}
                </pre>
            </article>
        );
    }
}