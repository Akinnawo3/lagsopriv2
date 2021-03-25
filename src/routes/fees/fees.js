import React, {useState, useEffect, Fragment, useRef} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Button from "@material-ui/core/Button";
import Pagination from "react-js-pagination";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";
import {connect} from "react-redux";
import Spinner from "../../spinner/Spinner";
import IconButton from "@material-ui/core/IconButton";
import MobileSearchForm from "Components/Header/MobileSearchForm";
import {CSVLink} from "react-csv";
import LinearProgress from "@material-ui/core/LinearProgress";
import {createFee, deleteFee, getFees, updateFee} from "Actions/feesAction";

const  Fees = (props) => {
    const {
        match,
        getFees,
        fees,
        createFee,
        updateFee,
        loading,
        deleteFee,
        loadingStatus} = props
    const [addNewUserModal, setAddNewUserModal] = useState(false)
    const [editUser, setEditUser] = useState(false)
    const [updateId, setUpdateId] = useState(null)
    const [deleteId, setDeleteId] = useState(null)
    const [formData, setFormData] = useState({fee: '', type: '', desc: '', amount: ''})
    const [searchData, setSearchData] = useState('')
    const inputEl = useRef(null);
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
    const [excelExport, setExcelExport] = useState([])

    useEffect(()=> {
        getFees();
    },[])

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    };

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const {fee, type, desc, amount} = formData

    const opnAddNewUserModal = (e) => {
        e.preventDefault();
        setAddNewUserModal(true)
    }


    const opnAddNewUserEditModal = (id) => {
        fees.map(fee => {
            if(fee.id === id){
                setFormData(
                    {
                        fee: fee.fee, type:fee.type, desc: fee.desc, amount: fee.amount
                    })
                setUpdateId(fee.id)
            }
        })
        setAddNewUserModal(true)
        setEditUser(true)
    }

    const onAddUpdateUserModalClose = () => {
        setFormData(
            {
                fee: '', type: '', desc: '', amount: ''
            })
        setUpdateId(null)
        setAddNewUserModal(false);
        setEditUser(false);
    }

    const onDelete = (id) => {
        inputEl.current.open();
        setDeleteId(id)
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        onAddUpdateUserModalClose()
        !editUser?  await createFee(fee, type, desc, amount) : await updateFee(updateId, fee, type, desc, amount)


    };

    const onChangeSearch = (e) =>{
        e.preventDefault();
        setSearchData(e.target.value );
    };

    useEffect(()=> {
        if(searchData && fees){
            setCurrentPage(1)
            const search = fees.filter(fee => {
                return (fee.type.toLowerCase().includes(searchData.toLowerCase()))
            });
            setPosts(search)
        } else if(searchData === "") {
            setPosts(fees.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)))
        }
    },[searchData]);

    useEffect(()=> {
        if(fees) {
            setPosts(fees.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)))
            let result = fees.map(fee=> {
                return {
                    Fee: fee['fee'],
                    Type: fee['type'],
                    Description: fee['desc'],
                    Amount: fee['amount']
                }
            })
            setExcelExport(result)
        }
    },[fees])


    const removeDeleteId = ()=> {
        setDeleteId(null)
    }
    // console.log(Date.now() / 1000, 'ppppppp')


   //  function addDays(date, days) {
   //      const copy = new Date(Number(date))
   //      copy.setDate(date.getDate() + days)
   //      return copy
   //  }
   //
   //  const date = new Date();
   // console.log(addDays(date, 10), 'pppppppp')
   //  console.log(new Date(), 'new')

    // function CompareDate() {
    //     var dateOne = new Date(2012, 4, 20, 14, 55, 59);
    //     var dateTwo = new Date(2012, 4, 20, 12, 10, 20);
    //     //Note: 04 is month i.e. May
    //     if (dateOne > dateTwo) {
    //         console.log("Date One is greater than Date Two.");
    //     }else {
    //         console.log("Date Two is greater than Date One.");
    //     }
    // }
    // CompareDate();

    return (
        <div className="table-wrapper">
            <PageTitleBar title={"Fees"} match={match} />
            {loadingStatus &&
            <LinearProgress />
            }
            {loading && <Spinner />}
            {!loading &&
            <RctCollapsibleCard heading="Fees" fullBlock>
                <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
                    <div className="search-wrapper">
                        <Input type="search" className="search-input-lg" name="searchData" value={searchData} onChange={onChangeSearch} placeholder="Search.." />
                    </div>
                    <IconButton mini="true" className="search-icon-btn">
                        <i className="zmdi zmdi-search"></i>
                    </IconButton>
                    <MobileSearchForm
                        // isOpen={isMobileSearchFormVisible}
                        // onClose={() => this.setState({ isMobileSearchFormVisible: false })}
                    />
                </li>
                <div className="float-right">
                    <CSVLink
                        // headers={headers}
                        data={excelExport}
                        filename={"fees.csv"}
                        className="btn-sm btn-outline-default mr-10 bg-primary text-white"
                        target="_blank"
                    >
                        <i className="zmdi zmdi-download mr-2"></i>
                        Export to Excel
                    </CSVLink>
                    {/*<CSVLink*/}
                    {/*    // headers={headers}*/}
                    {/*    data={sampleData}*/}
                    {/*    filename={"sampleAdmins.csv"}*/}
                    {/*    className="btn-sm btn-outline-default mr-10 bg-success text-white"*/}
                    {/*    target="_blank"*/}
                    {/*>*/}
                    {/*    <i className="zmdi zmdi-download mr-2"></i>*/}

                    {/*    Sample excel to upload*/}
                    {/*</CSVLink>*/}
                    {/*<a href="#" onClick={(e) => opnAddNewUserModal1(e)} color="primary" className="btn-sm btn-outline-default mr-10 bg-danger text-white"><i className="zmdi zmdi-upload mr-2"></i>Upload</a>*/}
                    <a href="#" onClick={(e) => opnAddNewUserModal(e)} color="primary" className="caret btn-sm mr-10">Create New Fee <i className="zmdi zmdi-plus"></i></a>
                </div>
                <div className="table-responsive" style={{minHeight: "50vh"}}>
                    <Table>
                        <TableHead>
                            <TableRow hover>
                                <TableCell>Fee</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Amount</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Fragment>
                                {posts && currentPosts.map((fee, key) => (
                                    <TableRow hover key={key}>
                                        <TableCell>{fee.fee}</TableCell>
                                        <TableCell>{fee.type}</TableCell>
                                        <TableCell>{fee.desc}</TableCell>
                                        <TableCell>{fee.amount}</TableCell>
                                        <TableCell>
                                            <button type="button" className="rct-link-btn" onClick={(e) => opnAddNewUserEditModal(fee.id)}><i className="ti-pencil"></i></button>
                                            <button type="button" className="rct-link-btn ml-lg-3 text-danger" onClick={() => onDelete(fee.id)}><i className="ti-close"></i></button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </Fragment>
                        </TableBody>
                    </Table>
                    {posts.length < 1 && <div className="d-flex align-items-center justify-content-center w-100 p-5">No Fee Found</div>}
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
            </RctCollapsibleCard>
            }
            <Modal isOpen={addNewUserModal} toggle={() => onAddUpdateUserModalClose()}>
                <ModalHeader toggle={() => onAddUpdateUserModalClose()}>
                    {editUser ? 'Update Class Type': 'Create New Class Type'}
                </ModalHeader>
                <Form onSubmit={onSubmit}>
                    <ModalBody>
                        <FormGroup>
                            <Label for="firstName">Fee</Label>
                            <Input type="text"  name="fee" value={fee} onChange={onChange}   required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="firstName">Type</Label>
                            <Input type="text"  name="type" value={type} onChange={onChange}   required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="firstName">Amount</Label>
                            <Input type="text"  name="amount" value={amount} onChange={onChange}   required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastName">Description</Label>
                            <Input type="textarea"  name="desc" value={desc} onChange={onChange}  required />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" variant="contained" className="text-white btn-success">Submit</Button>
                    </ModalFooter>
                </Form>
            </Modal>
            <DeleteConfirmationDialog
                ref={inputEl}
                title="Are You Sure Want To Delete?"
                message="This will delete fee permanently."
                onConfirm={() => {
                    deleteFee(deleteId);
                    inputEl.current.close();
                }}
                removeDeleteId={removeDeleteId}
            />
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getFees: () => dispatch(getFees()),
        createFee: (fee, type, desc, amount) => dispatch(createFee(fee, type, desc, amount)),
        updateFee: (id, fee, type, desc, amount) => dispatch(updateFee(id, fee, type, desc, amount)),
        deleteFee: (id) => dispatch(deleteFee(id)),
    };
}

const mapStateToProps = state => ({
    fees: state.fees.fees,
    loading: state.loading.loading,
    loadingStatus: state.loading.loadingStatus



});

export default connect( mapStateToProps, mapDispatchToProps) (Fees);
