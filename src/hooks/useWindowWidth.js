/**
 * @file MyResponsiveComponent.js
 * @author minghui.zhou
 * @description 带有状态的业务组件
*/


import React from 'react';

export default function useWindowWidth() {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    return width;
}