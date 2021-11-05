import React from 'react'
import PropTypes from 'prop-types'
import { Col, FormText, Input, Modal, ModalHeader, ModalBody, Row } from 'reactstrap'
import { AvField, AvForm, AvInput, AvRadio, AvRadioGroup } from "availity-reactstrap-validation"

const AddTransactionsModal = ({ show, onCloseClick }) => {

    $(document).ready(function() {
        prep_modal()
    })
    function prep_modal() {
        $(".modal").each(function() {
      
            var element = this
            var pages = $(this).find('.modal-split')
        
            if (pages.length != 0) {
                pages.hide()
                pages.eq(0).show()
        
                var b_button = document.createElement("button")
                        b_button.setAttribute("type","button")
                            b_button.setAttribute("class","btn btn-light")
                            b_button.setAttribute("style","display: none")
                            b_button.innerHTML = "Back"
        
                var n_button = document.createElement("button")
                        n_button.setAttribute("type","button")
                            n_button.setAttribute("class","btn btn-primary")
                            n_button.innerHTML = "Next"
        
                $(this).find('.modal-footer').append(b_button).append(n_button)
        
        
                var page_track = 0
        
                $(n_button).click(function() {
                
                    this.blur()
            
                    if(page_track == 0) {
                        $(b_button).show()
                    }
        
                    if(page_track == pages.length-2) {
                        $(n_button).text("Save")
                    }
            
                    if(page_track == pages.length-1) {
                        $(element).find("form").submit()
                    }
            
                        if(page_track < pages.length-1) {
                            page_track++
            
                            pages.hide()
                            pages.eq(page_track).show()
                        }
                })
        
                $(b_button).click(function() {
        
                    if(page_track == 1)
                    {
                        $(b_button).hide()
                    }
        
                    if(page_track == pages.length-1)
                    {
                        $(n_button).text("Next")
                    }
        
                    if(page_track > 0)
                    {
                        page_track--
        
                        pages.hide()
                        pages.eq(page_track).show()
                    }
                })
            }
        })
    }

    return (
        <React.Fragment>
            <Modal isOpen={show} toggle={onCloseClick} centered={true}>
                <ModalHeader tag="h4" toggle={onCloseClick}>
                    Add Transaction
                </ModalHeader>
                <ModalBody>
                    <AvForm 
                        // onValidSubmit={handleValidEventSubmit}
                        >
                        <Row form>
                            {/* PAGE 1 MODAL SPLIT */}
                            <div className="modal-split" id="page1">
                                <Col className="col-12 mb-3">
                                    {/* Select Transaction Type */}
                                    <p style={{fontWeight: 500, fontSize: 13, marginBottom: 7.5}}>Select Transaction Type <span className="text-danger">*</span></p>
                                    <AvRadioGroup inline name="transactionTypeRadio" required>
                                        <AvRadio label="Expense" value="expense" />
                                        <AvRadio label="Payment" value="payment" />
                                    </AvRadioGroup>
                                </Col>

                                <Col className="col-12 mb-3">
                                    {/* Select Transaction Destination */}
                                    <p style={{fontWeight: 500, fontSize: 13, marginBottom: 7.5}}>Transaction Destination <span className="text-danger">*</span></p>
                                    <AvField
                                        type="select"
                                        name="transaction_destination"
                                        helpMessage="Select the appropriate property or choose general transaction"
                                        validate={{
                                            required: { value: true },
                                        }}
                                        value={
                                            event ? event.transaction_category : "select-destination"
                                        }
                                    >
                                        <option value="select-destination">Select Destination...</option>
                                        <option value="bg-success">General Transaction</option>
                                        <hr/>
                                        <option value="bg-primary">Property Address</option>
                                    </AvField>
                                </Col>
                            </div>
                            
                            {/* PAGE 2 MODAL SPLIT */}
                            <div className="modal-split" id="page2">
                                <Col className="col-12 mb-3">
                                    {/* Select Transaction Category */}
                                    <p style={{fontWeight: 500, fontSize: 13, marginBottom: 7.5}}>Transaction Category <span className="text-danger">*</span></p>
                                    <AvField
                                        type="select"
                                        name="transaction_category"
                                        validate={{
                                            required: { value: true },
                                        }}
                                        value={
                                            event ? event.transaction_category : "select-category"
                                        }
                                    >
                                        <option value="select-category">Select Category...</option>
                                        <option value="appraisal">Appraisal</option>
                                        <option value="cleaning">Cleaning</option>
                                        <option value="inspection">Inspection</option>
                                        <option value="marketing">Marketing</option>
                                        <option value="other">Other</option>
                                        <option value="pest_control">Pest Control</option>
                                        <option value="refund">Refund</option>
                                        <option value="renovations">Renovations</option>
                                        <option value="rent_payment">Rent Payment</option>
                                        <option value="report">Report</option>
                                        <option value="repairs">Repairs</option>
                                        <option value="security_deposit">Security Deposit</option>
                                        <option value="tax-services">Tax Services</option>
                                    </AvField>
                                </Col>

                                <Col className="col-12 mb-3">
                                    {/* Select Payment Type */}
                                    <p style={{fontWeight: 500, fontSize: 13, marginBottom: 7.5}}>Payment Type <span className="text-danger">*</span></p>
                                    <AvField
                                        type="select"
                                        name="payment_type"
                                        validate={{
                                            required: { value: true },
                                        }}
                                        value={
                                            event ? event.payment_type : "select-category"
                                        }
                                    >
                                        <option value="select-payment">Select Payment Type...</option>
                                        <option value="ach">ACH</option>
                                        <option value="cash">Cash</option>
                                        <option value="check">Check</option>
                                        <option value="credit_card">Credit Card</option>
                                        <option value="debit_card">Debit Card</option>
                                        <option value="wire_transfer">Wire Transfer</option>
                                    </AvField>
                                </Col>

                                <Col className="col-12 mb-3">
                                    {/* Amount */}
                                    <p style={{fontWeight: 500, fontSize: 13, marginBottom: 7.5}}>Amount <span className="text-danger">*</span></p>
                                    <AvField
                                        name="amount"
                                        placeholder="i.e 1500"
                                        helpMessage="Numbers only"
                                        type="number"
                                        errorMessage="Please enter the ammount"
                                        validate={{
                                            required: { value: true },
                                        }}
                                        value={event ? event.title : ""}
                                    />
                                </Col>

                                <Col className="col-12 mb-3">
                                    {/* Date Paid */}
                                    <p style={{fontWeight: 500, fontSize: 13, marginBottom: 7.5}}>Date Paid <span className="text-danger">*</span></p>
                                    <AvField
                                        name="date-paid"
                                        placeholder="i.e MM-DD-YYYY"
                                        helpMessage="Numbers only"
                                        type="number"
                                        errorMessage="Please enter the ammount"
                                        validate={{
                                            required: { value: true },
                                        }}
                                        value={event ? event.title : ""}
                                    />
                                </Col>
                            </div>
                            
                            {/* PAGE 3 MODAL SPLIT */}
                            <div className="modal-split" id="page3">
                                {/* Description */}
                                <p style={{fontWeight: 500, fontSize: 13, marginBottom: 7.5}}>Description</p>
                                <AvInput
                                    name="description"
                                    placeholder="Enter transaction description..."
                                    type="textarea"
                                    style={{ "height": "200px"}}
                                />
                            </div>

                            {/* Page 4 MODAL SPLIT */}
                            <div className="modal-split" id="page3">
                                {/* Upload Invoice or Receipt - PDF or IMG */}
                                <p style={{fontWeight: 500, fontSize: 13, marginBottom: 7.5}}>Upload Invoice or Receipt</p>
                                <Col >
                                    <div className="mt-4 mt-md-0">
                                        <Input
                                        type="file"
                                        className="form-control"
                                        // defaultValue={}
                                        />
                                        <FormText color="muted">
                                            Optional - any file type
                                        </FormText>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                    </AvForm>
                </ModalBody>
                <div className="modal-footer"></div>
            </Modal>
        </React.Fragment>
    )
}

AddTransactionsModal.propTypes = {
    onCloseClick: PropTypes.func,
    show: PropTypes.any
}

export default AddTransactionsModal
