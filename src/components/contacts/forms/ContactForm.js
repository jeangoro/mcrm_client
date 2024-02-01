import React from "react";
import '../../../assets/scss/pages/_contacts.scss';
import {useFormik} from "formik";
import * as Yup from "yup";
import {Button, Card, Col, Form, FormFeedback, FormGroup, Input, Label, Row,} from "reactstrap";

export const ContactForm = ({refData, form, initialValues, onSubmit}) => {

    const validationSchema = {};
    form.forEach(field => {
        validationSchema[field.name] = field.validation
    })
    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues,
        validationSchema: Yup.object(validationSchema),
        onSubmit
    });
    const buildInputForm = (formField, validation) => (
        <Col md={4} key={formField.name}>
            <FormGroup>
                <Label for={formField.name}>
                    {formField.label}
                </Label>
                <Input
                    type={formField.type}
                    name={formField.name}
                    placeholder={formField.label}
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values[formField.name] || ""}
                    invalid={
                        !!((validation.submitCount > 0 ||validation.touched[formField.name]) && validation.errors[formField.name])
                    }
                />
                { (validation.submitCount > 0 ||validation.touched[formField.name]) && validation.errors[formField.name] ? (
                    <FormFeedback type="invalid">{validation.errors[formField.name]}</FormFeedback>
                ) : null}
            </FormGroup>
        </Col>
    )
    const buildSelectForm = (formField, validation) => (
        <Col md={4} key={formField.name}>
            <FormGroup>
                <Label for={formField.name}>
                    {formField.label}
                </Label>
                <Input
                    name={formField.name}
                    placeholder={formField.label}
                    type="select"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values[formField.name] || ""}
                    invalid={
                        !!(validation.touched[formField.name] && validation.errors[formField.name])
                    }
                >
                    <option value=""/>
                    {
                        (refData[formField.optionsKey] || []).map( option => (
                            <option value={option.value} key={option.id || option.value}>
                                {option.text}
                            </option>
                        ))
                    }
                </Input>
                {validation.touched[formField.name] && validation.errors[formField.name] ? (
                    <FormFeedback type="invalid">{validation.errors[formField.name]}</FormFeedback>
                ) : null}
            </FormGroup>
        </Col>
    )
    return (
        <Card>
            <Form
                onSubmit={(e) => {
                    e.preventDefault();
                    validation.handleSubmit();
                    return false;
                }} >
                <Row>
                    {
                        form.map( formField => {
                            switch (formField.type) {
                                case "text":
                                    return buildInputForm(formField, validation);
                                case 'select':
                                    return buildSelectForm(formField, validation);
                                default:
                                    return buildInputForm(formField, validation);
                            }})
                    }
                    <Button type="submit">
                        Créer contact
                    </Button>
                </Row>
            </Form>
        </Card>
    )
};
