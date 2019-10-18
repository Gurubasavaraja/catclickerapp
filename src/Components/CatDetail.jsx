import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import defaultImage from '../Images/cat.jpg'

const CatDetail = (props) => {
    const { CatName, CatCliks, CatNickName, CatImage, CatAge, index } = props.detailprops[0] ? props.detailprops[0] : ""

    return (
        < >
            <Card onClick={() => { props.clickFunc(index) }} style={{ width: '30rem', maxWidth: "100%" }}>
                <Card.Title style={{ textAlign: "left", marginLeft: "10px" }}>{CatName}</Card.Title>
                <Card.Subtitle style={{ textAlign: "left", marginLeft: "10px", color: "#00000075" }}>No. of clicks:{CatCliks}</Card.Subtitle>
                <Card.Img variant="top" style={{ height: "20rem" }} src={CatImage ? CatImage : defaultImage} />
                <Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item style={{ textAlign: "left", padding: "5px 0px" }}>{CatName},{CatNickName}</ListGroup.Item>
                        <ListGroup.Item style={{ border: "0px", textAlign: "left", padding: "5px 0px" }}>{CatAge}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </>
    );
};

export default CatDetail;