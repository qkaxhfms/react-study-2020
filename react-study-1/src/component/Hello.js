import React from 'react';

function Hello (props){
    const {name,friend,one} = props;
    return(
        <>
            <h1>안녕하세요!! {name}님</h1>
            <h2>저는 친구 {friend}입니다.</h2>
            <h3>좋아하는 슷자는 {one}입니다.</h3>
        </>
    )
}

export default Hello;