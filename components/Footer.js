import React from 'react'

export default function Footer(){
    return(
        <footer role="contentinfo" class="footer">
            <div class="row">
            <ul class="footer__social-links">
                {/* <li class="footer__social-link-item">
                <a href="https://twitter.com/" title="Link to Twitter Profile">
                    <img src="./images/twitter.svg" class="footer__social-image" alt="Twitter">
                </a>
                </li>  */}
                        {/* <li class="footer__social-link-item">
                <a href="https://codepen.io/" title="Link to Codepen Profile">
                    <img src="./images/codepen.svg" class="footer__social-image" alt="Codepen">
                </a>
                </li>  */}
                <li class="footer__social-link-item">
                <a href="https://github.com/trigatto/" title="Link to Github Profile">
                    <img src="./images/github.svg" class="footer__social-image" alt="Github"/>
                </a>
                </li>
                <li class="footer__social-link-item">
                <a href="https://www.linkedin.com/in/trigatto/"/>
                    <img src="./images/linkedin.svg" title="Link to Linkedin Profile" class="footer__social-image" alt="Linkedin"/>
                </li>
            </ul>
            </div>
        </footer>
    )
}