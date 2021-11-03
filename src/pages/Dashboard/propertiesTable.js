import PropTypes from "prop-types"
import React, { useState, useEffect } from 'react'

// import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"
import { Card, CardBody, Button, Input, Modal, ModalHeader, ModalBody, Form, Row, Col, FormText } from "reactstrap"

import { useForm, Controller } from 'react-hook-form'
//redux
// import { useSelector, useDispatch } from "react-redux"

// Modals
// import AddPropertyModal from '../Rentals/AddPropertyModal'

// Firebase
import { db } from '../../helpers/firebase_helper_2'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'

const PropertyModal = ({show, onCloseClick}) => {
    const {handleSubmit, control, formState: {errors}} = useForm()
    function onSubmit(data) {
        console.log(data)
    }
    return (
        <React.Fragment>
            <Modal isOpen={show} toggle={onCloseClick} centered={true}>
                <ModalHeader tag="h4" toggle={onCloseClick}>
                    Add Property
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row form>
                            {/* PAGE 1 MODAL SPLIT */}
                            <div className="modal-split" id="page1">
                                <Col className="col-12 mb-1">
                                    {/* Property Address - Needs Google Places API */}
                                    <Controller
                                        control={control}
                                        name="propertyAddress"
                                        render={({ field }) => <Input type="text" placeholder="Enter property address..." {...field} />}
                                        rules={{ required: true }}
                                        defaultValue=""
                                    />
                                    {errors.propertyAddress && <FormText color="warning">This field is required</FormText>}
                                </Col>
                                <Col className="col-12 mb-3">
                                    {/* Unit - Optional */}
                                    <FormText>Unit</FormText>
                                    <Controller
                                        control={control}
                                        name="unit"
                                        render={({ field }) => <Input type="text" placeholder="Enter unit number... " {...field} />}
                                        rules={{ required: false }}
                                        defaultValue=""
                                    />
                                    
                                </Col>
                            </div>
                        </Row>
                    </Form>
                </ModalBody>
            </Modal>
        </React.Fragment>
    )
}

const OneProperty = ({ thing }) => (
    <tr>
        {/* Property Address */}
        <td>{thing.address}</td>

        {/* Tenant Name */}
        <td className=""> {thing.city} GODDAMIT </td>

        {/* Date Added */}
        <td> 11-06-2020 </td>

        {/* Status */}
        <td> Renewal </td>

        {/* View Details */}
        <td className="d-flex justify-content-center">
            <a href="#">
                <u>View Details</u>
            </a>
        </td>
    </tr>
)

const PropertiesTable = () => {
    const [properties, setProperties] = useState([])
    const [addPropertyModal, setAddPropertyModal] = useState(false)
    const theQuery = query(collection(db, "properties"), orderBy("address", "asc"))

    useEffect(() => {
        const unsubscribe = onSnapshot(theQuery, (snapshot) => {
            const data = snapshot.docs.map(doc => doc.data())
            console.log("HEre's the data", data)
            setProperties(data)
        })

        return () => unsubscribe()
    }, [])

    let zeeTable
    if (!properties) {
        zeeTable = <tr><td>Loading...</td></tr>
    } else {
        zeeTable = properties.map((thing) => <OneProperty key={thing.address} thing={thing} />)
    }
    return (
        <React.Fragment>
            <PropertyModal
                show={addPropertyModal}
                onCloseClick={() => setAddPropertyModal(false)}
            />
            <Card>
                <CardBody>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="mb-4 me-4 h4 card-title">Properties</div>
                            {/* Search */}
                            <div className="search-box mb-4">
                                <div className="position-relative">
                                    <Input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search Properties..."
                                    />
                                    <i className="bx bx-search-alt search-icon" />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            {/* Filter */}
                            <select className="mb-4 me-3 custom-select" id="inputGroupSelect01">
                                <option selected>Filter by Status:</option>
                                <option value="1">All Properties</option>
                                <option value="2">Occupied</option>
                                <option value="3">Renewal</option>
                                <option value="4">Vacant</option>
                            </select>
                            {/* Add Property Button */}
                            <Button className="btn btn-danger btn-sm mb-4 d-flex align-items-center" onClick={() => setAddPropertyModal(true)}>
                                <i className="mdi mdi-plus-circle-outline me-1" />
                                Add Property
                            </Button>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <div className="react-bootstrap-table">
                            <table className="table table align-middle table-nowrap table-check">
                                <thead className="table-light">
                                    <tr>
                                        {/* Property Address */}
                                        <th tabIndex={0} aria-label="Property Address sortable" className="sortable">
                                            Property Address
                                            <span className="order-4"></span>
                                        </th>

                                        {/* Tenant Name */}
                                        <th tabIndex={0} aria-label="Property Address sortable" className="sortable">
                                            Tenant Name
                                            <span className="order-4"></span>
                                        </th>

                                        {/* Date Added */}
                                        <th tabIndex={0} aria-label="Date Added sortable" className="sortable">
                                            Date Added
                                            <span className="order-4"></span>
                                        </th>

                                        {/* Status */}
                                        <th tabIndex={0} aria-label="Status sortable" className="sortable">
                                            Status
                                            <span className="order-4"></span>
                                        </th>

                                        {/* View Details */}
                                        <th tabIndex={0} aria-label="View Details sortable" className="sortable text-center">
                                            View Details
                                            <span className="order-4"></span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {zeeTable}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

OneProperty.propTypes = {
    thing: PropTypes.object
}

export default PropertiesTable
