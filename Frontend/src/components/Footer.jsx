import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
       <div className="footer-links">
  <div>
    <p style={{ color: "white" }}>Pages</p>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="Volunteer">About</a></li>
      <li><a href="Articles">Resources</a></li>
      <li><a href="Contact">Contact</a></li>
    </ul>
  </div>
  <div className="footer-sociallinks">
    <p style={{ color: "white" }}>Social Links</p>
    <ul>
      <li><a href="https://www.facebook.com/BrainPeace" target="_blank" rel="noopener noreferrer">Facebook</a></li>
      <li><a href="https://twitter.com/BrainPeaceOrg" target="_blank" rel="noopener noreferrer">Twitter</a></li>
      <li><a href="https://www.instagram.com/BrainPeaceOrg" target="_blank" rel="noopener noreferrer">Instagram</a></li>
    </ul>
  </div>
</div>
        <br></br>
        <div>
          <a style={{color:"white"}} href ="https://vesit.ves.ac.in/" target="https://vesit.ves.ac.in/">Vivekanand Education Society</a>
        </div>
        <div className="footer-disclaimer">
          <a style = {{color:"white"}} href={"https://drive.google.com/file/d/1h2QNPsLKTPbpzr7mX3Ae2GUMiahD2XXI/view?usp=sharing"} target={"https://drive.google.com/file/d/1h2QNPsLKTPbpzr7mX3Ae2GUMiahD2XXI/view?usp=sharing"} >Disclaimer:This website is for informational purposes only. Consult a professional for specific advice.</a>
        </div>
        <div className="footer-copyright">
          &copy; {currentYear} BrainPeace
        </div>
      </div>
    </footer>
  );
};

export default Footer;
