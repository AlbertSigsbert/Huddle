import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
import { StyledIcons } from "./Styled/SocialIcons.styled";

function SocialIcons(props) {
    return (
        <StyledIcons>
            <li>
                <a href="https://facebook.com"  aria-label="Facebook">
                    <FaFacebook/>
                </a>
                <a href="https://instagram.com"  aria-label="Instagram">
                    <FaInstagram/>
                </a>
                <a href="https://twitter.com"  aria-label="Twitter">
                    <FaTwitter/>
                </a>
            
            </li>
        </StyledIcons>
    );
}

export default SocialIcons;