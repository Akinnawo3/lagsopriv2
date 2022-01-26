import React, {useState, useEffect, Fragment, useRef} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import Pagination from "react-js-pagination";
import {connect} from "react-redux";
import {getPromoUsers, getPromoUsersCount} from "../../actions/promoDiscountsAction";
export let onAddUpdateUserModalClose;
const PromoBeneficiaries = (props) => {
  const {match, loading, getPromoUsers, promoUsers, getPromoUsersCount, promoUsersCount} = props;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getPromoUsers(1, match.params.id);
    getPromoUsersCount(match.params.id);
  }, [match.params.id]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    getPromoUsers(pageNumber, match.params.id);
    window.scrollTo(0, 0);
  };

  console.log(promoUsers);

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Promo Beneficiaries"} match={match} />
      {!loading && (
        <RctCollapsibleCard heading=" Promo Beneficiaries" fullBlock>
          <div className="table-responsive" style={{minHeight: "50vh"}}>
            <Table>
              <TableHead>
                <TableRow hover>
                  <TableCell> Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone Number</TableCell>
                  <TableCell> Number of rides</TableCell>
                  {/* <TableCell>Actions</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                <Fragment>
                  {promoUsers?.length > 0 &&
                    promoUsers?.map((item, key) => (
                      <TableRow hover key={key}>
                        <TableCell>{`${item?.first_name} ${item?.last_name}`}</TableCell>
                        <TableCell>{item?.email}</TableCell>
                        <TableCell>{item?.phone_number}</TableCell>
                        <TableCell>{item?.num_of_rides}</TableCell>
                        <TableCell>
                          <button type="button" className="rct-link-btn text-primary" title="view details">
                            {/* <Link to={`/admin/promo-discounts/${promoDiscount.promo_code_id}`}>
                              <i className="ti-eye" />
                            </Link> */}
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                </Fragment>
              </TableBody>
            </Table>
            {promoUsers?.length < 1 && <div className="d-flex align-items-center justify-content-center w-100 p-5">No Promo Beneficiaries Found</div>}
          </div>
          <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
            {promoUsers?.length > 0 && <Pagination activePage={currentPage} itemClass="page-item" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={promoUsersCount} onChange={paginate} />}
          </div>
        </RctCollapsibleCard>
      )}
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getPromoUsers: (page_no, promo_code_id) => dispatch(getPromoUsers(page_no, promo_code_id)),
    getPromoUsersCount: (promo_code_id) => dispatch(getPromoUsersCount(promo_code_id)),
  };
}

const mapStateToProps = (state) => ({
  promoUsers: state.promoDiscounts.promoUsers,
  promoUsersCount: state.promoDiscounts.promoUsersCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(PromoBeneficiaries);
