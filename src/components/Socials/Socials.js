import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faDiscord} from '@fortawesome/free-brands-svg-icons';

import './Socials.css';


const SocialLinks = () =>{
  return (
<div className="social_app social_home">
<FontAwesomeIcon icon={faGithub} transform="grow-10" className="icon pointer"/>
<FontAwesomeIcon icon={faDiscord} transform="grow-10" className="icon pointer"/>
<FontAwesomeIcon icon={faTwitter} transform="grow-10" className="icon pointer"/>
</div>
  )
}

export default SocialLinks;