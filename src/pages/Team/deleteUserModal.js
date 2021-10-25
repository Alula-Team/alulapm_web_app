import React from 'react'
import PropTypes from 'prop-types'
import { Col, Modal, ModalBody, Row } from 'reactstrap'

const DeleteUserModal = ({ show, onDeleteClick, onCloseClick }) => {

    return(
        <React.Fragment>
            <Modal isOpen={show} toggle={onCloseClick} centered={true}>
                <ModalBody toggle={onCloseClick}>
                    <Row>
                        <Col>
                            <p className="text-center mt-5 mb-3"> 
                                Are you sure you want to delete <span className="text-primary"><b>(user&apos;s name)</b></span> from the team?
                            </p>
                            <p className="text-muted text-center mb-5"> 
                                You will not be able to undo this action.
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className="text-center">
                                <button
                                    type="button"
                                    className="btn btn-light me-2"
                                    onClick={onCloseClick}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-danger save-event"
                                    onClick={onDeleteClick}
                                >
                                    Delete
                                </button>
                            </div>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </React.Fragment>
    )
}

DeleteUserModal.propTypes = {
    onCloseClick: PropTypes.func,
    onDeleteClick: PropTypes.func,
    show: PropTypes.any
}

export default DeleteUserModal