import React from "react"
import PropTypes from 'prop-types'
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  // useHistory,
  useLocation,
} from "react-router-dom"

import { Button, Form, Input, Col, Modal, ModalHeader, ModalBody, Row } from 'reactstrap'


import { useForm, Controller } from 'react-hook-form'

const Step1 = () => {
  const { handleSubmit, control, formState: { errors } } = useForm()
  function onSubmit(data) {
    console.log(data)
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        render={({ field }) => (
          <Input type="text" name="address" placeholder="Address..." {...field} />
        )}
        name="address"
        control={control}
        rules={{ required: true }}
      />
      {errors.address && "This field is required"}
      <Button>Go</Button>
    </Form>
  )
}