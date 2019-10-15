/**
 * @file modal.js
 * @author minghui.zhou
 * @description hooks 组件
*/

import React from 'react';

export default function ComponentB(props) {
    const [data, setData] = React.useState(null);
    // 我们可以更加注重业务逻辑，生命周期? 抛在脑后吧！
    React.useEffect(() => {
        if (props.cA) {
            // 模仿请求了A接口
            setData('我可能就是刚刚请求的数据A啊');
        }
        else {
            // 模仿请求了B接口
            setData('我可能就是刚刚请求的数据B啊');
        }
    }, [props.cA]);

    return (
        <div>
            {data}
        </div>
    )
}