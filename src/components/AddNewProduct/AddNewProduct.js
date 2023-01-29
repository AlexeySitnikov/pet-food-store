import { Field, Form, Formik } from 'formik'

export function AddNewProduct() {
  const addNewProductClickHandler = () => {
    console.log('click add new product')
  }

  return (
    <div className="">
      <h1>Add new product page</h1>
      <Formik
        initialValues={{
          ProductName: '', ProductDiscount: 0, ProductPrice: 0, ProductDiscription: '',
        }}
        onSubmit={addNewProductClickHandler}
      >
        <Form>
          <Field name="ProductName" type="text" />
          <Field name="ProductPrice" type="number" />
          <Field name="ProductDiscription" type="text" />
          <Field name="ProductDiscount" type="number" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}
