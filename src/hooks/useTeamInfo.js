/**
 * @file useTeamInfo.js
 * @author minghui.zhou
 * @description 带有状态的业务组件
*/


import React from 'react';

export default function useTeamInfo(type) {
    const [data, setData] = React.useState({});
    React.useEffect(() => {
        if (type) {
            setData({name: '杰克', age: 18});
        }
        else {
            setData({name: '肉丝', age: 20});
        }
    }, [type]);

    // React.useEffect(() => {
    //     if (type) {
    //         setData({name: '小芳', age: 18});
    //     }
    //     else {
    //         setData({name: '星海', age: 18});
    //     }
    // }, []);

    return data;
}