import React from 'react';

function Mail2(props){
    const {name,text} = props;
    return(
        <>
            <div id="Mail2">
                <h3>{name} 발송인의 이름을 입력해 주세요.</h3>
                <p>{text}내용을 입력해 주세요</p>
            </div>
        </>
    )
}

export default Mail2;