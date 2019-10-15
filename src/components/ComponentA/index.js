/**
 * @file modal.js
 * @author minghui.zhou
 * @description 类组件
*/

import React, {Component} from 'react';
export default class ComponentA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: null,
            cA: this.props.cA
        }
    }

    componentDidUpdate(nextProps){
        if (this.props.cA !== nextProps.cA) {
            this.setState({
                cA: this.props.cA
            }, () => this.getData());
        }
    }

    getData = () => {
        if (this.state.cA) {
            this.setState({
                data: '我可能就是刚刚请求的数据A啊'
            })
        }
        else {
            this.setState({
                data: '我可能就是刚刚请求的数据B啊'
            })
        }
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        const {data} = this.state;
        return (
            <div>
                {data}
            </div>
        )
    }
}