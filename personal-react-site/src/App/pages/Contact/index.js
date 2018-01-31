import React from 'react'

import "./style.css";

function Contact() {
    return (
        <div>
        <h2>What should we roll...</h2>
        <ul>
            <li><strong>"One good thing about music, when it hits you, you feel no pain." - Bob Marley</strong>
            </li>
            <li>Got a comment, need a comment, leave a comment.</li>
        </ul>
            <form class="form-style-9">
                <ul>
                    <li>
                        <input type="text" name="field1" class="field-style field-split align-left" placeholder="Name" />
                        <input type="email" name="field2" class="field-style field-split align-right" placeholder="Email" />
                    </li>
                    <li>
                        <input type="text" name="field3" class="field-style field-split align-left" placeholder="Phone" />
                        <input type="url" name="field4" class="field-style field-split align-right" placeholder="Website" />
                    </li>
                    <li>
                        <input type="text" name="field3" class="field-style field-full align-none" placeholder="Subject" />
                    </li>
                    <li>
                        <textarea name="field5" class="field-style" placeholder="Message"></textarea>
                    </li>
                    <li>
                        <input type="submit" value="Send Message" />
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default Contact
