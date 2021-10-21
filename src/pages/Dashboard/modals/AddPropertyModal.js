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

    let { handleSubmit, control, register, setValue, formState: { errors } } = useForm()

    function nextTab() {
        whichTab.current++
        setTab(whichTab.current)
    }

    function prevTab() {
        whichTab.current--
        setTab(whichTab.current)
    }

    function onSubmit(data) {
        setProperty({ ...data })
        nextTab()
    }
    // createdAt: serverTimestamp()
    async function addAProperty() {
        console.log("Property is: ", property)
        const docRef = await addDoc(collection(db, "properties"), {
            ...property,
            createdAt: serverTimestamp()
        })
        setValue({
            "propertyAddress": "",
            "unit": "",
            "bedCount": "",
            "bathCount": "",
            "livingSQFT": "",
            "lotSQFT": "",
            "tenantName": "",
            "tenantEmail": ""
        })
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
                                        <Label className="mr-3">Occupied{' '}<input {...register} type="radio" value="occcupied" name="status" /></Label>
                                        <Label>Vacant{' '}<input {...register} type="radio" value="vacant" name="status" /></Label>
                                    </FormGroup>
                                    {errors.status && <FormText color="danger">This field is required</FormText>}
                                </Col>
                                <Col className="col-12 mb-3">
                                    {/* Tenant Name - Optional */}
                                    <Controller
                                        name="tenantName"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field }) => <Input type="text" placeholder="Enter Tenant's name..." {...field} />}
                                        className="mb-3"
                                    />
                                    {errors.tenantName && <FormText color="danger">This field is required</FormText>}
                                </Col>
                                <Col className="col-12 mb-3">
                                    {/* Tenant Email - Optional */}
                                    <Controller
                                        name="tenantEmail"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field }) => <Input type="email" placeholder="Enter Tenant's email" {...field} />}
                                        className="mb-3"
                                    />
                                    <FormText color="muted">Your tenant will receive an invitation to download the Alula tenant app</FormText><br />
                                    {errors.tenantEmail && <FormText color="danger">This field is required</FormText>}

                                    <div className="modal-footer"></div>
                                    <Button type="button" onClick={prevTab}>Back</Button>
                                    <Button>Next</Button>
                                </Col>
                            </Form>
                        </div>}
                        {tab === 3 && <div className="tab">
                            <Form onSubmit={handleSubmit(addAProperty)}>
                                <div>
                                    <p><strong>Address:</strong> {property.propertyAddress} {property.unit && `Unit ${property.unit}`}<br />
                                        <strong>Lot SQFT: </strong> {property.lotSQFT}<br />
                                        <strong>Living SQFT: </strong> {property.livingSQFT}
                                    </p>
                                </div>
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
