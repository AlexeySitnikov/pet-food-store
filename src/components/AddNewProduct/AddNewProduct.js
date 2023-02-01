/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Field, Form, Formik } from 'formik'
import { api } from '../API/api'

export function AddNewProduct() {
  const addNewProductClickHandler = async (values) => {
    // const userId = await api.getUserData()
    const product = {
      discount: values.ProductDiscount,
      stock: 100,
      available: true,
      pictures: values.ProductPicture,
      name: values.ProductName,
      price: values.ProductPrice,
      wight: values.ProductWight,
      description: values.ProductDiscription,
    }
    const result = await api.addNewProduct(product)
    console.log(result)
  }

  return (
    <div className="container">
      <h1 className="d-flex justify-content-center">Add new product page</h1>
      <Formik
        initialValues={{
          ProductName: '', ProductDiscount: 0, ProductPrice: 0, ProductDiscription: '', ProductPicture: '', ProductWight: '',
        }}
        onSubmit={async (values) => {
          addNewProductClickHandler(values)
        }}
        // stock: product.stock,
        // available: product.available,
        // author: product.author,
        // wight: product.wight,
      >
        <Form className="d-flex justify-content-center flex-column">
          <label htmlFor="ProductName">Product Name</label>
          <Field name="ProductName" type="text" placeholder="Product Name" />

          <label htmlFor="ProductPrice">Product Price</label>
          <Field name="ProductPrice" type="number" />

          <label htmlFor="ProductPicture">Product Picture</label>
          <Field name="ProductPicture" type="url" placeholder="url" />

          <label htmlFor="ProductDiscription">Product Discription</label>
          <Field name="ProductDiscription" type="textarea" placeholder="something about product" />

          <label htmlFor="ProductDiscount">Product Discount</label>
          <Field name="ProductDiscount" type="number" />

          <label htmlFor="ProductWight">Product Wight</label>
          <Field name="ProductWight" type="text" />

          <button className="my-5" type="submit">Add</button>
        </Form>
      </Formik>
    </div>
  )
}
