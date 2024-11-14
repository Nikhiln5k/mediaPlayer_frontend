import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { addToHistory, deleteVideo } from '../services/allAPI';

function VideoCard({displayVideo,setDeleteVideoStatus}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true)

    const {caption, embedLink} = displayVideo
    const today = new Date
    // console.log(today);

    let timeStamp = new Intl.DateTimeFormat('en-US', {
      year:"numeric",
      month:"2-digit",
      day:"2-digit",
      hour:"2-digit",
      minute:"2-digit",
      second:"2-digit"
    }).format(today)
    console.log(timeStamp);

    let videoDetails = {
      caption,
      embedLink,
      timeStamp
    }
  
    await addToHistory(videoDetails)
    
  };

  const removeVideo = async(id)=>{
     const response = await deleteVideo(id)
     console.log(response);
    setDeleteVideoStatus(true)
  }

  const dragStarted = (e, id) => {
    console.log(`card no:${id} started dragging`);
    e.dataTransfer.setData("videoId",id)
  }

  return (
    <>
        <Card className='w-100' style={{cursor:"pointer",boxShadow:"0 15px 80px rgba(33, 44, 535, 0.120)" }} draggable onDragStart={(e)=>dragStarted(e,displayVideo?.id)}>
            <Card.Img onClick={handleShow} height={150} style={{objectFit:"cover"}} variant="top" src={displayVideo.url} />
            <Card.Body className='d-none d-md-inline'>
                <Card.Title className='d-flex justify-content-between'>
                    <h6>{displayVideo.caption}</h6>
                    <button onClick={()=>removeVideo(displayVideo?.id)} className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
                </Card.Title>

            </Card.Body>
        </Card>


        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-video me-2 ms-3 text-warning"></i>{displayVideo.caption} </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <iframe width="100%" height="430" src={`${displayVideo.embedLink}?autoplay=1`} title="POV (point of view) LCU short film | An action short film | 2023 | Lokesh kanagaraj | Leo | Rolex" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

        </Modal.Body>
        
          
      </Modal>
    </>
  )
}

export default VideoCard