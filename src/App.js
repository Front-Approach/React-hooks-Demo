import React from 'react';
import './App.css';
import ComponentA from './components/ComponentA/index';
import ComponentB from './components/ComponentB/index';
import MyResponsiveComponent from './components/MyResponsiveComponent/index';
import ComponentUI from './components/ComponentUI/index';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cA: null,
            type: null
        }
    }

    componentDidMount() {
        this.setState({
            cA: false,
            type: false
        })
    }

    componentAClick = () => {
        const {cA} = this.state;
        
        this.setState({
            cA: !cA
        });
    }

    changeType = () => {
        const {type} = this.state;
        this.setState({
            type: !type
        });
    }

    render() {
        const {cA} = this.state;
        return (
            <div className = "App" >
                <h1>例子1: 模仿点击切换数据源</h1>
                <div>
                    <button type="button" onClick={() => this.componentAClick()}>点击我来测试第一个组件</button>
                    <div>我是一个类组件</div>
                    <ComponentA cA={cA} />
                    <div>我是React hooks</div>
                    <ComponentB cA={cA} />
                </div>
                <h1>例子2: 优雅的加入监听</h1>
                <div>
                    <MyResponsiveComponent />
                </div>
                <h1>例子3: 业务组件与UI组件</h1>
                <div>
                    <button type="button" onClick={() => this.changeType()}>点击此处切换数据</button>
                    <ComponentUI type={this.state.type}/>
                </div>
            </div>
        )
    }
}