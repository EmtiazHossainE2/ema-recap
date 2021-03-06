
import React, { useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';

const Inventory = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className='w-50 m-auto my-5 py-5'>
            <h2>Your Info</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3 ">
                    <Form.Group className='py-2' as={Col} md="12" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='py-2' as={Col} md="12" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Last name"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='py-2' as={Col} md="12" controlId="validationCustomUsername">
                        <Form.Label>Phone Number</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                type="text"
                                placeholder="Contact number"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="City" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" placeholder="State" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control type="text" placeholder="Zip" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                    />
                </Form.Group>
                <Button type="submit">Submit and Payment</Button>
            </Form>
        </div>
    );
};

export default Inventory;






















// import React from 'react';
// import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';

// const { Formik } = formik;

// const schema = yup.object().shape({
//     firstName: yup.string().required(),
//     lastName: yup.string().required(),
//     username: yup.string().required(),
//     city: yup.string().required(),
//     state: yup.string().required(),
//     zip: yup.string().required(),
//     terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
// });

// const Inventory = () => {

//     return (
//         <div className='text-center my-5'>
//             <h2>this is inventory page</h2>
//             <Formik
//                 validationSchema={schema}
//                 onSubmit={console.log}
//                 initialValues={{
//                     firstName: 'Mark',
//                     lastName: 'Otto',
//                     username: '',
//                     city: '',
//                     state: '',
//                     zip: '',
//                     terms: false,
//                 }}
//             >
//                 {({
//                     handleSubmit,
//                     handleChange,
//                     handleBlur,
//                     values,
//                     touched,
//                     isValid,
//                     errors,
//                 }) => (
//                     <Form noValidate onSubmit={handleSubmit}>
//                         <Row className="mb-3">
//                             <Form.Group as={Col} md="4" controlId="validationFormik01">
//                                 <Form.Label>First name</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     name="firstName"
//                                     value={values.firstName}
//                                     onChange={handleChange}
//                                     isValid={touched.firstName && !errors.firstName}
//                                 />
//                                 <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                             </Form.Group>
//                             <Form.Group as={Col} md="4" controlId="validationFormik02">
//                                 <Form.Label>Last name</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     name="lastName"
//                                     value={values.lastName}
//                                     onChange={handleChange}
//                                     isValid={touched.lastName && !errors.lastName}
//                                 />

//                                 <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                             </Form.Group>
//                             <Form.Group as={Col} md="4" controlId="validationFormikUsername">
//                                 <Form.Label>Username</Form.Label>
//                                 <InputGroup hasValidation>
//                                     <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//                                     <Form.Control
//                                         type="text"
//                                         placeholder="Username"
//                                         aria-describedby="inputGroupPrepend"
//                                         name="username"
//                                         value={values.username}
//                                         onChange={handleChange}
//                                         isInvalid={!!errors.username}
//                                     />
//                                     <Form.Control.Feedback type="invalid">
//                                         {errors.username}
//                                     </Form.Control.Feedback>
//                                 </InputGroup>
//                             </Form.Group>
//                         </Row>
//                         <Row className="mb-3">
//                             <Form.Group as={Col} md="6" controlId="validationFormik03">
//                                 <Form.Label>City</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     placeholder="City"
//                                     name="city"
//                                     value={values.city}
//                                     onChange={handleChange}
//                                     isInvalid={!!errors.city}
//                                 />

//                                 <Form.Control.Feedback type="invalid">
//                                     {errors.city}
//                                 </Form.Control.Feedback>
//                             </Form.Group>
//                             <Form.Group as={Col} md="3" controlId="validationFormik04">
//                                 <Form.Label>State</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     placeholder="State"
//                                     name="state"
//                                     value={values.state}
//                                     onChange={handleChange}
//                                     isInvalid={!!errors.state}
//                                 />
//                                 <Form.Control.Feedback type="invalid">
//                                     {errors.state}
//                                 </Form.Control.Feedback>
//                             </Form.Group>
//                             <Form.Group as={Col} md="3" controlId="validationFormik05">
//                                 <Form.Label>Zip</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     placeholder="Zip"
//                                     name="zip"
//                                     value={values.zip}
//                                     onChange={handleChange}
//                                     isInvalid={!!errors.zip}
//                                 />

//                                 <Form.Control.Feedback type="invalid">
//                                     {errors.zip}
//                                 </Form.Control.Feedback>
//                             </Form.Group>
//                         </Row>
//                         <Form.Group className="mb-3">
//                             <Form.Check
//                                 required
//                                 name="terms"
//                                 label="Agree to terms and conditions"
//                                 onChange={handleChange}
//                                 isInvalid={!!errors.terms}
//                                 feedback={errors.terms}
//                                 feedbackType="invalid"
//                                 id="validationFormik0"
//                             />
//                         </Form.Group>
//                         <Button type="submit">Submit form</Button>
//                     </Form>
//                 )}
//             </Formik>
//         </div>
//     );
// };

// export default Inventory;