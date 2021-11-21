import React from 'react'
import { Form, Col, Button, Input, FormText } from 'reactstrap'

import {useForm, Controller} from 'react-hook-form'


const AddPropertyModal = () => {
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
        </Form>
    </div>
    )
}

export default AddPropertyModal