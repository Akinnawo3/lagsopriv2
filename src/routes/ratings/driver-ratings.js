import React, {useEffect, Fragment, useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import {connect} from "react-redux";
import StarRatings from "react-star-ratings";
import {getDriverRatings} from "Actions/ratingAction";
import {getDrivers} from "Actions/driverAction";
import Spinner from "../../spinner/Spinner";
import Pagination from "react-js-pagination";
import {Link} from "react-router-dom";




const  DriverRatings = ({match, getDriverRatings, driverRatings, getDrivers, drivers, isLoading}) => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    useEffect(()=> {
        getDriverRatings();
        getDrivers();
    },[])

    useEffect(()=> {
        if(drivers.length > 0) {
            setPosts(drivers.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)))
        }
    },[drivers])

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    };

    var value = 0
  const  getRatingStar =  (id) => {
        let star = <TableCell>
            <StarRatings
                rating={value}
                starRatedColor="red"
                numberOfStars={5}
                starDimension="18px"
            />
        </TableCell>

      if(driverRatings.length > 0) {
          driverRatings.map(rating => {
              if(rating.userId == id) {
                  value = rating.rating
              }
          })
      }
      return star
  }


    return (
        <div className="table-wrapper">
            <PageTitleBar title={"Ratings"} match={match} />
            {isLoading && <Spinner />}
            {!isLoading &&
            <RctCollapsibleCard heading="Driver Ratings" fullBlock>
                <div className="float-right">
                    <a href="#" onClick={e => e.preventDefault()} className="btn-sm btn-outline-default mr-10">Export to Excel</a>
                    {/*<a href="#" onClick={(e) => opnAddNewUserModal(e)} color="primary" className="caret btn-sm mr-10">Add New Driver <i className="zmdi zmdi-plus"></i></a>*/}
                </div>
                <div className="table-responsive">
                    <Table>
                        <TableHead>
                            <TableRow hover>
                                <TableCell>Full Name</TableCell>
                                <TableCell>Ratings</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Fragment>
                                {posts.length > 0 && currentPosts.map((driver, key) => (
                                    <TableRow hover key={key}>
                                        <TableCell>{driver.firstName} {driver.lastName}</TableCell>
                                        {getRatingStar(driver.authId)}
                                        <TableCell>
                                            <button type="button" className="rct-link-btn text-primary" title="view details"><Link to={`/admin/drivers/${driver.authId}`}><i className="ti-eye"/></Link></button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </Fragment>
                        </TableBody>
                    </Table>
                </div>
                <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
                    {posts.length > 0 &&
                    <Pagination
                        activePage={currentPage}
                        itemClass="page-item"
                        linkClass="page-link"
                        itemsCountPerPage={postsPerPage}
                        totalItemsCount={posts.length}
                        onChange={paginate}
                    />}
                </div>
            </RctCollapsibleCard>}
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getDriverRatings: () => dispatch(getDriverRatings()),
        getDrivers: () => dispatch(getDrivers()),
    };
}

const mapStateToProps = state => ({
    drivers: state.driver.drivers,
    driverRatings: state.rating.driverRating,
    isLoading: state.loading.loading,



});

export default connect( mapStateToProps, mapDispatchToProps) (DriverRatings);
