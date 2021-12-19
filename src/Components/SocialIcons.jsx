import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
import { StyledIcons } from "./Styled/SocialIcons.styled";

function SocialIcons(props) {
    return (
        <StyledIcons>
            <li>
                <a href="https://facebook.com">
                    <FaFacebook/>
                </a>
                <a href="https://instagram.com">
                    <FaInstagram/>
                </a>
                <a href="https://twitter.com">
                    <FaTwitter/>
                </a>
            
            </li>
        </StyledIcons>
    );
}

export default SocialIcons;