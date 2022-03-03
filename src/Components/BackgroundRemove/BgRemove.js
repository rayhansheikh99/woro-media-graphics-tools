import React, { useState } from 'react';
import axios from "axios";

const BgRemove = () => {

    const [imgUrl, setImgUrl] = useState('')
    const [imgData, setImgData] = useState('')

    const getUrl = (e) =>{
        const url = e.target.value;
        setImgUrl(url);
    }

    // fetch api from remove.bg
    
    const removeBg = (e) => {
        e.preventDefault();
        axios({
            url: `https://api.remove.bg/v1.0/removebg`,
            method: "post",
            data: {
              image_url: imgUrl,
              size: "auto",
              format: "auto",
              type: "auto",
            },
            headers: {
              "X-Api-Key": 'mwJXVxpa3PKLuF5qso1BLm2D',
            },
            responseType: "blob",
            encoding: null,
          })
          .then((response) => {
            setImgData(URL.createObjectURL(response.data));
            setImgUrl("");
            
          })
          .catch((e) => console.log(e, "something missing"));
    }

    return (
        <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center">
          <h3 className="text-danger my-5">
            Remove Image Background from image url
          </h3>
          <div className="form-group">
            <form
              encType="multipart/form-data"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                className="form-control mb-5"
                placeholder="Enter image url"
                onChange={(e) => {getUrl(e)}}
                value={imgUrl}
              />
          
                <button
                className='btn btn-secondary'
                onClick={removeBg}
                  type="submit"
                >
                  Remove Background
                </button>
    
            </form>
          </div>
          
          {/* Edited image show here */}
          {imgData && <img alt="bgremoved" src={imgData} />}
        </div>
      </div>
    </div>
    );
};

export default BgRemove;