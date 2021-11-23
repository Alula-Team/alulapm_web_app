import React, {useState} from 'react'
import MetaTags from "react-meta-tags"

// Junk to delete 
import { Form, FormText, FormGroup, Label, Col, Input, Modal, ModalHeader, ModalBody, ModalFooter, Container, Button } from 'reactstrap'
// import { Form, Col, Input, FormText, Modal, ModalHeader } from 'reactstrap'
// import PropTypes from 'prop-types'

import {useForm, Controller} from 'react-hook-form'
import { db } from '../../helpers/firebase_helper_2'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

// Components
import PropertiesTable from "./propertiesTable"

const Rentals = () => {
    
    const [modal, setModal] = useState(false)
    const [property, setProperty] = useState({})
    const [tab, setTab] = useState(0)
    const toggle = () => { 
        setModal(!modal)
    }

    const toggleToOne = () => {
        resetForm()
        setTab(0)
        setModal(!modal)
    }

    const { handleSubmit, control, register, reset, setValue, watch, formState: { errors } } = useForm()

    const tenants = watch("occupied", "false")
    
    const onSubmit = data => {
        setProperty({ ...property, ...data })
        console.log("This data:", data)
        nextTab()
    }

    const nextTab = () => {
        setTab(tab + 1)
    }

    function resetForm() {
        reset({
            "propertyAddress": "",
            "unit": "",
            "bedCount": "",
            "bathCount": "",
            "livingSQFT": "",
            "lotSQFT": "",
            "occupied": false,
            "tenantName": "",
            "tenantEmail": ""
        })
        setTab(0)
    }

    function resetTenant() {
        setValue("tenantName", "")
        setValue("tenantEmail", "")
    }

    const prevTab = () => {
        setTab(tab - 1)
    }

    async function addAProperty() {
        console.log("Property is: ", property)
        const docRef = await addDoc(collection(db, "properties"), {
            ...property,
            createdAt: serverTimestamp()
        })
        console.log("Document written with id ", docRef.id)
        setModal(false)
        resetForm()
    }

    return (
        <div className="page-content">
           <Modal isOpen={modal} toggle={toggle} unmountOnClose={true}>
               <ModalHeader toggle={toggle} centered={true}>
                  Add a Property
               </ModalHeader>
               {tab === 0 && <Form onSubmit={handleSubmit(onSubmit)}>
                    <ModalBody>
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
                        <Col className="col-12">
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
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary">Next</Button>
                    </ModalFooter>
               </Form>}
               {tab === 1 && <Form onSubmit={handleSubmit(onSubmit)}>
                    <ModalBody>
                        <Col className="col-12 mb-3">
                            {/* # of Bedrooms */}
                            <Controller
                                name="bedCount"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => <Input type="number" placeholder="Enter number of bedrooms..." {...field} />}
                                defaultValue=""
                            />
                            {errors.bedCount && <FormText color="danger">This field is required</FormText>}
                        </Col>
                        <Col className="col-12 mb-3">
                            {/* # of Bathrooms */}
                            <Controller
                                name="bathCount"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => <Input type="number" placeholder="Enter number of bathrooms..." {...field} />}
                                defaultValue=""
                            />
                            {errors.bathCount && <FormText color="danger">This field is required</FormText>}
                        </Col>
                        <Col className="col-12 mb-3">
                            {/* Square Footage */}
                            <Controller
                                name="livingSQFT"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => <Input type="number" placeholder="Enter number of living space SqFt..." {...field} />}
                                defaultValue=""
                            />
                            {errors.livingSQFT && <FormText color="danger">This field is required</FormText>}
                        </Col>
                        <Col className="col-12">
                            {/* Square Footage - Optional */}
                            <Controller
                                name="lotSQFT"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => <Input type="number" placeholder="Enter number of lot SqFt..." {...field} />}
                                defaultValue=""
                            />
                            {errors.lotSQFT && <FormText color="danger">This field is required</FormText>}
                        </Col>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="button" onClick={prevTab}>Back</Button>
                        <Button color="primary">Next</Button>
                    </ModalFooter>
               </Form>}
               {tab === 2 && <Form onSubmit={handleSubmit(onSubmit)}>
                    <ModalBody>
                    <Col className="col-12 mb-3">
                    {/* <Controller
                         name="occupied"
                         control={control}
                         rules={{ required: true }}
                         render={( { field: { value, onChange } } ) => (<ButtonGroup value={value} onChange={(e)=>onChange(e.target.value)}>
                        <Button
                            color="primary"
                            onClick={function noRefCheck(){}}
                        >
                            Vacant
                        </Button>
                        <Button
                            color="primary"
                            onClick={function noRefCheck(){}}
                        >
                            Occupied
                        </Button>
                    </ButtonGroup>)}
                    /> */}


                        <p style={{ fontWeight: 500 }}>Select Property Status</p>
                        <FormGroup tag="fieldset">
                            <Label>Vacant{'  '}<input type="radio" {...register("occupied")} value="false" onClick={resetTenant} /></Label>{'  '}
                            <Label className="mr-3">Occupied{'  '}<input type="radio" {...register("occupied")} value="true" /></Label>
                        </FormGroup>
                        {errors.status && <FormText color="danger">This field is required</FormText>}
                    </Col>
                    {tenants === "true" && <Col className="col-12 mb-3">
                        {/* Tenant Name - Optional */}
                        <Controller
                            name="tenantName"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <Input type="text" placeholder="Enter Tenant's name..." {...field} />}
                            defaultValue=""
                        />
                        {errors.tenantName && <FormText color="danger">This field is required</FormText>}
                    </Col>}
                    {tenants === "true" && <Col className="col-12 mb-3">
                        {/* Tenant Email - Optional */}
                        <Controller
                            name="tenantEmail"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <Input type="email" placeholder="Enter Tenant's email" {...field} />}
                            defaultValue=""
                        />
                        <FormText color="muted">Your tenant will receive an invitation to download the Alula tenant app</FormText><br />
                        {errors.tenantEmail && <FormText color="danger">This field is required</FormText>}
                    </Col>}
                    </ModalBody>
                    <ModalFooter>
                        <Button type="button" onClick={prevTab}>Back</Button>
                        <Button color="primary">Next</Button>
                    </ModalFooter>
               </Form>}
               {tab === 3 && <Form onSubmit={handleSubmit(addAProperty)}>
                   <ModalBody>
                    <Col className="col-12 mb-3">
                        <p style={{ fontWeight: 500 }}>Review</p>
                        <p>
                            <strong>Address:</strong> {property.propertyAddress} {property.unit && `Unit ${property.unit}`}
                        </p>
                        <hr />
                        <p>
                            <strong>Beds: </strong> {property.bedCount}<br />
                            <strong>Baths: </strong> {property.bathCount}<br />
                            <strong>Living SQFT: </strong> {property.livingSQFT}<br />
                            <strong>Lot SQFT: </strong> {property.lotSQFT}
                        </p>
                        {property.tenantName && 
                            <div>
                                <hr />
                                <p>
                                    <strong>Tenant Name: </strong> {property.tenantName}<br />
                                    <strong>Tenant Email: </strong> {property.tenantEmail}
                                </p>
                            </div>}
                    </Col>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="button" onClick={prevTab}>Back</Button>
                        <Button onClick={addAProperty}>Submit</Button>
                    </ModalFooter>
                </Form>}
            </Modal>
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
                        onClick={toggleToOne}
                    >
                        <i className="mdi mdi-plus-circle-outline me-1" />
                        Add Properties
                    </Button>
                </div>
                    <PropertiesTable />
                </Container>
            </div>

    )
}

// AddPropertyModal.propTypes = {
//     toggle: PropTypes.func,
//     show: PropTypes.any,
//   }

export default Rentals
