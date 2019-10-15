/**
 * @file ComponentUI
 * @author minghui.zhou
 * @description UI组件
*/

import React from 'react';
import useTeamInfo from '../../hooks/useTeamInfo'

function ComponentUI(props) {
    const data = useTeamInfo(props.type)
    return (
        <div>
            <div>name: {data.name}</div>
            <div>age: {data.age}</div>
        </div>
    )
}

export default ComponentUI;