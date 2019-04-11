import {
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faPlusCircle,
    faPhone,
    faEnvelope,
    faMapMarkedAlt,
  } from "@fortawesome/free-solid-svg-icons";

  
  import { library} from "@fortawesome/fontawesome-svg-core";
  import { faFacebookF,faGithub,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; 

  const Icons = () => {
    return library.add(
      faTrash,
      faSignOutAlt,
      faEdit,
      faSpinner,
      faPlusCircle,
      faPhone,
      faEnvelope,
      faMapMarkedAlt,
      faFacebookF,
      faGithub,
      faLinkedinIn
    );
  };
  
  export default Icons;
