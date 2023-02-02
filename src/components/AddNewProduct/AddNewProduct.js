/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useMutation } from '@tanstack/react-query'
import { Field, Form, Formik } from 'formik'
import { useLocation, useNavigate } from 'react-router-dom'
import { api } from '../API/api'
import { BackButton } from '../ProductPage/BackButton'

export function AddNewProduct() {
  const navigate = useNavigate()
  const ADDPRODUCT = ['ADDPRODUCT']
  const CHANGEPRODUCT = ['CHANGEPRODUCT']
  const location = useLocation()
  const { product: productToModify } = location.state ?? ''

  const addProductFn = async (product) => {
    api.addNewProduct(product)
  }

  const { mutateAsync: addProduct } = useMutation({
    mutationKey: ADDPRODUCT,
    mutationFn: addProductFn,
    onSuccess: () => {
      navigate('/')
    },
  })

  const changeProductFn = async (product) => {
    api.changeProduct(productToModify._id, product)
  }

  const { mutateAsync: changeProduct } = useMutation({
    mutationKey: CHANGEPRODUCT,
    mutationFn: changeProductFn,
    onSuccess: () => {
      navigate('/')
    },
  })

  return (
    <div className="container">
      <h1 className="d-flex justify-content-center">
        {`${productToModify
          ? 'Change product page' : 'Add new product page'}`}
      </h1>
      <Formik
        initialValues={{
          ProductName: productToModify ? productToModify.name : '',
          ProductDiscount: productToModify ? productToModify.discount : 0,
          ProductPrice: productToModify ? productToModify.price : 0,
          ProductDiscription: productToModify ? productToModify.description : '',
          ProductPicture: productToModify ? productToModify.pictures : '',
          ProductWight: productToModify ? productToModify.wight : '',
        }}
        onSubmit={async (values) => {
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
          if (productToModify) {
            await changeProduct(product)
          } else {
            await addProduct(product)
          }
        }}
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

          <button className="my-5" type="submit">
            {`${productToModify ? 'Change' : 'Add'}`}
          </button>
          <BackButton />
        </Form>
      </Formik>
    </div>
  )
}
