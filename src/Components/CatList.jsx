import React from 'react';
import '../ComponentsCss/CatList.css'
import { Badge } from 'react-bootstrap'
const CatList = (props) => {

    return (
        <div id="catList">
            {props.dataListProp && props.dataListProp.map((data, index) => <CatListIteam key={index} id={index} onClicks={props.clickFunc} data={data} />)}
        </div>

    );
};

const CatListIteam = (props) => {
    return (
        <div id="catListIteam" onClick={() => { props.onClicks(props.id) }}>
            <div style={{ width: "100px", maxWidth: "100%", display: "inline-block", textAlign: "left", float: "left", wordBreak: "break-all" }}>
                {props.data.CatName}
            </div>
            <div style={{ textAlign: "right" }}>
                <Badge pill variant="secondary">{props.data.CatCliks}</Badge>
            </div>
        </div >
    );
};
export { CatList, CatListIteam };