/**
 * Shop Page
 */
import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
	InstantSearch,
	Hits,
	Stats,
	SortBy,
	Pagination,
	Configure,
	MenuSelect,
	Panel,
	SearchBox
} from 'react-instantsearch-dom';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

//Components
import Hit from './components/Hit';
import Filters from './components/Filters';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

const client = algoliasearch(
	'latency',
	'6be0576ff61c053d5f9a3225e2a90f76'
);

export default class Shop extends Component {

	render() {
		const { match } = this.props;
		return (
			<div className="shop-wrapper">
				<PageTitleBar title={<IntlMessages id="sidebar.shop" />} match={match} />
				<div className="ais-InstantSearch">
					<InstantSearch indexName="instant_search" searchClient={client}>
						<div className="mb-30 filter-sm-wrap d-block d-md-none">
							<Accordion>
								<AccordionSummary className="filter-icon" expandIcon={<i className="zmdi zmdi-tune"></i>}>
									<span className="p-0">Filters</span>
								</AccordionSummary>
								<AccordionDetails>
									<div className="d-sm-flex justify-content-between w-100">
										<Panel
											className="mx-10 mb-20 mb-sm-0"
											header="Search"
										>
											<SearchBox
												translations={{ placeholder: 'Search Products' }}
												showLoadingIndicator
											/>
										</Panel>
										<Panel
											className="mx-10 mb-20 mb-sm-0"
											header="Category"
										>
											<div className="app-selectbox-sm">
												<MenuSelect
													attribute="categories"
													limit={5}
												/>
											</div>
										</Panel>
										<Panel
											className="mx-10 mb-20 mb-sm-0"
											header="Brand"
										>
											<div className="app-selectbox-sm">
												<MenuSelect
													attribute="brand"
													limit={5}
												/>
											</div>
										</Panel>
										<Panel
											className="mx-10 mb-20 mb-sm-0"
											header="Type"
										>
											<div className="app-selectbox-sm">
												<MenuSelect
													attribute="type"
													limit={5}
												/>
											</div>
										</Panel>
									</div>
								</AccordionDetails>
							</Accordion>
						</div>
						<div className="row">
							<div className="col-lg-3 col-md-4 d-none d-md-block">
								<Filters />
							</div>
							<div className="col-lg-9 col-md-8 col-sm-12">
								<div className="shop-content">
									<div className="stats-info d-flex mb-30 justify-content-between align-items-center">
										<div className="app-selectbox-sm w-30">
											<SortBy
												defaultRefinement="instant_search"
												items={[
													{ value: 'instant_search', label: 'Featured' },
													{ value: 'instant_search_price_asc', label: 'Lowest Price' },
													{ value: 'instant_search_price_desc', label: 'Highest Price' },
												]}
											/>
										</div>
										<Stats />
									</div>
									<Configure hitsPerPage={9} />
									<Hits
										hitComponent={(props) => <Hit {...props} />}
										className="mb-30"
										showLoadingIndicator
									/>
									<div className="pagination mb-30">
										<Pagination
											totalPages={5}
											showFirst
											showLast
											showNext
											showPrevious
										/>
									</div>
								</div>
							</div>
						</div>
					</InstantSearch>
				</div>
			</div>
		)
	}
}