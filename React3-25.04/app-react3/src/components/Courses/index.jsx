import React from 'react';

const Courses = ({ data }) => {
  return (
    <div id="cards" className='row'>
      {data &&
        data.map((q,idx) => {
          return (
            <div className="card" style={{ width: '18rem' }} key={idx}>
              <img src={q.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{q.name}</h5>
                <p className="card-text">
                  {q.price}
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Courses;
