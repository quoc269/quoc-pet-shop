import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
const Footer = () => {
    return (
     
            <div
                style={{
                    background: `rebeccapurple`,
                    backgroundColor: `#663399`,
                    padding:30,            
                }}
                className="row"
            >
                <div style={{ color: `white`,}} className="col">
                <h3> CONTACT FORM</h3>
                <form 
                    className="form-horizontal"
                    name="contact" 
                    method="POST" 
                    data-netlify="true"
                    netlify-honeypot="bot-field"                    
                >
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="form-group">
                    <label className="control-label col-sm-2" for="email">Email:</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="email" name="email" placeholder="Enter email"/>
                    </div>
                    </div>
                    <div className="form-group">
                    <label className="control-label col-sm" for="name">Name:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" />
                    </div>
                    </div>
                    <div className="form-group">
                    <label className="control-label col-sm" for="msg">Message:</label>
                    <div className="col-sm-10">
                        <textarea  className="form-control" id="msg" name="msg" placeholder="Your message" />
                    </div>
                    </div>            
                    <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-warning my-3">Submit</button>
                    </div>
                    </div>
                </form>
                </div>
                <div style={{ color: `white`,}} className="col">
                <h3> ABOUT ME</h3>
                <p>Email: quoc269@gmail.com</p>
                <p>Mobile: +84 908281090</p>
                </div>
                <div className="col">
                <footer
                    style={{
                    marginTop: `2rem`,
                    color: `white`,
                    }}
                >
                    © {new Date().getFullYear()}, Design by
                    {` `}
                    <a href="https://www.facebook.com/nguyen.v.quoc.75">QUOC NGUYEN</a>
                </footer>
                </div>
                
            </div>
        
    )
}

export default Footer