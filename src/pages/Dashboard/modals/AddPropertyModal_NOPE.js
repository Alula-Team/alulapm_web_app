import React from 'react'
import PropTypes from 'prop-types'
import { Button, Form, Input, Col, Modal, ModalHeader, ModalBody, Row } from 'reactstrap'
// import { AvField, AvForm } from "availity-reactstrap-validation"
import { useForm, Controller } from 'react-hook-form'
// Firebase Stuffs

import { db } from '../../../helpers/firebase_helper_2'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

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



  const { handleSubmit, control, setValue, formState: { errors } } = useForm()



  async function onSubmit(data) {
    const docRef = await addDoc(collection(db, "properties"), {
      address: data.address,
      city: "Japan",
      createdAt: serverTimestamp()
    })
    setValue("address", "")
    console.log("Document written with ID: ", docRef.id, docRef.createdAt)
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
                  <Controller
                    render={({ field }) => (
                      <Input type="text" name="address" placeholder="Address..." {...field} />
                    )}
                    name="address"
                    control={control}
                    rules={{ required: true }}
                  />
                  {errors.address && "This field is required"}
                </Col>
              </div>
              <div className="modal-split" id="page2">
                <Col className="col-12 mb-3">
                  <Controller
                    render={({ field }) => (
                      <Input type="text" name="email" placeholder="Email..." {...field} />
                    )}
                    name="email"
                    control={control}
                    rules={{ required: true }}
                  />
                  {errors.email && "This field is required"}
                </Col>
              </div>
            </Row>
            <Button>GO</Button>
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
