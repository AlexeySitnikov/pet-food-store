export function SearchBar() {
  return (
    <div className="d-flex justify-content-center py-5">
      <button type="button" className="mx-1">By Name</button>
      <button type="button" className="mx-1">By Price</button>
      <button type="button" className="mx-1">By Discount</button>
      <button type="button" className="mx-1">By Rating</button>
    </div>
  )
}
