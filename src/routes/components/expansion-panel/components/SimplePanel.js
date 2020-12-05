/**
* Simple Panel
*/
import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';

class SimplePanel extends React.Component {
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
				<Accordion>
					<AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
						<Typography>Expansion Panel 1</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
              </Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
						<Typography>Expansion Panel 2</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
              </Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion disabled>
					<AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
						<Typography>Disabled Expansion Panel</Typography>
					</AccordionSummary>
				</Accordion>
			</div>
		);
	}
}

export default SimplePanel;
