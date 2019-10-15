/**
 * @file MyResponsiveComponent.js
 * @author minghui.zhou
 * @description 绑定监听的例子
*/

import React from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';

function MyResponsiveComponent() {
    const width = useWindowWidth();
    return (
        <p>Window width is {width}</p>
    );
}

export default MyResponsiveComponent;