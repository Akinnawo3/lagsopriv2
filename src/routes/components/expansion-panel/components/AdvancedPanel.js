/**
* Advanced Panel
*/
import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

class AdvancedPanel extends React.Component {
	state = {
		expanded: null,
	};
	handleChange = panel => (event, expanded) => {
		this.setState({
			expanded: expanded ? panel : false,
		});
	};
	render() {
		return (
			<div>
				<Accordion defaultExpanded className="bg-info text-white">
					<AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
						<div className="col-md-3">
							<Typography className="text-white">Location</Typography>
						</div>
						<div className="col-md-3">
							<Typography className="text-white">Select trip destination</Typography>
						</div>
					</AccordionSummary>
					<AccordionDetails>
						<div className="col-md-3" />
						<div className="col-md-3">
							<Chip label="Barbados" className="bg-warning text-white" onDelete={() => { }} />
						</div>
						<div className="col-md-3">
							<Typography type="caption">
								Select your destination of choice<br />
								<a href="#" onClick={e => e.preventDefault()}>Learn more</a>
							</Typography>
						</div>
					</AccordionDetails>
					<Divider />
					<AccordionActions>
						<Button variant="contained" color="primary" className="text-white">Cancel</Button>
						<Button variant="contained" className="btn-danger text-white">Save</Button>
					</AccordionActions>
				</Accordion>
			</div>
		);
	}
}

export default AdvancedPanel;
