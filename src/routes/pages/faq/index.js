/**
 * Faq Page
 */
import React, { Component } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { Helmet } from "react-helmet";
// api
import api from 'Api';

//Components
import SearchIdeas from './components/SearchIdeas';

class Faq extends Component {

	state = {
		faqs: null
	}

	componentDidMount() {
		this.getFaqs();
	}

	// get faqs
	getFaqs() {
		api.get('faqs.js')
			.then((response) => {
				this.setState({ faqs: response.data });
			})
			.catch(error => {
				// error handling
			})
	}

	render() {
		const { faqs } = this.state;
		return (
			<div className="faq-page-wrapper">
				<Helmet>
					<title>Faqs</title>
					<meta name="description" content="Reactify Faqs Page" />
				</Helmet>
				<SearchIdeas />
				{faqs && faqs.map((faq, key) => (
					<Accordion key={key} className="mb-30 panel" defaultExpanded>
						<AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>} className="m-0 panel-heading">
							<h4>{faq.title}</h4>
						</AccordionSummary>
						<AccordionDetails>
							<p>
								{faq.content}
							</p>
						</AccordionDetails>
					</Accordion>
				))}
			</div>
		)
	}
}

export default Faq;
