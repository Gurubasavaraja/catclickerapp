import React, { useState, useEffect } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import '../ComponentsCss/CatForm.css';


const CatForm = (props) => {
    console.log("deleteprpps", props)
    var CatNameDtr = props.detailprops[0].CatName;
    var CatClikseDtr = props.detailprops[0].CatCliks
    var CatNickNameDtr = props.detailprops[0].CatNickName
    var CatindexDtr = props.detailprops[0].index
    var CatImageDtr = props.detailprops[0].CatImage


    const [form, setValues] = useState({ CatName: "", CatClicks: 0, CatNickName: "" });
    const [show, setShow] = useState(true)
    const [img, setImg] = useState({ files: "" })
    useEffect(() => { setValues({ ...form, CatName: CatNameDtr, CatClicks: CatClikseDtr, CatNickName: CatNickNameDtr, Catindex: CatindexDtr }) }, [CatNameDtr, CatClikseDtr, CatNickNameDtr])
    useEffect(() => { setImg({ ...img, files: CatImageDtr }) }, [CatImageDtr])
    const change = (e) => {
        setValues({ ...form, [e.target.name]: e.target.value });

    }
    const onImage = (e) => {
        setImg({ ...img, files: URL.createObjectURL(e.target.files[0]) });
    }
    const reset = () => {
        setValues({ CatName: "", CatClicks: 0, CatNickName: "" });
        setImg({ files: "" });
    }
    const addCat = (e) => {
        e.preventDefault()
        setShow(true)
        props.newForm(form, img)
    }
    const onShowingForm = () => {
        setValues({ CatName: "", CatClicks: 0, CatNickName: "", Catindex: undefined, })
        setImg({ files: "" });
        setShow(false)
    }
    const onFormSubmite = (e) => {
        e.preventDefault()
        props.clickFunc(props.detailprops[0].index, form, img)

    }


    return (

        < >

            <Card id="form" style={{ width: '18rem', maxWidth: "100%", display: show ? "" : "none" }}>
                <Card.Body>
                    <div style={{ marginBottom: "15px", width: "100%", textAlign: "left" }}>
                        <Button onClick={onShowingForm} id="newForm" variant="primary" style={{ padding: "3px 6px" }} type="submit">
                            CreateCat
                            </Button>
                    </div>
                    <Form onSubmit={onFormSubmite}>
                        <Form.Group controlId="formBasicName">
                            <Form.Label style={{ float: "left" }}>Cat Name</Form.Label>
                            <Form.Control name="CatName" value={form.CatName} onChange={change} type="text" placeholder="Enter Name" required />
                        </Form.Group>
                        <Form.Group controlId="formBasicCatNickName">
                            <Form.Label style={{ float: "left" }}>Cat NickName</Form.Label>
                            <Form.Control name="CatNickName" value={form.CatNickName} onChange={change} placeholder="Enter CatNickName" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label style={{ float: "left" }}>Cat Image</Form.Label>
                            <div className="formimage" title="clickToUpload" >
                                <Form.Control onChange={onImage} id="formBasicImage" type="file" />
                            </div>
                            <span>{img.files}</span>
                        </Form.Group>
                        <Form.Group controlId="formBasicClicks">
                            <Form.Label style={{ float: "left" }}>Cat Clicks</Form.Label>
                            <Form.Control name="CatClicks" value={form.CatClicks} onChange={change} placeholder="Enter clicks" required />
                        </Form.Group>

                        <Button variant="success" style={{ float: "left", fontSize: "14px", padding: "4px" }} type="submit">
                            Save
                        </Button>
                        <Button variant="danger" style={{ float: "left", fontSize: "14px", padding: "4px", marginLeft: "5px" }} onClick={reset}>
                            Undo
                        </Button>

                    </Form>
                </Card.Body>
            </Card >
            <Card id="newform" style={{ width: '18rem', maxWidth: "100%", display: show ? "none" : "" }}>
                <Card.Header>Add a Cat to the Family</Card.Header>
                <Card.Body>
                    <Form onSubmit={addCat}>
                        <Form.Group controlId="formBasicName">
                            <Form.Label style={{ float: "left" }}>Cat Name</Form.Label>
                            <Form.Control name="CatName" value={form.CatName} onChange={change} type="text" placeholder="Enter Name" required />
                        </Form.Group>
                        <Form.Group controlId="formBasicCatNickName">
                            <Form.Label style={{ float: "left" }}>Cat NickName</Form.Label>
                            <Form.Control name="CatNickName" value={form.CatNickName} onChange={change} placeholder="Enter CatNickName" required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label style={{ float: "left" }}>Cat Image</Form.Label>
                            <div className="formimage" title="clickToUpload" >
                                <Form.Control onChange={onImage} id="formBasicImage" type="file" />
                            </div>
                            <span>{img.fileName}</span>
                        </Form.Group>
                        <Form.Group controlId="formBasicClicks">
                            <Form.Label style={{ float: "left" }}>Cat Clicks</Form.Label>
                            <Form.Control name="CatClicks" value={form.CatClicks} onChange={change} placeholder="Enter clicks" required />
                        </Form.Group>
                        <Button variant="success" style={{ float: "left", fontSize: "14px", padding: "4px" }} type="submit">
                            Create
                        </Button>
                        <Button variant="danger" onClick={() => { setShow(true) }} style={{ float: "left", fontSize: "14px", padding: "4px", marginLeft: "5px" }} >
                            Back
                        </Button>
                    </Form>
                </Card.Body>
            </Card >
        </ >
    );
};

export { CatForm };
