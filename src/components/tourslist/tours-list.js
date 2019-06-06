import React from "react";

const ToursList = () => {
  return (
    <div className="container">
      <div className="row no-gutters position-relative">
        <div className="col-md-6 col-lg-6 mb-md-0 p-md-4">
          <img
            className="w-100"
            src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
            alt="iii"
          />
        </div>
        <div className="col-md-6 col-lg-6 position-static p-4 pl-md-0">
          <h5 className="mt-0">Columns with stretched link</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
          <a
            href="https://mdbootstrap.com/education/bootstrap/quick-start/"
            className="stretched-link"
          >
            Go somewhere
          </a>
        </div>
      </div>
      <div className="row no-gutters position-relative">
        <div className="col-md-6 col-lg-6 position-static p-4 pl-md-0">
          <h5 className="mt-0">Columns with stretched link</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
          <a
            href="https://mdbootstrap.com/education/bootstrap/quick-start/"
            className="stretched-link"
          >
            Go somewhere
          </a>
        </div>
        <div className="col-md-6 col-lg-6 mb-md-0 p-md-4">
          <img
            className="w-100"
            src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
            alt="iii"
          />
        </div>
      </div>
    </div>
  );
};

export default ToursList;
