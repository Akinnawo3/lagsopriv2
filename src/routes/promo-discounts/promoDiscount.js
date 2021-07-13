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
import Spinner from "../../components/spinner/Spinner";
import IconButton from "@material-ui/core/IconButton";
import MobileSearchForm from "Components/Header/MobileSearchForm";
import {CSVLink} from "react-csv";
import LinearProgress from "@material-ui/core/LinearProgress";
import {
    createPromoDiscount,
    deletePromoDiscount,
    getPromoDiscount,
    updatePromoDiscount
} from "../../actions/promoDiscountsAction";

const  PromoDiscounts = (props) => {
    const {
        match,
        getPromoDiscounts,
        promoDiscounts,
        createPromoDiscount,
        updatePromoDiscount,
        loading,
        deletePromoDiscount,
        loadingStatus} = props
    const [addNewUserModal, setAddNewUserModal] = useState(false)
    const [editUser, setEditUser] = useState(false)
    const [updateId, setUpdateId] = useState(null)
    const [deleteId, setDeleteId] = useState(null)
    const [formData, setFormData] = useState({promoCode: '', type: '', usageLimit: '', discountPrice: '', discountPercentage: '', endDate: ''})
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
        getPromoDiscounts();
    },[])

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    };

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const {promoCode, type, usageLimit, discountPrice, discountPercentage, endDate} = formData

    const opnAddNewUserModal = (e) => {
        e.preventDefault();
        setAddNewUserModal(true)
    }


    const opnAddNewUserEditModal = (id) => {
        promoDiscounts.map(promoDiscount => {
            if(promoDiscount.id === id){
                setFormData(
                    {
                        promoCode: promoDiscount.promoCode,
                        type: promoDiscount.type,
                        usageLimit: promoDiscount.usageLimit,
                        discountPrice: promoDiscount.discountPrice,
                        discountPercentage: promoDiscount.discountPercentage,
                        endDate: promoDiscount.endDate
                    })
                setUpdateId(promoDiscount.id)
            }
        })
        setAddNewUserModal(true)
        setEditUser(true)
    }

    const onAddUpdateUserModalClose = () => {
        setFormData(
            {
                promoCode: '', type: '', usageLimit: '', discountPrice: '', discountPercentage: '', endDate: ''
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
        !editUser?  await createPromoDiscount(promoCode, type, usageLimit, discountPrice, discountPercentage, endDate) : await updatePromoDiscount(updateId, promoCode, type, usageLimit, discountPrice, discountPercentage, endDate)


    };

    const onChangeSearch = (e) =>{
        e.preventDefault();
        setSearchData(e.target.value );
    };

    useEffect(()=> {
        if(searchData && promoDiscounts){
            setCurrentPage(1)
            const search = promoDiscounts.filter(promoDiscount => {
                return (promoDiscount.promoCode.toLowerCase().includes(searchData.toLowerCase()))
            });
            setPosts(search)
        } else if(searchData === "") {
            setPosts(promoDiscounts.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)))
        }
    },[searchData]);

    useEffect(()=> {
        if(promoDiscounts) {
            setPosts(promoDiscounts.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)))
            let result = promoDiscounts.map(promoDiscount=> {
                return {
                    promoCode: promoDiscount['promoCode'],
                    type: promoDiscount['type'],
                    usageLimit: promoDiscount['usageLimit'],
                    discountPrice: promoDiscount['discountPrice'],
                    discountPercentage: promoDiscount['discountPercentage'],
                    endDate: promoDiscount['endDate']
                }
            })
            setExcelExport(result)
        }
    },[promoDiscounts])


    const removeDeleteId = ()=> {
        setDeleteId(null)
    }

    return (
        <div className="table-wrapper">
            <PageTitleBar title={"Discount Promo"} match={match} />
            {loadingStatus &&
            <LinearProgress />
            }
            {loading && <Spinner />}
            {!loading &&
            <RctCollapsibleCard heading="Discount Promo" fullBlock>
                <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
                    <div className="search-wrapper">
                        <Input type="search" className="search-input-lg" name="searchData" value={searchData} onChange={onChangeSearch} placeholder="Search.." />
                    </div>
                    <IconButton mini="true" className="search-icon-btn">
                        <i className="zmdi zmdi-search"></i>
                    </IconButton>
                    <MobileSearchForm
                        // isOpen={isMobileSearchFormVisible}
                        onClose={() => this.setState({ isMobileSearchFormVisible: false })}
                    />
                </li>
                <div className="float-right">
                    <CSVLink
                        // headers={headers}
                        data={excelExport}
                        filename={"discountPromo.csv"}
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
                    <a href="#" onClick={(e) => opnAddNewUserModal(e)} color="primary" className="caret btn-sm mr-10">Create New Promo <i className="zmdi zmdi-plus"></i></a>
                </div>
                <div className="table-responsive" style={{minHeight: "50vh"}}>
                    <Table>
                        <TableHead>
                            <TableRow hover>
                                <TableCell>Promo Code</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Usage Limit</TableCell>
                                <TableCell>Discount Price</TableCell>
                                <TableCell>Discount Percentage</TableCell>
                                <TableCell>End Date</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Fragment>
                                {posts && currentPosts.map((promoDiscount, key) => (
                                    <TableRow hover key={key}>
                                        <TableCell>{promoDiscount.promoCode}</TableCell>
                                        <TableCell>{promoDiscount.type}</TableCell>
                                        <TableCell>{promoDiscount.usageLimit}</TableCell>
                                        <TableCell>{promoDiscount.discountPrice}</TableCell>
                                        <TableCell>{promoDiscount.discountPercentage}</TableCell>
                                        <TableCell>{promoDiscount.endDate}</TableCell>
                                        <TableCell>
                                            <button type="button" className="rct-link-btn" onClick={(e) => opnAddNewUserEditModal(promoDiscount.id)}><i className="ti-pencil"></i></button>
                                            <button type="button" className="rct-link-btn ml-lg-3 text-danger" onClick={() => onDelete(promoDiscount.id)}><i className="ti-close"></i></button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </Fragment>
                        </TableBody>
                    </Table>
                    {posts.length < 1 && <div className="d-flex align-items-center justify-content-center w-100 p-5">No Promo Discount Found</div>}
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
                    {editUser ? 'Update Promo Discount': 'Create New Promo Discount'}
                </ModalHeader>
                <Form onSubmit={onSubmit}>
                    <ModalBody>
                        <FormGroup>
                            <Label>Promo Code</Label>
                            <Input type="text"  name="promoCode" value={promoCode} onChange={onChange}   required/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Type</Label>
                            <Input type="text"  name="type" value={type} onChange={onChange}  required />
                        </FormGroup>
                        <FormGroup>
                            <Label>Usage Limit</Label>
                            <Input type="number"  name="usageLimit" value={usageLimit} onChange={onChange}  required />
                        </FormGroup>
                        <FormGroup>
                            <Label>Discount Price</Label>
                            <Input type="number"  name="discountPrice" value={discountPrice} onChange={onChange}  required />
                        </FormGroup>
                        <FormGroup>
                            <Label>Discount Percentage</Label>
                            <Input type="number"  name="discountPercentage" value={discountPercentage} onChange={onChange}  required />
                        </FormGroup>
                        <FormGroup>
                            <Label>End Date</Label>
                            <Input type="date"  name="endDate" value={endDate} onChange={onChange}  required />
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
                message="This will delete user permanently."
                onConfirm={() => {
                    deletePromoDiscount(deleteId);
                    inputEl.current.close();
                }}
                removeDeleteId={removeDeleteId}
            />
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getPromoDiscounts: () => dispatch(getPromoDiscount()),
        createPromoDiscount: (promoCode, type, usageLimit, discountPrice, discountPercentage, endDate) => dispatch(createPromoDiscount(promoCode, type, usageLimit, discountPrice, discountPercentage, endDate)),
        updatePromoDiscount: (id, promoCode, type, usageLimit, discountPrice, discountPercentage, endDate) => dispatch(updatePromoDiscount(id, promoCode, type, usageLimit, discountPrice, discountPercentage, endDate)),
        deletePromoDiscount: (id) => dispatch(deletePromoDiscount(id)),
    };
}

const mapStateToProps = state => ({
    promoDiscounts: state.promoDiscounts.promoDiscounts,
    loading: state.loading.loading,
    loadingStatus: state.loading.loadingStatus



});

export default connect( mapStateToProps, mapDispatchToProps) (PromoDiscounts);

