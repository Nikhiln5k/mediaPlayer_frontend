import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteHistory, getAllHistory } from "../services/allAPI";

function WatchHistory() {
  const [history, setHistory] = useState([]);

  const getHistory = async () => {
    const { data } = await getAllHistory();
    // console.log(data);
    setHistory(data);
  };
  console.log(history);
// function to delete history
  const handleDelete = async (id) => {
    await deleteHistory(id)
    getHistory()
  }

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <>
      <div className="container mt-5 d-flex justify-content-between p-4">
        <h3 className="fs-5">Watch History</h3>
        <Link
          to={"/home"}
          className="d-flex align-items-center fs-6"
          style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
        >
          <i class="fa-solid fa-arrow-left me-3 text-warning"></i> Back To Home
        </Link>
      </div>
      <div className="p-4">
        <table className="mt-5 container rounded" style={{marginBottom:"5rem"}}>
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th className="d-none d-md-inline">URL</th>
              <th className="d-none d-md-inline">Time Zone</th>
              <th>Action</th>
            </tr>
          </thead>
        
          <tbody>
            {history?.length > 0 ? (
              history.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.caption}</td>
                  <td className="d-none d-md-inline">
                    <a href={item.embedLink}>{item.embedLink}</a>
                  </td>
                  <td className="d-none d-md-inline">{item.timeStamp}</td>
                  <td><button onClick={()=>handleDelete(item?.id)} className='btn text-danger'><i class="fa-solid fa-trash-can"></i></button></td>
                </tr>
              ))
            ) : (
              <p>Nothing to display</p>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchHistory;
