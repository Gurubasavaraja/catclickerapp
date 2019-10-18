import React from 'react';
import { Card, CardDeck, ListGroup } from 'react-bootstrap'
import defaultImage from '../Images/cat.jpg';

const CatGalleryIteam = (props) => {
    return (
        <div onClick={() => { props.onClicks(props.id) }}>
            <Card style={{ width: '10rem', maxWidth: "100%", margin: "10px" }}>
                <Card.Title style={{ textAlign: "left", marginLeft: "10px" }}>{props.data.CatName}</Card.Title>
                <Card.Subtitle style={{ textAlign: "left", marginLeft: "10px", color: "#00000075" }}>No. of clicks:{props.data.CatCliks}</Card.Subtitle>
                <Card.Img variant="top" style={{ height: "10rem" }} src={props.data.CatImage ? props.data.CatImage : defaultImage} />
                <Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item style={{ textAlign: "left", padding: "5px 0px" }}>{props.data.CatName},{props.data.CatNickName}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    );
};
const CatGallery = (props) => {
    return (
        <>
            <Card.Header style={{ border: "0px", backgroundColor: "unset", textAlign: "left", fontSize: "25px" }}>Cat Image Gallery</Card.Header>
            <CardDeck>
                {props.dataListProp && props.dataListProp.map((data, index) => <CatGalleryIteam key={index} id={index} onClicks={props.clickFunc} data={data} />)}
            </CardDeck>
        </>
    );
};


export { CatGallery, CatGalleryIteam };
