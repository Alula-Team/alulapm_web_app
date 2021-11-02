import PropTypes from "prop-types"
import React, { useState, useEffect } from 'react'

// import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"
import { Card, CardBody, Button, Input } from "reactstrap"

//redux
// import { useSelector, useDispatch } from "react-redux"

// Modals
import AddPropertyModal from "./modals/AddPropertyModal"

// Firebase
import { db } from '../../helpers/firebase_helper_2'
import { onSnapshot, collection, orderBy, query } from 'firebase/firestore'
// import { makeDate } from '../../helpers/makeDate'

const OneProperty = ({ thing }) => {
    let zeeDate = null

    if (thing.createdAt) {
        zeeDate = thing.createdAt.toDate().toLocaleDateString("en-us", {
            year: "numeric",
            month: "short",
            day: "numeric",
        })
    }

    return (
        <tr>
            {/* Property Address */}
            <td>{thing.propertyAddress}</td>

            {/* Property Unit */}
            <td>{thing.unit}</td>

            {/* Tenant Name */}
            <td className="">{thing.tenantName}</td>

            {/* Date Added */}
            <td>{zeeDate}</td>

            {/* Status */}
            <td>{thing.status}</td>

            {/* View Details */}
            <td className="d-flex justify-content-center">
                <a href="#">
                    <u>View Details</u>
                </a>
            </td>
        </tr>
    )
}


const PropertiesTable = () => {
    const [properties, setProperties] = useState([])
    const [showPropertyModal, setShowPropertyModal] = useState(false)
    const [count, setCount] = useState(0)

    const q = query(collection(db, "properties"), orderBy("propertyAddress", "asc"), orderBy("unit", "asc"))

    let unsubscribe
    useEffect(() => {
        unsubscribe = onSnapshot(q, querySnapshot => {
            const properties = []
            querySnapshot.forEach(doc => {
                properties.push({ id: doc.id, ...doc.data() })
            })
            setProperties(properties)
            console.log("Properties gotten")
        })

        return () => {
            console.log("Unmouting now")
            unsubscribe()
        }
    }, [count])

    function countBigger() {
        setCount(count + 1)
    }

    let zeeTable
    if (!properties) {
        zeeTable = <tr><td>Loading...</td></tr>
    } else {
        zeeTable = properties.map((thing) => <OneProperty key={thing.id} thing={thing} />)
    }
    return (
        <React.Fragment>
            <AddPropertyModal
                show={showPropertyModal}
                onCloseClick={() => setShowPropertyModal(false)}
            />
            <Button onClick={countBigger}>Count {count}</Button>
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
                            <Button className="btn btn-danger btn-sm mb-4 d-flex align-items-center" onClick={() => setShowPropertyModal(true)}>
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

                                        <th tabIndex={0} aria-label="Property Unit sortable" className="sortable">
                                            Unit
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
