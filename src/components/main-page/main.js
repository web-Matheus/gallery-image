import React from 'react'
// import axios from  'axios';
import './main.css'
const Main = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:3001/images")
  //   .then((res) => {setData(res.data)})
  //   .catch((err)=> console.log(err))
  // })
  return (
    <div class="columns-2 md:columns-3 lg:columns-4">
      <img class="mb-4 rounded-lg" src="https://source.unsplash.com/random/1" alt='foto aleatória vindo de uma api' />
      <img class="mb-4 rounded-lg" src="https://source.unsplash.com/random/2" alt='ft aleatória vindo de uma api' />
      <img class="mb-4 rounded-lg" src="https://source.unsplash.com/random/3" alt='ft aleatória vindo de uma api'  />
      <img class="mb-4 rounded-lg" src="https://source.unsplash.com/random/4" alt='ft aleatória vindo de uma api' />
      <img class="mb-4 rounded-lg" src="https://source.unsplash.com/random/5" alt='ft aleatória vindo de uma api' />
      <img class="mb-4 rounded-lg" src="https://source.unsplash.com/random/6" alt='ft aleatória vindo de uma api' />
      <img class="mb-4 rounded-lg" src="https://source.unsplash.com/random/7" alt='ft aleatória vindo de uma api' />
      <img class="mb-4 rounded-lg" src="https://source.unsplash.com/random/8" alt='ft aleatória vindo de uma api' />
      <img class="mb-4 rounded-lg" src="https://source.unsplash.com/random/9" alt='ft aleatória vindo de uma api' />
      ....
      ....
    </div>
  )
}

export default Main