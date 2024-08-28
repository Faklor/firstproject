import axios from 'axios'

const services = async ()=> await axios.get('http://localhost:5000/services/')
const updateTitle = async (file)=>await axios.post('http://localhost:5000/services/updateTitle',file,{headers: {
    'Content-Type': 'multipart/form-data',
    'Accept': 'application/json'
  }})
const updateContent = async (file)=>await axios.post('http://localhost:5000/services/updateContent',file,{headers: {
    'Content-Type': 'multipart/form-data',
    'Accept': 'application/json'
  }})

export {
    services,
    updateTitle,
    updateContent
}