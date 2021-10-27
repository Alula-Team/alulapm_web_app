import React from 'react'
import PropTypes from 'prop-types'
import { Col, Modal, ModalHeader, ModalBody, Row, Input, FormText, Form, FormGroup, Button } from 'reactstrap'
import { useForm, Controller } from 'react-hook-form'

import { db } from '../../helpers/firebase_helper_2'
import { collection, addDoc } from 'firebase/firestore'

const AddPropertyModal = ({ show, onCloseClick }) => {

    $(document).ready(function () {
        prep_modal()
    })
    function prep_modal() {
        $(".modal").each(function () {

            var element = this
            var pages = $(this).find('.modal-split')

            if (pages.length != 0) {
                pages.hide()
                pages.eq(0).show()

                var b_button = document.createElement("button")
                b_button.setAttribute("type", "button")
                b_button.setAttribute("class", "btn btn-light")
                b_button.setAttribute("style", "display: none")
                b_button.innerHTML = "Back"

                var n_button = document.createElement("button")
                n_button.setAttribute("type", "button")
                n_button.setAttribute("class", "btn btn-primary")
                n_button.innerHTML = "Next"

                $(this).find('.modal-footer').append(b_button).append(n_button)


                var page_track = 0

                $(n_button).click(function () {

                    this.blur()

                    if (page_track == 0) {
                        $(b_button).show()
                    }

                    if (page_track == pages.length - 2) {
                        $(n_button).text("Save")
                    }

                    if (page_track == pages.length - 1) {
                        $(element).find("form").submit()
                    }

                    if (page_track < pages.length - 1) {
                        page_track++

                        pages.hide()
                        pages.eq(page_track).show()
                    }
                })

                $(b_button).click(function () {

                    if (page_track == 1) {
                        $(b_button).hide()
                    }

                    if (page_track == pages.length - 1) {
                        $(n_button).text("Next")
                    }

                    if (page_track > 0) {
                        page_track--

                        pages.hide()
                        pages.eq(page_track).show()
                    }
                })
            }
        })
    }

    const { control, handleSubmit, register, watch, formState: { errors } } = useForm()

    const status = watch("status", "Vacant")

    async function onSubmit(data) {
        let docRef = await addDoc(collection(db, "properties"), {
            ...data
        })
        console.log(`Doc added with id: `, docRef.id)
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
                                <Col className="col-12 mb-3">
                                    {/* Property Address - Needs Google Places API */}
                                    <FormText>Property Address</FormText>
                                    <Controller
                                        control={control}
                                        name="propertyAddress"
                                        className="mb-3"
                                        render={({ field }) => <Input type="text" placeholder="Enter property address..." {...field} />}
                                        rules={{ required: true }}
                                        defaultValue=""
                                    />
                                    {errors.propertyAddress && <FormText color="warning">This field is required</FormText>}

                                    {/* Unit - Optional */}
                                    <FormText>Property Address</FormText>
                                    <Controller
                                        control={control}
                                        name="unit"
                                        className="mb-3"
                                        render={({ field }) => <Input type="text" placeholder="Enter unit number... " {...field} />}
                                        rules={{ required: false }}
                                        defaultValue=""
                                    />
                                    <FormText>Optional - include &quot;Apt&quot;, &quot;Unit&quot;, etc...</FormText>
                                </Col>
                            </div>

                            {/* PAGE 2 MODAL SPLIT */}
                            <div className="modal-split" id="page2">
                                <Col className="col-12 mb-3">
                                    {/* # of Bedrooms */}
                                    <FormText>Bedrooms</FormText>
                                    <Controller
                                        control={control}
                                        name="bedCount"
                                        className="mb-3"
                                        render={({ field }) => <Input type="text" placeholder="Enter number of bedrooms..." {...field} />}
                                        rules={{ required: true }}
                                        defaultValue=""
                                    />
                                    {errors.bedCount && <FormText color="warning">This field is required</FormText>}
                                </Col>
                                <Col className="col-12 mb-3">
                                    {/* # of Bathrooms */}
                                    <FormText>Bathrooms</FormText>
                                    <Controller
                                        control={control}
                                        name="bathCount"
                                        className="mb-3"
                                        render={({ field }) => <Input type="text" placeholder="Enter number of bathrooms..." {...field} />}
                                        rules={{ required: true }}
                                        defaultValue=""
                                    />
                                    {errors.bathCount && <FormText color="warning">This field is required</FormText>}
                                </Col>
                                <Col className="col-12 mb-3">
                                    {/* Square Footage */}
                                    <FormText>Living Space SqFt</FormText>
                                    <Controller
                                        control={control}
                                        name="livingSQFT"
                                        className="mb-3"
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
                                        className="mb-3"
                                        render={({ field }) => <Input type="text" placeholder="Enter number of lot SqFt..." {...field} />}
                                        rules={{ required: true }}
                                        defaultValue=""
                                    />
                                    {errors.lotSQFT && <FormText color="warning">This field is required</FormText>}
                                </Col>
                            </div>

                            {/* PAGE 3 MODAL SPLIT - Needs to Hide or show tenant add in */}
                            <div className="modal-split" id="page3">
                                <Col className="col-12 mb-3">
                                    <FormText style={{ fontWeight: 500 }}>Select Property Status</FormText>
                                    <FormGroup>
                                        <input type="radio" {...register('status')} value="Occupied" />{" "}Occupied
                                        <input type="radio" {...register('status')} value="Vacant" />{" "}Vacant
                                    </FormGroup>
                                </Col>
                                {status === "Occupied" && <Col className="col-12 mb-3">
                                    {/* Tenant Name - Optional */}
                                    <Controller
                                        control={control}
                                        name="tenantName"
                                        className="mb-3"
                                        render={({ field }) => <Input type="text" placeholder="Enter tenant's name..." {...field} />}
                                        rules={{ required: true }}
                                        defaultValue=""
                                    />
                                    {errors.tenantName && <FormText color="warning">This field is required</FormText>}
                                    {/* Tenant Email - Optional */}
                                    <Controller
                                        control={control}
                                        name="tenantEmail"
                                        className="mb-3"
                                        render={({ field }) => <Input type="text" placeholder="Enter tenant's email..." {...field} />}
                                        rules={{ required: true }}
                                        defaultValue=""
                                    />
                                    {errors.tenantEmail && <FormText color="warning">This field is required</FormText>}
                                </Col>}
                                <Button>Do It!</Button>
                            </div>
                        </Row>
                    </Form>
                </ModalBody>
                <div className="modal-footer"></div>
            </Modal>
        </React.Fragment>
    )
}

AddPropertyModal.propTypes = {
    onCloseClick: PropTypes.func,
    show: PropTypes.any
}

export default AddPropertyModal
