import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import VideoCard from "./VideoCard";
import { getAllVideo } from "../services/allAPI";

function View({uploadVideoStatus}) {


  const [allVideo, setAllVideo] = useState([]);

  const [deleteVideoStatus, setDeleteVideoStatus] = useState(false)

  const getAllUploadedVideos = async () => {
    const response = await getAllVideo();
    // console.log(response);

    const { data } = response;
    // console.log(data);
    setAllVideo(data);
  };
  // console.log(allVideo);

  useEffect(() => {
    getAllUploadedVideos();
    setDeleteVideoStatus(false)
  }, [uploadVideoStatus, deleteVideoStatus]);

  return (
    <>
      <div className="ms-5 p-3" style={{height:"50rem", overflowY:"scroll",overflowX:"hidden",borderRadius:"6px",background:"linear-gradient(to bottom, rgba(0 0 0 0.7), transparent)"}}>
        <Row>
          {allVideo?.length > 0 ? (
            allVideo.map((video)=>(
              <Col className="me-3 mt-3 mb-5" sm={12} md={6} lg={4} xl={3}>
                <VideoCard displayVideo ={video} setDeleteVideoStatus= {setDeleteVideoStatus} />
              </Col>
            ))
            
          ) : (
            <div className="d-flex justify-content-center align-items center flex-column">
              <img width={230} src="https://media0.giphy.com/media/F3r1XF5j01nZIvXTnP/giphy.gif?cid=6c09b9520il39cfm3xezdnxjefsdhl7iyjhq8pdvlboozkma&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="" />
              <p style={{fontSize:"30px",background:"linear-gradient(to bottom, blue, red)",backgroundClip:"text", color:"transparent"}}>Nothing to display !</p>
            </div>
           
          )}
        </Row>
      </div>

    </>
  );
}

export default View;
