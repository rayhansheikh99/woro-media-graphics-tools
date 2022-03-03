import React, { useState } from 'react';
import Navbar from './../Navbar/Navbar';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css'
import { Button } from 'react-bootstrap';

const ImageCropper = () => {

    const [src, selectFile] = useState(null)
    const handleFileChange = e => {
        selectFile(URL.createObjectURL(e.target.files[0]))
    }

    const [image, setImage] = useState(null)
    const[crop, setCrop] = useState({aspect: 16/9});
    const [result, setResult] = useState(null)


    function getCroppedImg() {
        const canvas = document.createElement("canvas");
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;    
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext("2d");

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height,
          );


        
          const base64Image =canvas.toDataURL('image/jpeg');
          setResult(base64Image);
          console.log(result)
    }
    return (
        <div className=''>
            <Navbar/>

            <div className='row mt-5 mx-5'>
                <div className='col-6'>
                    <input type='file' accept='image/*' onChange={handleFileChange}/>
                </div>
                {src && <div className='col-6'>
                      <ReactCrop src={src} onImageLoaded={setImage} crop={crop} onChange={setCrop}>
                            </ReactCrop>
                        <Button className='btn btn-success' onClick={getCroppedImg}>Crop Image</Button> 
                         

                </div>}

            </div>
            {result && <div className='mt-5 text-center'>
                <h4 className='mb-4'>Cropped Image</h4>
                    <img src={result} alt="cropped" className='img-fluid w-25 h-25 mb-5 rounded mx-auto d-block'/>

                </div>}

            
        </div>
    );
};

export default ImageCropper;