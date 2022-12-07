const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzkwNGY3MTU5Yjk4YjAzOGY3NzlkYjQiLCJncm91cCI6InNtOCIsImlhdCI6MTY3MDQwMzM5NiwiZXhwIjoxNzAxOTM5Mzk2fQ.aiA0fkvpYOIrNKOWz2NKZograLmCt_QNfGtU6bDPEiI'

export async function a() {
  const response = await fetch('https://api.react-learning.ru/v2/sm8/users/me', {
    headers: {
      authorization: TOKEN,
    },
  })
  const res = await response.json()
  // console.log(res)
  // .then((response) => {
  //   console.log({ response })
  //   response.json()
  // }).then((json) => { console.log(json) })
  // console.log(this.a())
  return res
}

// //функция запускается при открытии страницы, запрашивает всю информацию из БД
//  и добавляет результат на страницу
// const getAllCats = ()=>{
//   fetch(getAllCatsURL)
//   .then((response)=>response.json())
//   .then((json)=>{
//     json.data.forEach((el) => $divContainer.insertAdjacentHTML('beforeend',cardsHTML(el)));
//   });
// }
