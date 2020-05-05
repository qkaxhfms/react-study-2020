import React from 'react';

function Mail3(props){
    const {name,text} = props;
    return(
        <>
            <div id="mail3">
                <h3>{name}을 입력해 주세요</h3>
                <p>{text}를 입력해 주세요</p>
            </div>
        </>
    )
}

export default Mail3;