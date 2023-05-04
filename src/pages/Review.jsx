import React from "react";
import { FaQuoteLeft, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Review = () => {
  return (
    <div className="w-75 m-auto bg-danger-subtle rounded">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10 col-xl-8 text-center">
        <h2 className="fw-bold text-black d-inline px-4 border-bottom border-5 border-danger pb-1">
        Expert Reviews
      </h2>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0 pt-4">
          Expert Reviews provides authoritative and independent reviews. Our in-depth testing will help you find the perfect products to buy.
          </p>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-md-4 mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 className="mb-3">Maria Smantha</h5>
          <h6 className="text-primary mb-3">Food Blogger</h6>
          <p className="px-xl-3">
          <FaQuoteLeft className="pe-2"></FaQuoteLeft>Food blogging is a feature of food journalism interlinking a gourmet interest in food, blog writing, and food photography.
          </p>
          <ul className="list-unstyled d-flex justify-content-center mb-0">
            <li>
              <FaStar className="text-danger"></FaStar>
            </li>
            <li>
            <FaStar className="text-danger"></FaStar>
            </li>
            <li>
            <FaStar className="text-danger"></FaStar>
            </li>
            <li>
            <FaStar className="text-danger"></FaStar>
            </li>
            <li>
            <FaStarHalfAlt className="text-danger"></FaStarHalfAlt>
            </li>
          </ul>
        </div>
        <div className="col-md-4 mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 className="mb-3">Lisa Cudrow</h5>
          <h6 className="text-primary mb-3">Food Instructor</h6>
          <p className="px-xl-3">
          <FaQuoteLeft className="pe-2"></FaQuoteLeft>Cooking instructors teach the art of cooking, including food preparation, various cuisines, and techniques of cooking.
          </p>
          <ul className="list-unstyled d-flex justify-content-center mb-0">
          <li>
              <FaStar className="text-danger"></FaStar>
            </li>
            <li>
            <FaStar className="text-danger"></FaStar>
            </li>
            <li>
            <FaStar className="text-danger"></FaStar>
            </li>
            <li>
            <FaStar className="text-danger"></FaStar>
            </li>
            <li>
            <FaStarHalfAlt className="text-danger"></FaStarHalfAlt>
            </li>
          </ul>
        </div>
        <div className="col-md-4 mb-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 className="mb-3">Food Manager</h5>
          <h6 className="text-primary mb-3">Marketing Specialist</h6>
          <p className="px-xl-3">
            <FaQuoteLeft className="pe-2"></FaQuoteLeft>Overseeing food presentation. Answering customer and employee complaints. Maintaining food service budget.
          </p>
          <ul className="list-unstyled d-flex justify-content-center mb-0">
          <li>
              <FaStar className="text-danger"></FaStar>
            </li>
            <li>
            <FaStar className="text-danger"></FaStar>
            </li>
            <li>
            <FaStar className="text-danger"></FaStar>
            </li>
            <li>
            <FaStar className="text-danger"></FaStar>
            </li>
            <li>
            <FaStarHalfAlt className="text-danger"></FaStarHalfAlt>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Review;
