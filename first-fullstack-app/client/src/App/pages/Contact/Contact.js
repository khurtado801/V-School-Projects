import React, { Component } from 'react'

import "./Contact.css";

function Contact() {
    return (
        <div>
        <div className="contact-header">
            <p>You got something to say....contact me</p>
        </div>
            <form className="form-style-9">
                <ul>
                    <li>
                        <input type="text" name="field1" className="field-style field-split align-left" placeholder="Name" />
                        <input type="email" name="field2" className="field-style field-split align-right" placeholder="Email" />
                    </li>
                    <li>
                        <input type="text" name="field3" className="field-style field-split align-left" placeholder="Phone" />
                        <input type="url" name="field4" className="field-style field-split align-right" placeholder="Website" />
                    </li>
                    <li>
                        <input type="text" name="field3" className="field-style field-full align-none" placeholder="Subject" />
                    </li>
                    <li>
                        <textarea name="field5" className="field-style" placeholder="Message"></textarea>
                    </li>
                    <li>
                        {/* <input type="submit" value="Send Message" /> */}
                        <button type="submit">Send Message</button>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default Contact