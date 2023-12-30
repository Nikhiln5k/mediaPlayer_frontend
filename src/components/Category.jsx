import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Row, Col, Card } from "react-bootstrap";
import { useState } from "react";
import {
  addToCategory,
  deleteCategory,
  getAllCategory,
  getVideo,
  updateCategory,
} from "../services/allAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VideoCard from "./VideoCard";

function Category() {
  const [categoryName, setCategoryName] = useState({});
  // console.log(categoryName);

  const [allcategory, setAllCategory] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // function to add category

  const handleAddCategory = async () => {
    if (categoryName) {
      let body = {
        categoryName,
        allVideos: [],
      };
      // make api call

      const response = await addToCategory(body);
      // console.log(response);

      if (response.status >= 200 && response.status < 300) {
        toast.success("category successfully added");
        // to make the state null after successfull addition
        setCategoryName("");
        // to close modal
        handleClose();
      } else {
        console.log(response);
        toast.warning("something went wrong please try again later");
      }
    } else {
      toast.info("please fill the category name");
    }
  };

  // function to get All category
  const getCategory = async () => {
    const { data } = await getAllCategory();
    // console.log(data);
    setAllCategory(data);
  };
  // console.log(allcategory);

  // function to delete catgory

  const handleDelete = async (id) => {
    await deleteCategory(id);
    getAllCategory();
  };

  // dragover event listener
  const dragOver = (e) => {
    // this will prevent reload so that the data we send from videoCard.jsx wont be lost
    e.preventDefault();
    console.log("inside dragOver");
  };

  const videoDrop = async (e, categoryId) => {
    console.log(`droped inside the category id : ${categoryId}`);

    // to get the videoid that send from videoCard component
    const videoid = e.dataTransfer.getData("videoId");
    console.log(videoid);

    // api to get the particular video that is draged
    const { data } = await getVideo(videoid);
    console.log(data);

    // to find the particular category with the specified id
    let selectedCategory = allcategory?.find((item) => item.id === categoryId);
    console.log(selectedCategory);
    // data is added to the allVideos array in the particular category with the specified id
    selectedCategory.allVideos.push(data);
    console.log(selectedCategory);

    await updateCategory(categoryId, selectedCategory);
    getAllCategory();
  };

  useEffect(() => {
    getCategory();
  }, [categoryName, handleDelete]);

  return (
    <>
      <div className="d-grid">
        <button
          onClick={handleShow}
          style={{ boxShadow: "0 15px 30px rgba(255, 166, 0, 0.250)" }}
          className="btn btn-warning"
        >
          Add Category
        </button>
      </div>

      <div
        style={{ height: "50rem", overflowY: "scroll", overflowX: "hidden" }}
      >
        {allcategory?.length > 0 ? (
          allcategory.map((item) => (
            <div
              className="mt-5 rounded p-3"
              style={{ border: "1px solid #223",boxShadow:"0 15px 80px rgba(33, 44, 535, 0.120)" }}
            >
              <div
                className="d-flex justify-content-between align-items-center"
                droppable
                onDragOver={(e) => dragOver(e)}
                onDrop={(e) => videoDrop(e, item?.id)}
              >
                <h6 className="mt-2">{item.categoryName}</h6>
                <button
                  onClick={() => handleDelete(item?.id)}
                  className="btn btn-outline-danger"
                >
                  <i className="fa-solid fa-multiply"></i>
                </button>
              </div>
              <Row>
                <Col sm={12}>
                  {item.allVideos?.length > 0 ? (
                    item.allVideos.map((video) => (
                      <div className="d-flex mt-2">
                        <img style={{width:"50px",height:"50px",objectFit:"cover"}} src={video.url} alt="" />
                        <div className="d-flex flex-column">
                          <p className="ms-3 mt-2">{video.caption}</p>
                          <p className="ms-3"><a href={video.embedLink}>{video.embedLink.slice(0,15)}...</a></p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>Nothing to display!</p>
                  )}
                </Col>
              </Row>
            </div>
          ))
        ) : (
          <div className="d-flex justify-content-center">
            <p className="mt-5">No Categories!</p>
          </div>
        )}
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <i class="fa-solid fa-pen ms-3 text-warning"></i>Add new category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                onChange={(e) => setCategoryName(e.target.value)}
                placeholder="Enter category name"
              />
            </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="primary">
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position="top-center" theme="colored" autoClose="2000" />
    </>
  );
}

export default Category;
