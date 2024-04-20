import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines, faShield, faXmarkCircle, } from '@fortawesome/free-solid-svg-icons';

const data = [
  {
    
    icons: <FontAwesomeIcon icon={ faShield} />,
    heading: "Best interest rates on the market",
    detail:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  },
  {
    
    icons :<FontAwesomeIcon icon={faXmarkCircle}/>,
    heading: "Prevent unstable prices",
    detail:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  },
  {
    icons:<FontAwesomeIcon icon={faGripLines} />,
    heading: "Best price on the market",
    detail:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  },
];
export default data;