import React, { useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { createItem } from '../actions/ItemActions';

const addItemSchema = Yup.object().shape({
  komoditas: Yup.string()
    .required('Komoditas is required'),
  area_provinsi: Yup.string()
    .required('Provinsi is required'),
  area_kota: Yup.string()
    .required('Kota is required'),
  size: Yup.string()
    .required('size is required'),
  price: Yup.number()
    .required('price is required'),
});



const AddItem = (props) => {
  const sizes = useSelector(state => state.sizes);
  const areas = useSelector(state => state.areas);
  const dispatch = useDispatch();
  const [range, setRange] = React.useState(0);
  let handleChange = () => { };
  let handleChangeProv = () => { };
  useEffect(
    () => {
      handleChange = (value, callback) => {
        setRange(value);
        sizes[value] &&
          callback('size', sizes[value].size);
      };
    },
    [sizes, handleChange],
  );
  useEffect(
    () => {
      handleChangeProv = (value, callback) => {
        const area = areas.filter(area => area.city === value);
        area[0] && callback('area_provinsi', area[0].province);
        area[0] && callback('area_kota', area[0].city);
      };
    },
    [areas, handleChangeProv],
  );

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Formik
        initialValues={{ komoditas: '', area_provinsi: '', area_kota: '', size: sizes[range] && sizes[range].size, price: null }}
        validationSchema={addItemSchema}
        onSubmit={(values, actions) => {
          dispatch(createItem(values));
          actions.setSubmitting(false);
          props.onHide();
        }}
      >
        {({ touched, errors, isSubmitting, setFieldValue, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Add Item
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
                  name="area_provinsi"
                  placeholder="Enter provinsi"
                  className={`form-control ${touched.provinsi && errors.provinsi ? 'is-invalid' : ''}`}
                  disabled
                />
                <ErrorMessage
                  component="div"
                  name="area_provinsi"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="kota">kota</label>
                <Field
                  type="text"
                  name="area_kota"
                  placeholder="Enter kota"
                  className={`form-control ${touched.kota && errors.kota ? 'is-invalid' : ''}`}
                  as="select"
                  onChange={(e) => handleChangeProv(e.target.value, setFieldValue)}
                >
                  <option value="">Select city</option>
                  {areas.map((area, i) => <option key={i} value={area.city}>{area.city}</option>)}
                </Field>
                <ErrorMessage
                  component="div"
                  name="area_provinsi"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="size">size</label>
                <input className="form-range" type="range" min="0" value={range} max={sizes.length} onChange={e => handleChange(e.target.value, setFieldValue)} />
                <Field
                  type="text"
                  name="size"
                  placeholder="Enter size"
                  disabled
                  className={`form-control ${errors.size ? 'is-invalid' : ''}`}
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