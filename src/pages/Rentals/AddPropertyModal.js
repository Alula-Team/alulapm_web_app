import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Col, Modal, ModalHeader, ModalBody, Row, Input, FormText, Form, FormGroup, Button } from 'reactstrap'
import { useForm, Controller } from 'react-hook-form'

import { db } from '../../helpers/firebase_helper_2'
import { collection, addDoc } from 'firebase/firestore'

const AddPropertyModal = ({ show, onCloseClick }) => {
    const [tab, setTab] = useState(0)
    const [property, setProperty] = useState({})

    // $(document).ready(function () {
    //     prep_modal()
    // })
    // function prep_modal() {
    //     $(".modal").each(function () {

    //         var element = this
    //         var pages = $(this).find('.modal-split')

    //         if (pages.length != 0) {
    //             pages.hide()
    //             pages.eq(0).show()

    //             var b_button = document.createElement("button")
    //             b_button.setAttribute("type", "button")
    //             b_button.setAttribute("class", "btn btn-light")
    //             b_button.setAttribute("style", "display: none")
    //             b_button.innerHTML = "Back"

    //             var n_button = document.createElement("button")
    //             n_button.setAttribute("type", "button")
    //             n_button.setAttribute("class", "btn btn-primary")
    //             n_button.innerHTML = "Next"

    //             $(this).find('.modal-footer').append(b_button).append(n_button)


    //             var page_track = 0

    //             $(n_button).click(function () {

    //                 this.blur()

    //                 if (page_track == 0) {
    //                     $(b_button).show()
    //                 }

    //                 if (page_track == pages.length - 2) {
    //                     $(n_button).text("Save")
    //                 }

    //                 if (page_track == pages.length - 1) {
    //                     $(element).find("form").submit()
    //                 }

    //                 if (page_track < pages.length - 1) {
    //                     page_track++

    //                     pages.hide()
    //                     pages.eq(page_track).show()
    //                 }
    //             })

    //             $(b_button).click(function () {

    //                 if (page_track == 1) {
    //                     $(b_button).hide()
    //                 }

    //                 if (page_track == pages.length - 1) {
    //                     $(n_button).text("Next")
    //                 }

    //                 if (page_track > 0) {
    //                     page_track--

    //                     pages.hide()
    //                     pages.eq(page_track).show()
    //                 }
    //             })
    //         }
    //     })
    // }

    const { control, handleSubmit, register, watch, reset, formState: { errors } } = useForm()

    const status = watch("status", "Vacant")

    function addData(data) {
        setProperty({...property,...data})
        console.log(property)
    }

    function nextTab() {
        setTab(tab + 1)
        console.log(tab)
    }
    function prevTab() {
        setTab(tab - 1)
        console.log(tab)
    }

    async function onSubmit() {
        let docRef = await addDoc(collection(db, "properties"), {
            ...property
        })
        console.log(`Doc added with id: `, docRef.id)
        reset({
            "propertyAddress":"",
            "unit": "",
            "bedCount": "",
            "bathCount": "",
            "livingSQFT": "",
            "lotSQFT": "",
            "status": "Vacant",
            "tenantName": "",
            "tenantEmail": ""
        })
    }

    return (
        <React.Fragment>
            <Modal isOpen={show} toggle={onCloseClick} centered={true}>
                <ModalHeader tag="h4" toggle={onCloseClick}>
                    Add Property
                </ModalHeader>
                <ModalBody>
                { tab == 0 && 
                    <Form onSubmit={handleSubmit(addData)}>
                        <Row form>
                            {/* PAGE 1 MODAL SPLIT */}
                            <div className="modal-split" id="page1">
                                <Col className="col-12 mb-1">
                                    {/* Property Address - Needs Google Places API */}
                                    <FormText>Property Address</FormText>
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
                                    <FormText>Optional - include &quot;Apt&quot;, &quot;Unit&quot;, etc...</FormText>
                                </Col>
                                <div className="modal-footer mt-3"></div>
                                <Button onClick={nextTab} type="submit">Next</Button>
                            </div>
                            </Row>
                            </Form> }

                            { tab == 1 && 
                            <Form onSubmit={handleSubmit(addData)}>
                            <Row form>
                                <div className="modal-split" id="page2">
                                <Col className="col-12 mb-1">
                                    {/* # of Bedrooms */}
                                    <FormText>Bedrooms</FormText>
                                    <Controller
                                        control={control}
                                        name="bedCount"
                                        render={({ field }) => <Input type="text" placeholder="Enter number of bedrooms..." {...field} />}
                                        rules={{ required: true }}
                                        defaultValue=""
                                    />
                                    {errors.bedCount && <FormText color="warning">This field is required</FormText>}
                                </Col>
                                <Col className="col-12 mb-1">
                                    {/* # of Bathrooms */}
                                    <FormText>Bathrooms</FormText>
                                    <Controller
                                        control={control}
                                        name="bathCount"
                                        render={({ field }) => <Input type="text" placeholder="Enter number of bathrooms..." {...field} />}
                                        rules={{ required: true }}
                                        defaultValue=""
                                    />
                                    {errors.bathCount && <FormText color="warning">This field is required</FormText>}
                                </Col>
                                <Col className="col-12 mb-1">
                                    {/* Square Footage */}
                                    <FormText>Living Space SqFt</FormText>
                                    <Controller
                                        control={control}
                                        name="livingSQFT"
                                        render={({ field }) => <Input type="text" placeholder="Enter number of living space SqFt..." {...field} />}
                                        rules={{ required: true }}
                                        defaultValue=""
                                    />
                                    {errors.livingSQFT && <FormText color="warning">This field is required</FormText>}
                                </Col>
                                <Col className="col-12 mb-3">
                                    {/* Square Footage - Optional */}
                                    <FormText>Lot SqFt</FormText>
                                    <Controller
                                        control={control}
                                        name="lotSQFT"
                                        render={({ field }) => <Input type="text" placeholder="Enter number of lot SqFt..." {...field} />}
                                        rules={{ required: true }}
                                        defaultValue=""
                                    />
                                    {errors.lotSQFT && <FormText color="warning">This field is required</FormText>}
                                </Col>
                                <div className="modal-footer mt-3"></div>
                                <Button type="button" onClick={prevTab}>Back</Button>
                                <Button onClick={nextTab}>Next</Button>
                            </div>
                            </Row>
                            </Form>
                            }

                            {/* PAGE 3 MODAL SPLIT - Needs to Hide or show tenant add in */}
                            { tab == 2 && 
                            <Form onSubmit={handleSubmit(addData)}>
                                <Row form>
                            
                            <div className="modal-split" id="page3">
                                <Col className="col-12 mb-1">
                                    <FormText style={{ fontWeight: 500 }}>Select Property Status</FormText>
                                    <FormGroup>
                                        <input type="radio" {...register('status')} value="Occupied" />{" "}Occupied{"  "}
                                        <input type="radio" {...register('status')} value="Vacant" />{" "}Vacant
                                    </FormGroup>
                                </Col>
                                {status === "Occupied" && <Col className="col-12 mb-1">
                                    {/* Tenant Name - Optional */}
                                    <FormText>Tenant Name</FormText>
                                    <Controller
                                        control={control}
                                        name="tenantName"
                                        render={({ field }) => <Input type="text" placeholder="Enter tenant's name..." {...field} />}
                                        rules={{ required: true }}
                                        defaultValue=""
                                    />
                                    {errors.tenantName && <FormText color="warning">This field is required</FormText>}
                                    </Col>}
                                    {status === "Occupied" && <Col className="col-12 mb-3">
                                    {/* Tenant Email - Optional */}
                                    <FormText>Tenant Email</FormText>
                                    <Controller
                                        control={control}
                                        name="tenantEmail"
                                        render={({ field }) => <Input type="text" placeholder="Enter tenant's email..." {...field} />}
                                        rules={{ required: true }}
                                        defaultValue=""
                                    />
                                    {errors.tenantEmail && <FormText color="warning">This field is required</FormText>}
                                </Col>}
                                <div className="modal-footer mt-3"></div>
                                <Button onClick={prevTab}>Back</Button>
                                <Button onClick={nextTab}>Next</Button>
                                <Button type="submit">Submit</Button>
                            </div>
                            </Row>
                            </Form>
                            }
                            { tab == 3 && 
                                <Col className="col-12 mb-1">
                                    <div className="modal-split" id="page3">
                                        <div>
                                            You reached the end, you big silly GOOSE!
                                        </div>
                                        <div className="modal-footer mt-3"></div>
                                        <Button onClick={prevTab}>Back</Button>
                                        <Button onClick={onSubmit}>Make a Property</Button>
                                    </div>
                                </Col>
                            }
                </ModalBody>
               
            </Modal>
        </React.Fragment>
    )
}

AddPropertyModal.propTypes = {
    onCloseClick: PropTypes.func,
    show: PropTypes.any
}

export default AddPropertyModal
