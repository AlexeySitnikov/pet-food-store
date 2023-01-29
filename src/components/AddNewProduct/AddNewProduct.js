import { Field, Form, Formik } from 'formik'

export function AddNewProduct() {
  const addNewProductClickHandler = () => {
    console.log('click add new product')
  }

  return (
    <div>
      <h1>Add new product page</h1>
      <Formik
        initialValues={{
          ProductName: '', ProductDiscount: 0, ProductPrice: 0, ProductDiscription: '',
        }}
        onSubmit={addNewProductClickHandler}
      >
        <Form className="d-flex flex-column">
          <Field name="ProductName" type="text" />
          <Field name="ProductPrice" type="number" />
          <Field name="ProductDiscription" type="textarea" />
          <Field name="ProductDiscount" type="number" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}
