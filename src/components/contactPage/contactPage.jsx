import React, { Component } from 'react';
import { unstable_Box as Box } from '@material-ui/core/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faMedium, faFacebookSquare, faTwitterSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <React.Fragment>
        {/* <Box display="flex" justifyContent="space-between" m={5} p={2}>
        <Box p={2}>
          <FontAwesomeIcon style={{color: '#53f6c7'}} icon={faInstagram} size="3x" />
        </Box>
        <Box p={2}>
          <FontAwesomeIcon style={{color: '#53f6c7'}} icon={faTwitterSquare} size="3x" />
        </Box>
        <Box p={2}>
          <FontAwesomeIcon style={{color: '#53f6c7'}} icon={faFacebookSquare} size="3x" />
        </Box>
        <Box p={2}>
          <FontAwesomeIcon style={{color: '#53f6c7'}} icon={faLinkedin} size="3x" />
        </Box>
        <Box p={2}>
          <FontAwesomeIcon style={{color: '#53f6c7'}} icon={faGithubSquare} size="3x" />
        </Box>
        <Box p={2}>
          <FontAwesomeIcon style={{color: '#53f6c7'}} icon={faMedium} size="3x" />
        </Box>
      </Box> */}
      <h1>Contact Section</h1>
      </React.Fragment>
    );
  }
}
export default ContactPage;
