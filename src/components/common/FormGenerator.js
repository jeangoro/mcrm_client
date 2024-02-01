import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Col, Form, FormGroup, Input, Label, ModalBody, ModalFooter, ModalHeader, OffcanvasBody, Row } from "reactstrap";
import Select from "react-select";
import CustomButton from "./CustomButton";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import fr from "react-phone-number-input/locale/fr";

const FormGenerator = ({
  headerName,
  isModal = false,
  formFields,
  formConfig = {
    formId: "",
    fieldWidth: 3,
    onSubmit: (values) => {},
    onCancel: () => {},
    btnSubmitText: "OK",
    btnCancelText: "Annuler",
    loading: false,
    buttonsFloatBottom: false,
  },
}) => {
  const enableReinitialize = true;
  const initialValues = {};
  const validationSchema = {};

  const convertDate = (newDate) => {
    let fieldDate = new Date(newDate).toLocaleDateString("en-CA");
    return fieldDate;
  };
  formFields.forEach((field) => {
    initialValues[field.name] = field.type === "date" ? convertDate(field.value) : field.value;
  });
  formFields.forEach((field) => {
    validationSchema[field.name] = field.validation;
  });

  const formik = useFormik({ enableReinitialize: enableReinitialize, initialValues: initialValues, validationSchema: Yup.object().shape(validationSchema), onSubmit: formConfig.onSubmit });

  const renderInputError = (message) => <div className="text-danger">{message}</div>;

  const getSelectOption = (field) => {
    let option = field.optionsValue.find((el) => {
      return el.value === formik.values[field.name];
    });
    if (option !== undefined) {
      return option;
    } else {
      return { value: "", label: "---select---" };
    }
  };

  return (
    <div>
      <Form
        id={formConfig.formId}
        onSubmit={(e) => {
          e.preventDefault();
          //   formik.handleSubmit();
          return false;
        }}
        action=""
      >
        {isModal && (
          <ModalHeader className="mcrm-bg pb-4">
            <div className="modal-title" id="myModalLabel">
              {headerName}
            </div>
            <Button type="button" className="btn-close" onClick={formConfig.onCancel} aria-label="Close"></Button>
          </ModalHeader>
        )}

        <ModalBody>
          <Row>
            {formFields.map((field, key) => (
              <Col key={key} md={formConfig.fieldWidth}>
                <FormGroup className="mb-2">
                  {field.type !== "checkbox" && (
                    <Label for={field.name} className="form-label text-muted">
                      {field.label}
                    </Label>
                  )}
                  {field.type === "text" || field.type === "number" || field.type === "email" ? (
                    <Input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      disabled={field.disabled || false}
                      placeholder={field.placeholder || ""}
                      value={formik.values[field.name] || ""}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      invalid={formik.touched[field.name] && formik.errors[field.name] !== undefined}
                    />
                  ) : field.type === "select" ? (
                    <>
                      <Select
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        isDisabled={field.disabled || false}
                        value={
                          field.isMulti && formik.values[field.name] !== undefined
                            ? formik.values[field.name].map((val) => {
                                return {
                                  value: val,
                                  label:
                                    val !== ""
                                      ? field.optionsValue.find((el) => {
                                          return el.value === val;
                                        })?.label
                                      : "",
                                };
                              })
                            : formik.values[field.name] !== ""
                            ? getSelectOption(field)
                            : { value: "", label: "" }
                        }
                        isMulti={field.isMulti || false}
                        onChange={(e) => {
                          field.isMulti
                            ? formik.setFieldValue(
                                field.name,
                                e.map((val) => val.value)
                              )
                            : formik.setFieldValue(field.name, e.value);
                        }}
                        onBlur={formik.handleBlur}
                        invalid={formik.touched[field.name] && formik.errors[field.name] !== undefined}
                        options={field.optionsValue}
                      />
                    </>
                  ) : field.type === "textarea" ? (
                    <Input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      disabled={field.disabled || false}
                      rows={5}
                      value={formik.values[field.name] || ""}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      invalid={formik.touched[field.name] && formik.errors[field.name] !== undefined}
                    />
                  ) : field.type === "checkbox" ? (
                    <Input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      disabled={field.disabled || false}
                      checked={formik.values[field.name] || false}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      invalid={formik.touched[field.name] && formik.errors[field.name] !== undefined}
                    />
                  ) : field.type === "date" ? (
                    <Input
                      type={"date"}
                      id={field.name}
                      name={field.name}
                      disabled={field.disabled || false}
                      placeholder={field.placeholder || ""}
                      value={formik.values[field.name] || "2000/05/15"}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      invalid={formik.touched[field.name] && formik.errors[field.name] !== undefined}
                    />
                  ) : field.type === "file" ? (
                    <Input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      disabled={field.disabled || false}
                      value={formik.values[field.name] || ""}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      invalid={formik.touched[field.name] && formik.errors[field.name] !== undefined}
                    />
                  ) : field.type === "phone" ? (
                    <>
                      <PhoneInput
                        id={field.name}
                        name={field.name}
                        international
                        defaultCountry="CM"
                        countryCallingCodeEditable={false}
                        labels={fr}
                        flags={flags}
                        // error={formik.values[field.name] ? (isValidPhoneNumber(formik.values[field.name]) ? undefined : "Numero de téléphone invalide") : "Le numero de téléphone est obligatoire"}
                        value={formik.values[field.name] || ""}
                        onChange={(val) => {
                          let val1 = val !== undefined ? val : "";
                          formik.handleChange(val1);
                          formik.values[field.name] = val1;
                          formik.setFieldError(
                            field.name,
                            formik.values[field.name] ? (isValidPhoneNumber(formik.values[field.name]) ? undefined : "Numero de téléphone invalide") : "Le numero de téléphone est obligatoire"
                          );
                          formik.isValid = isValidPhoneNumber(formik.values[field.name]) ? false : true;
                        }}
                        onBlur={formik.handleBlur}
                        invalid={isValidPhoneNumber(formik.values[field.name]) ? false : true}
                      />
                    </>
                  ) : (
                    <Input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      disabled={field.disabled || false}
                      placeholder={field.placeholder || ""}
                      value={formik.values[field.name] || ""}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      invalid={formik.touched[field.name] && formik.errors[field.name] !== undefined}
                    />
                  )}
                  {field.type === "checkbox" && (
                    <>
                      {" "}
                      <Label for={field.name} className="form-label text-muted">
                        {field.label}
                      </Label>
                    </>
                  )}
                  {formik.errors[field.name] ? renderInputError(formik.errors[field.name]) : null}
                </FormGroup>
              </Col>
            ))}
          </Row>
        </ModalBody>

        <ModalFooter className={formConfig.buttonsFloatBottom ? "mcrm-float-bottom border-top pt-2 gap-2" : "border-top pt-2 gap-2"}>
          {formConfig.btnSubmitText && <CustomButton actionName={formConfig.btnSubmitText || "OK"} loading={formConfig.loading} isFormValid={formik.isValid} onClik={formik.handleSubmit} />}
          {formConfig.btnCancelText && (
            <Button onClick={formConfig.onCancel} className="mcrm-btn-danger">
              {formConfig.btnCancelText || "Annuler"}
            </Button>
          )}
        </ModalFooter>
      </Form>
    </div>
  );
};

export default FormGenerator;
