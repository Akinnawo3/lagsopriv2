/**
* Controlled Panel
*/
import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';

class ControlledPanel extends React.Component {
  state = {
    expanded: null,
  };
  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { expanded } = this.state;
    return (
      <div>
        <Accordion expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
            <Typography className="col-md-3">General settings</Typography>
            <Typography className="text-primary">I am an expansion panel</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
              maximus est, id dignissim quam.
              </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
            <Typography className="col-md-3">Users</Typography>
            <Typography className="text-primary">
              You are currently not an owner
              </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
              diam eros in elit. Pellentesque convallis laoreet laoreet.
              </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
            <Typography className="col-md-3">Advanced settings</Typography>
            <Typography className="text-primary">
              Filtering has been entirely disabled for whole web server
              </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
              eros, vitae egestas augue. Duis vel est augue.
              </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }
}

export default ControlledPanel;
