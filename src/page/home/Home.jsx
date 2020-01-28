import React from 'react';
import { Jumbotron, Button, Container, Col, Row } from 'react-bootstrap';
import ContentBox from '../Components/ContentBox';

const PRODUCT_VALUES=[
    {"title": "Anak Menjadi Cinta", "content": "Lorem Ipsum", "image_position": "top", "image_source": ""},
    {"title": "Anak Menjadi Mampu", "content": "Lorem Ipsum", "image_position": "top", "image_source": ""},
    {"title": "Anak Menjadi Khalifah", "content": "Lorem Ipsum", "image_position": "top", "image_source": ""}
]

const PRODUCT_MISSIONS=[
    {"title": "Mulai Dari Hati", "content": "Lorem Ipsum", "image_position": "bottom", "image_source": "", "link_text": "Read More -->", "text_size": "large"},
    {"title": "Kenalkan Dengan Sunnah", "content": "Lorem Ipsum", "image_position": "bottom", "image_source": "", "link_text": "Read More -->", "text_size": "large"},
    {"title": "Akhlaq dan Manfaat", "content": "Lorem Ipsum", "image_position": "bottom", "image_source": "", "link_text": "Read More -->", "text_size": "large"}
]

class Home extends React.Component {

    getProductVision(){
        return <div className="padded-left-right text-center bg-white margin-top-md">
            <h3>Berkembang Sebagaimana Dia Diciptakan</h3>
            <div className="flexed column-content">
                <div>
                    <video></video>
                </div>
                {PRODUCT_VALUES.map( (value) => {
                    return <ContentBox image_position={value.image_position} image_source={value.image_source} title={value.title} content={value.content} />
                })}
            </div> 
        </div> 
    };

    getProductMission(){
        return <div className="padded-left-right text-center bg-white  margin-top-md">
            <h3>Bisa Karena Terbiasa, Bukan Dipaksakan</h3>
            <div className="flexed column-content">
                {PRODUCT_MISSIONS.map( (value) => {
                    return <ContentBox text_size={value.text_size} image_position={value.image_position} image_source={value.image_source} title={value.title} content={value.content} />
                })}
            </div> 
        </div> 
    }

    getTestimonials(){
        return <div className="text-center bg-white  margin-top-md"> 
            <h3>Diterapkan Para Arsitek Peradaban</h3>
            <div className="flexed column-content">
                Slider
            </div>        
            <div className="flexed">
                <div><img src="" alt="logo_sekolah"/></div>
                <div><img src="" alt="logo_sekolah"/></div>
            </div>
             <div className="flexed">
                <div><img src="" alt="logo_sekolah"/></div>
                <div><img src="" alt="logo_sekolah"/></div>
            </div>
             <div className="flexed">
                <div><img src="" alt="logo_sekolah"/></div>
                <div><img src="" alt="logo_sekolah"/></div>
            </div>
             <div className="flexed">
                <div><img src="" alt="logo_sekolah"/></div>
                <div><img src="" alt="logo_sekolah"/></div>
            </div>
        </div>
    }

    render(){
        return <React.Fragment>
            <Jumbotron>
                <Container id="intro" className="text-center">
                        <h1>Sesuai Fitrah, Sesuai dengan Sang Pencipta</h1>
                        <Button variant="outline-primary" size="lg">Coba Pendidikan Fitrah</Button>
                        <Button variant="primary" size="lg">Apa sih Fitrah itu?</Button> 
                </Container>
            </Jumbotron>
            {this.getProductVision()}
            {this.getProductMission()}
            {this.getTestimonials()}
            <div className="flexed column-content items-center margin-top-md">
                <h3>Bergabung Bersama Kami</h3>
                <img src=""/>
                <p>Lorem Ipsum</p>
            </div>
        </React.Fragment>
    }
   
}
export default Home;
