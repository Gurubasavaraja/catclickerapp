import React, { Component } from 'react';
import Header from '../Components/Header.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import { CatList } from '../Components/CatList.jsx'
import CatDetail from '../Components/CatDetail.jsx'
import { CatForm } from '../Components/CatForm.jsx'
import { CatGallery } from '../Components/CatGallery.jsx'

var dataList = [{
    index: 0, CatName: "Boots", CatNickName: "cap", CatCliks: 0, CatImage: "http://placekitten.com/g/200/300", CatAge: "Infant"
}, {
    index: 1, CatName: "Kidoos", CatNickName: "fal", CatCliks: 6, CatImage: " https://loremflickr.com/320/240?lock=350", CatAge: "Child"
}, {
    index: 2, CatName: "Loona", CatNickName: "panth", CatCliks: 13, CatImage: "http://placekitten.com/g/400/400", CatAge: "Young"
}, {
    index: 3, CatName: "Chinni", CatNickName: "wolf", CatCliks: 26, CatImage: "https://loremflickr.com/320/240?lock=4", CatAge: "Middle-Age"
}, {
    index: 4, CatName: "Ricky", CatNickName: "ironman", CatCliks: 41, CatImage: "https://loremflickr.com/320/240?lock=5", CatAge: "Old"
}, {
    index: 5, CatName: "Tabby", CatNickName: "scar", CatCliks: 61, CatImage: "http://placekitten.com/g/900/900", CatAge: "Very Old"
}, {
    index: 6, CatName: "Tiger", CatNickName: "ant", CatCliks: 6, CatImage: "https://loremflickr.com/320/240?lock=250", CatAge: "Child"
}, {
    index: 7, CatName: "Loona2", CatNickName: "vision", CatCliks: 13, CatImage: "https://loremflickr.com/320/240?lock=7", CatAge: "Young"
}, {
    index: 8, CatName: "Boots2", CatNickName: "hawke", CatCliks: 26, CatImage: "http://placekitten.com/g/800/900", CatAge: "Middle-Age"
}, {
    index: 9, CatName: "Ricky2", CatNickName: "spide", CatCliks: 41, CatImage: "https://loremflickr.com/320/240?lock=3", CatAge: "Old"
}, {
    index: 10, CatName: "Tiger5", CatNickName: "hulk", CatCliks: 61, CatImage: "https://loremflickr.com/320/240?lock=1", CatAge: "Very Old"
},]

class MainComponent extends Component {
    constructor() {
        super()
        this.state = { DataList: [], CatDetails: [] }
        this.storage()
    }
    catAge = (cliks, ind) => {
        switch (true) {
            case (cliks >= 0 && cliks <= 5): this.setState((prevs) => ({ DataList: prevs.DataList.map((data, index) => (index === ind ? Object.assign({}, data, { CatAge: "Infant" }) : data)) }))
                break;
            case (cliks >= 6 && cliks <= 12): this.setState((prevs) => ({ DataList: prevs.DataList.map((data, index) => (index === ind ? Object.assign({}, data, { CatAge: "Child" }) : data)) }))
                break;
            case (cliks >= 13 && cliks <= 25): this.setState((prevs) => ({ DataList: prevs.DataList.map((data, index) => (index === ind ? Object.assign({}, data, { CatAge: "Young" }) : data)) }))
                break;
            case (cliks >= 26 && cliks <= 40): this.setState((prevs) => ({ DataList: prevs.DataList.map((data, index) => (index === ind ? Object.assign({}, data, { CatAge: "Middle-Age" }) : data)) }))
                break;
            case (cliks >= 41 && cliks <= 60): this.setState((prevs) => ({ DataList: prevs.DataList.map((data, index) => (index === ind ? Object.assign({}, data, { CatAge: "Old" }) : data)) }))
                break;
            case (cliks >= 61): this.setState((prevs) => ({ DataList: prevs.DataList.map((data, index) => (index === ind ? Object.assign({}, data, { CatAge: "Very Old" }) : data)) }))
                break;
            default:
                break;
        }

    }
    doClicks = (ind) => {
        this.setState((prev) => ({ DataList: prev.DataList.map((data, index) => (index === ind ? Object.assign({}, data, { CatCliks: data.CatCliks + 1 }) : data)) }), this.catAge(this.state.DataList[ind].CatCliks, ind))
        this.setState((prev) => ({ CatDetails: prev.DataList.filter((data, index) => (index === ind)) }))
    }
    newForm = (form, img) => {
        this.setState((prev) => ({
            DataList: [...prev.DataList, {
                index: prev.DataList[prev.DataList.length - 1].index + 1, CatName: form.CatName, CatNickName: form.CatNickName, CatCliks: Number(form.CatClicks), CatImage: img.files, CatAge: ""
            }]
        }))
    }
    doFormData = (ind, form, img) => {
        this.setState((prev) => ({ DataList: prev.DataList.map((data, index) => (index === ind ? Object.assign({}, data, { CatCliks: Number(form.CatClicks), CatName: form.CatName, CatImage: img.files }) : data)) }), this.catAge(Number(form.CatClicks), ind))
        this.setState((prev) => ({ CatDetails: prev.DataList.filter((data, index) => (index === ind)) }))

    }
    storage = () => {
        localStorage.setItem("dataList", JSON.stringify(dataList))
    }
    componentWillMount() {
        this.setState({ DataList: JSON.parse(localStorage.getItem("dataList")) })
        this.setState({ CatDetails: [JSON.parse(localStorage.getItem("dataList"))[0]] })
    }


    render() {

        return (
            <div>

                <Container fluid>
                    <Row>
                        <Col style={{ minHeight: "30px" }} sm="12" md="12">
                            <Header />
                        </Col>
                    </Row>

                    <Row style={{ margin: "20px 0px", borderBottom: "1px solid rgba(0,0,0,.125)", paddingBottom: "15px" }}>
                        <Col id="leftNav" sm="2" md="2">
                            <CatList dataListProp={this.state.DataList} clickFunc={this.doClicks} />
                        </Col>
                        <Col id="center" sm="6" md="6">
                            <center> <CatDetail detailprops={this.state.CatDetails} clickFunc={this.doClicks} /></center>
                        </Col>
                        <Col id="rightNav" sm="4" md="4">
                            <center><CatForm detailprops={this.state.CatDetails} clickFunc={this.doFormData} newForm={this.newForm} /></center>
                        </Col>
                    </Row>
                    <Row style={{ margin: "0px 0px", borderTop: "1px solid rgba(0,0,0,.125)", paddingTop: "15px" }}>
                        <Col id="footBlock" sm="12" md="12">
                            <CatGallery clickFunc={this.doClicks} dataListProp={this.state.DataList} />
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default MainComponent;