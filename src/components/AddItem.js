import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const addItemSchema = Yup.object().shape({
  komoditas: Yup.string()
    .required('Komoditas is required'),
  provinsi: Yup.string()
    .required('Provinsi is required'),
  kota: Yup.string()
    .required('Kota is required'),
  size: Yup.number()
    .required('size is required'),
  price: Yup.number(),
});

const AddItem = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={addItemSchema}
        onSubmit={({ setSubmitting, values }) => {
          alert('Form is validated! Submitting the form...', values);
          setSubmitting(false);
        }}
      >
        {({ touched, errors, isSubmitting }) => (
          <Form>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="form-group">
                <label htmlFor="komoditas">Komoditas</label>
                <Field
                  type="text"
                  name="komoditas"
                  placeholder="Enter komoditas"
                  className={`form-control ${touched.komoditas && errors.komoditas ? 'is-invalid' : ''}`}
                />
                <ErrorMessage
                  component="div"
                  name="komoditas"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="provinsi">provinsi</label>
                <Field
                  type="text"
                  name="provinsi"
                  placeholder="Enter provinsi"
                  className={`form-control ${touched.provinsi && errors.provinsi ? 'is-invalid' : ''}`}
                />
                <ErrorMessage
                  component="div"
                  name="provinsi"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="kota">kota</label>
                <Field
                  type="text"
                  name="kota"
                  placeholder="Enter kota"
                  className={`form-control ${touched.kota && errors.kota ? 'is-invalid' : ''}`}
                />
                <ErrorMessage
                  component="div"
                  name="kota"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="size">size</label>
                <Field
                  type="text"
                  name="size"
                  placeholder="Enter size"
                  className={`form-control ${touched.size && errors.size ? 'is-invalid' : ''}`}
                />
                <ErrorMessage
                  component="div"
                  name="size"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">price</label>
                <Field
                  type="text"
                  name="price"
                  placeholder="Enter price"
                  className={`form-control ${touched.price && errors.price ? 'is-invalid' : ''}`}
                />
                <ErrorMessage
                  component="div"
                  name="price"
                  className="invalid-feedback"
                />
              </div>


            </Modal.Body>
            <Modal.Footer>
              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Please wait...' : 'Submit'}
              </button>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};
export default AddItem;