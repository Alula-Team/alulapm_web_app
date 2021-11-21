import React, {useState} from 'react'
import MetaTags from "react-meta-tags"
import { Container, Button } from "reactstrap"

// Junk to delete 
import { Form, Col, Input, FormText, Modal } from 'reactstrap'
import PropTypes from 'prop-types'

import {useForm, Controller} from 'react-hook-form'

// Components
import PropertiesTable from "./propertiesTable"
// import AddPropertyModal from "./AddPropertyModal"

const AddPropertyModal = ({show, onCloseClick}) => {
    // const [tab, setTab] = useState(0)

    const {control, handleSubmit, formState: {errors} } = useForm()

    // function nextTab() {
    //     setTab(tab + 1);
    // }

    // function prevTab() {
    //     setTab(tab - 1)
    // }

    function onSubmit(data) {
        console.log(data)
    }
    
    return (
        <Modal isOpen={show} onCloseClick={onCloseClick}>
            <div className="tab">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Col className="col-12 mb-3">
                        {/* Property Address - Needs Google Places API */}
                        <Controller
                            name="propertyAddress"
                            control={control}
                            render={({ field }) => <Input type="text" placeholder="Enter property address..." {...field} />}
                            rules={{ required: true }}
                            defaultValue=""
                        />
                        {errors.propertyAddress && <FormText color="danger">This field is required</FormText>}
                    </Col>
                    <Col className="col-12 mb-3">
                        {/* Unit - Optional */}
                        <Controller
                            name="unit"
                            control={control}
                            render={({ field }) => <Input type="text" placeholder="Enter unit number..." {...field} />}
                            rules={{ required: false }}
                            defaultValue=""
                        />
                        <FormText color="muted">
                            Optional - include &quot;Apt&quot;, &quot;Unit&quot;, etc...
                        </FormText>
                    </Col>
                    <Button>Next</Button>
                    <Button onClick={onCloseClick}>Close</Button>
                </Form>
            </div>
        </Modal>
    )
}

const Rentals = () => {
    // const [addPropertyModal, setAddPropertyModal] = useState(false)
    const [modal, setModal] = useState(false)
    // const toggle = setModal(!modal)
    // const [showModal, setShowModal] = useState(false)  
    return (
        <React.Fragment>
            <AddPropertyModal show={modal} onCloseClick={()=>setModal(false)}/>
               
            
            <div className="page-content">
                <MetaTags>
                    <title>Rentals | Alula - Building the Future of Property Management</title>
                </MetaTags>
                <Container fluid>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="page-title-box">
                        <h4 className="mb-0 mt-2 font-size-18">Rental Properties</h4>
                    </div>
                    <Button
                        color="primary"
                        className="font-16 btn-block mb-3"
                        onClick={() => setModal(true)}
                    >
                        <i className="mdi mdi-plus-circle-outline me-1" />
                        Add Properties
                    </Button>
                </div>
                    <PropertiesTable />
                </Container>
            </div>
        </React.Fragment>
    )
}

AddPropertyModal.propTypes = {
    onCloseClick: PropTypes.func,
    show: PropTypes.any,
  }

export default Rentals
