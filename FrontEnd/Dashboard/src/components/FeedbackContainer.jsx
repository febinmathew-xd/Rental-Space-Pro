import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FeedbackContainer() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/allfeedback").then((res) => {
      res.json().then((data) => {
        setFeedbacks(data);
        console.log('feed', data)
      });
    });
  }, []);

  return (
    <>
      <div className="content">
        <div className="col-sm-12 col-xl-12">
          <div className="bg-secondary rounded h-100 p-4">
            <h6  style={{opacity:'0.7'}} className="mb-4">Feedbacks</h6>

            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Title</th>
                  <th>Feedback</th>
                </tr>
              </thead>
              <tbody>
                {feedbacks?.map((feedback, index) => {
                  return (
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{feedback.name}</td>
                      <td>{feedback.title}</td>
                      <td>{feedback.feedback}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedbackContainer;
