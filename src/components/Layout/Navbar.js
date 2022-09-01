import React, {useState,useEffect}  from 'react'

import "./../Layout/Navbar.css"
function Navbar() {
    return (
  
  <>
  
  
 <nav class="navbar">
 
  <div class="container-fluid">
  <img src="/Img/TITULOSAF.png"/>
    <form class="d-flex" role="search">
    <button class="btn btn-outline-light me-5" type="submit">¿Qué es SAF?</button>
    <button class="btn btn-outline-light me-5" type="submit">Contacto</button>
    <button class="btn btn-outline-light me-5" type="submit">Registro</button>
    <button class="btn btn-outline-light me-5" type="submit">Inicio de sesion</button>
    </form>
   
  </div>
 
</nav> 

  </>
      
  
    );
  }
  
  export default Navbar;
  