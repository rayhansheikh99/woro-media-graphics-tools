import React from 'react';

const BgRemove = () => {
    return (
        <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center">
          <h1 className="text-success my-5">
            Remove Background from image url via api call
          </h1>
          <div className="form-group">
            <form
              encType="multipart/form-data"
              onSubmit=''
            >
              <input
                type="text"
                className="form-control mb-5"
                placeholder="Enter image url"
               
                value=""
              />
          
                <button
                  type="submit"
                >
                  Remove bg
                </button>
    
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default BgRemove;