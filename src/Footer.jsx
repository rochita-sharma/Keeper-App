import React from 'react';
import ReactDOM from 'react-dom';
// import "../public/styles.css";

function Footer(){
    var time = new Date();
    var year = time.getFullYear();
        return(
        <footer>
            <p>Copyright ⓒ {year}</p>
        </footer>
    )
}
export default Footer;