import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='text-center mt-5 '>

       <Link to='/bgremover'><Button className='mx-3'>Background Remover</Button></Link>
       <Link to='/imagecropper'> <Button>Image Cropper</Button></Link>

        </div>
    );
};

export default Navbar;