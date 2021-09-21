import React, {useState, useEffect, Fragment, useRef} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import Pagination from "react-js-pagination";
import {connect} from "react-redux";
import {deleteUser, getUserCount, getUsers, searchUsers} from "Actions/userAction";
import EmptyData from "Components/EmptyData/EmptyData";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";
import SearchComponent from "Components/SearchComponent/SearchComponent";

const  Users = ({match, getUsers, loading, users, userCount, getUserCount,  deleteUser, searchUsers}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [deleteId, setDeleteId] = useState(null)
    const inputEl = useRef(null);

    useEffect(()=> {
        getUsers(1, true);
        getUserCount()
    },[])


    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        getUsers(pageNumber)
        window.scrollTo(0, 0);
    };

    const onDelete = (id) => {
        inputEl.current.open();
        setDeleteId(id)
    }



    return (
        <div className="table-wrapper">
            <PageTitleBar title={"Users"} match={match} />
            <RctCollapsibleCard heading="Users" fullBlock>
                <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
                    <SearchComponent getPreviousData={getUsers} getSearchedData={searchUsers} setCurrentPage={setCurrentPage} getCount={getUserCount} />
                </li>
                {!loading && users.length > 0 &&
                    <>
                <div className="table-responsive" style={{minHeight: "50vh"}}>
                    <Table>
                        <TableHead>
                            <TableRow hover>
                                <TableCell>First Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>Phone No</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Fragment>
                                {users.map((user, key) => (
                                    <TableRow hover key={key}>
                                        <TableCell>{user.first_name}</TableCell>
                                        <TableCell>{user.last_name}</TableCell>
                                        <TableCell>{user.phone_number}</TableCell>
                                        <TableCell>{user.user_type}</TableCell>

                                        <TableCell>
                                            <button type="button" className="rct-link-btn ml-lg-3 text-danger" onClick={() => onDelete(user.auth_id)}><i className="ti-trash"></i></button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </Fragment>
                        </TableBody>
                    </Table>
                </div>
                <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
                    <Pagination
                        activePage={currentPage}
                        itemClass="page-item"
                        linkClass="page-link"
                        itemsCountPerPage={20}
                        totalItemsCount={userCount}
                        onChange={paginate}
                    />
                </div>
                    </>
                }
                {users.length < 1 && <EmptyData />}
            </RctCollapsibleCard>
            <DeleteConfirmationDialog
                ref={inputEl}
                title="Are You Sure You Want To Delete?"
                message="This will delete User permanently."
                onConfirm={() => {
                    deleteUser(deleteId, users);
                    inputEl.current.close();
                }}
            />

        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getUsers: (page_no, loading) => dispatch(getUsers(page_no, loading)),
        deleteUser: (auth_id, users) => dispatch(deleteUser(auth_id, users)),
        getUserCount: () => dispatch(getUserCount()),
        searchUsers: (searchData) => dispatch(searchUsers(searchData)),
    };
}

const mapStateToProps = state => ({
    users: state.users.users,
    userCount: state.users.userCount,
    loading: state.loading.loading,
});

export default connect( mapStateToProps, mapDispatchToProps) (Users);
