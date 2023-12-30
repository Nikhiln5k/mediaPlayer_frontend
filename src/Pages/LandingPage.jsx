import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LandingPage() {

  const navigateByUrl = useNavigate()


  return (
    <div>
      <Row className='mt-5 mb-5 d-flex justify-content-center align-items-center w-100'>
        <Col></Col>
        <Col lg={5}>
          <h3>Welcome To <span className='text-warning'>Media Player</span></h3>
          <p className='mt-4' style={{textAlign: "justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio architecto, dolores nesciunt doloremque consectetur totam delectus voluptate eius incidunt repellendus tempora vero mollitia earum, sit, harum qui minus saepe maiores?</p>
          <button onClick={()=>navigateByUrl('/home')} className='btn btn-warning mt-5' style={{boxShadow:"0 20px 30px rgba(255, 166, 0, 0.350)"}}>Get Started<i class="fa-solid fa-arrow-right ms-3"></i></button>

        </Col>
        <Col></Col>
        <Col lg={5}>
          <img width={500} height={500} style={{objectFit:"contain"}} src="https://i.gifer.com/CH7i.gif" alt="" />
        </Col>
      </Row><hr />

      <div className="container d-flex justify-content-center align-items-center flex-column">
        
        <h2>Features</h2>

        <div className='cards mt-5 d-flex justify-content-between align-items-center w-100'>
          <Card className='p-4' style={{ width: '22rem',boxShadow:"0 15px 80px rgba(55, 55, 333, 0.200)" }}>
            <Card.Img variant="top" style={{width: "300px", height: "300px"}} src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                
              </Card.Body>
          </Card>

          <Card className='p-4' style={{ width: '22rem',boxShadow:"0 15px 80px rgba(555, 55, 333, 0.200)"}}>
            <Card.Img variant="top" style={{width: "300px", height: "300px",}} src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
              <Card.Body>
                <Card.Title>Catagorized videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                
              </Card.Body>
          </Card>

          <Card className='p-4' style={{ width: '22rem', boxShadow:"0 15px 80px rgba(45, 555, 333, 0.200)"}}>
            <Card.Img  variant="top" style={{width: "300px", height: "300px",objectFit:"cover"}} src="https://i.pinimg.com/originals/60/92/4b/60924b514b8cb43e88a99dec7356a281.gif" />
              <Card.Body>
                <Card.Title>Watch History</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                
              </Card.Body>
          </Card>


          
        </div>


      </div><hr />

      <div className="container mt-5 border border-2 border-secondary rounded w-100 p-5 mt-5 mb-5 d-flex justify-content-center align-items-between">

          <Col lg={5}>
            <h3 className='text-warning mb-5'>simple fast and powerful</h3>
            <h6><span className='fw-bolder fs-5'>Play Everything</span> : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus facilis eaque perferendis iste aliquam dolores illo. Voluptatem at tempore earum minima est reprehenderit culpa, laborum voluptatibus officia molestiae hic libero?</h6>
            <h6><span className='fw-bolder fs-5'>Play Everything</span> : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus facilis eaque perferendis iste aliquam dolores illo. Voluptatem at tempore earum minima est reprehenderit culpa, laborum voluptatibus officia molestiae hic libero?</h6>
            <h6><span className='fw-bolder fs-5'>Play Everything</span> : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus facilis eaque perferendis iste aliquam dolores illo. Voluptatem at tempore earum minima est reprehenderit culpa, laborum voluptatibus officia molestiae hic libero?</h6>
            
          </Col>
          <Col></Col>
          <Col lg={5}>
          <iframe width="100%" height="430" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Col>
              
      </div><hr />
    </div>
  )
}

export default LandingPage