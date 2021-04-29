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
import {getPassengerRatings} from "Actions/ratingAction";
import Spinner from "../../spinner/Spinner";
import Pagination from "react-js-pagination";
import {getPassengers} from "Actions/passengerActions";
import {Link} from "react-router-dom";




const  UserRatings = ({match, getPassengerRatings, passengerRatings,  getPassengers, passengers, isLoading}) => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    useEffect(()=> {
        getPassengerRatings();
        getPassengers();
    },[])

    useEffect(()=> {
        if(passengers.length > 0) {
            setPosts(passengers.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)))
        }
    },[passengers])

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

        if(passengerRatings.length > 0) {
            passengerRatings.map(rating => {
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
            <RctCollapsibleCard heading="Passenger Ratings" fullBlock>
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
                                {posts.length > 0 && currentPosts.map((passenger, key) => (
                                    <TableRow hover key={key}>
                                        <TableCell>{passenger.firstName} {passenger.lastName}</TableCell>
                                        {getRatingStar(passenger.authId)}
                                        <TableCell>
                                            <button type="button" className="rct-link-btn text-primary" title="view details"><Link to={`/admin/passengers/${passenger.authId}`}><i className="ti-eye"/></Link></button></TableCell>
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
        getPassengerRatings: () => dispatch(getPassengerRatings()),
        getPassengers: () => dispatch(getPassengers()),
    };
}

const mapStateToProps = state => ({
    passengers: state.passenger.passengers,
    passengerRatings: state.rating.passengerRating,
    isLoading: state.loading.loading,



});

export default connect( mapStateToProps, mapDispatchToProps) (UserRatings);
