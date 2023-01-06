// import { useDispatch } from 'react-redux'

export function CartItem({ idx, product }) {
  // const dispatch = useDispatch()

  const changeStatusTodoHandler = () => {
    // dispatch()
  }

  const deleteTodoHandler = () => {
    // dispatch()
  }
  console.log(product.id)
  return (
    <li className="list-group-item d-flex justify-content-between">
      <div className="d-flex align-items-center">
        <span className="me-4">
          {idx + 1}
          .
          {' '}
        </span>
        {/* <span className={`${status ? styles.done : ''}`}> */}
        <span>
          {product.id}
          {' '}
        </span>
      </div>
      <div>
        <button onClick={changeStatusTodoHandler} type="button" className="btn mx-2 btn-success">Done</button>
        <button onClick={deleteTodoHandler} type="button" className="btn btn-danger">Delete</button>
      </div>
    </li>
  )
}
