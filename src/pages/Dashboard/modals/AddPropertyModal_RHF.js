import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Col, Modal, ModalHeader, ModalBody, Row, Button, Input, FormText, FormGroup, Label } from 'reactstrap'
import { useForm, Controller } from 'react-hook-form'
import { db } from '../../../helpers/firebase_helper_2'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

const AddPropertyModal = ({ show, onCloseClick }) => {
    const [tab, setTab] = useState(0)
    const [property, setProperty] = useState({})

    let whichTab = useRef(0)

    let { handleSubmit, control, register, watch, formState: { errors } } = useForm()

    const tenants = watch("status", "vacant")

    function startOver() {
        setTab(0)
    }

    function nextTab() {
        // whichTab.current++
        setTab(tab + 1)
        console.log(tab)
    }

    function prevTab() {
        // whichTab.current--
        setTab(tab - 1)
        console.log(tab)
    }

    function onSubmit(data) {
        setProperty({ ...data })
        nextTab()
        console.log(whichTab.current)
    }

    async function addAProperty() {
        console.log("Property is: ", property)
        const docRef = await addDoc(collection(db, "properties"), {
            ...property,
            createdAt: serverTimestamp()
        })
        startOver()
        console.log(tab)

        // setValue({
        //     "propertyAddress": "",
        // })
        //     "unit": "",
        //     "bedCount": "",
        //     "bathCount": "",
        //     "livingSQFT": "",
        //     "lotSQFT": "",
        //     "status": "Vacant",
        //     "tenantName": "",
        //     "tenantEmail": ""
        // })
        console.log("Document written with ID: ", docRef.id)
    }

    return (
        <React.Fragment>
            <Modal isOpen={show} toggle={onCloseClick} centered={true}>
                <ModalHeader tag="h4" toggle={onCloseClick}>
                    Add Property
                </ModalHeader>
                <ModalBody>
                    <Row form>
                        {/* PAGE 1 MODAL SPLIT */}
                        {tab === 0 && <div className="tab">
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
                            </Form>
                        </div>}

                        {/* PAGE 2 MODAL SPLIT */}
                        {tab === 1 && <div className="tab">
                            <Form onSubmit={handleSubmit(onSubmit)}>
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
                                <Col className="col-12 mb-3">
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
                                <div className="modal-footer"></div>
                                <Button type="button" onClick={prevTab}>Back</Button>
                                <Button>Next</Button>
                            </Form>
                        </div>}

                        {/* PAGE 3 MODAL SPLIT - Needs to Hide or show tenant add in */}
                        {tab === 2 && <div className="tab">
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Col className="col-12 mb-3">
                                    <p style={{ fontWeight: 500 }}>Select Property Status</p>
                                    <FormGroup tag="fieldset">
                                        <Label>Vacant{'  '}<input type="radio" {...register("status")} value="Vacant" /></Label>{'  '}
                                        <Label className="mr-3">Occupied{'  '}<input type="radio" {...register("status")} value="Occupied" /></Label>
                                    </FormGroup>
                                    {errors.status && <FormText color="danger">This field is required</FormText>}
                                </Col>
                                {tenants === "Occupied" && <Col className="col-12 mb-3">
                                    {/* Tenant Name - Optional */}
                                    <Controller
                                        name="tenantName"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field }) => <Input type="text" placeholder="Enter Tenant's name..." {...field} />}
                                        className="mb-3"
                                        defaultValue=""
                                    />
                                    {errors.tenantName && <FormText color="danger">This field is required</FormText>}
                                </Col>}
                                {tenants === "Occupied" && <Col className="col-12 mb-3">
                                    {/* Tenant Email - Optional */}
                                    <Controller
                                        name="tenantEmail"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field }) => <Input type="email" placeholder="Enter Tenant's email" {...field} />}
                                        className="mb-3"
                                        defaultValue=""
                                    />
                                    <FormText color="muted">Your tenant will receive an invitation to download the Alula tenant app</FormText><br />
                                    {errors.tenantEmail && <FormText color="danger">This field is required</FormText>}
                                </Col>}
                                <div className="modal-footer"></div>
                                <Button type="button" onClick={prevTab}>Back</Button>
                                <Button>Next</Button>
                            </Form>
                        </div>}
                        {tab === 3 && <div className="tab">
                            <Form onSubmit={handleSubmit(addAProperty)}>
                                <Col className="col-12 mb-3">
                                    <p style={{ fontWeight: 500 }}>Review</p>
                                    <p>
                                        <strong>Address:</strong> {property.propertyAddress} {property.unit && `Unit ${property.unit}`}<br />
                                        <strong>Beds: </strong> {property.bedCount}<br />
                                        <strong>Baths: </strong> {property.bathCount}<br />
                                        <strong>Living SQFT: </strong> {property.livingSQFT}<br />
                                        <strong>Lot SQFT: </strong> {property.lotSQFT}
                                    </p>
                                    {property.tenantName && <p>---------<br />
                                        <strong>Tenant Name: </strong> {property.tenantName}<br />
                                        <strong>Tenant Email: </strong> {property.tenantEmail}</p>}
                                </Col>
                                <Button type="button" onClick={prevTab}>Back</Button>
                                <Button onClick={addAProperty}>Submit</Button>
                            </Form>
                        </div>}
                    </Row>
                </ModalBody>
            </Modal >
        </React.Fragment >
    )
}

AddPropertyModal.propTypes = {
    onCloseClick: PropTypes.func,
    show: PropTypes.any
}

export default AddPropertyModal
