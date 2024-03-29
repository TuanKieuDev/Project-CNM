// import {getData} from '../data.js'
export function getDataFromDoc(doc) {
    const data = doc.data()
    data.id = doc.id
    return data
  }
  // lay du lieu tu get many document
  export function getDataFromDocs(data) {

    return data.docs.map(getDataFromDoc)
  }

  export function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value) )
  }

  export function getItemToLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key))
  }
//  ở đâu 
  export  function convertDate(dateStr){
    const date = new Date(dateStr)
    const day = validDate(date.getDate())
    const month = validDate(date.getMonth() + 1)
    const year = date.getFullYear()
    const hour = validDate(date.getHours())
    const minutes = validDate(date.getMinutes())
    return `${day}/${month}/${year} - ${hour}:${minutes}`
  }

  function validDate(number) {
    return number<10 ? '0' +  number : number;
  }

  export async function uploadFileToStorage(file) {
    // tao duong dan den file day
    const fileName = file.name
    const filePath = `file/${fileName}`
    const ref = firebase.storage().ref().child(filePath)
    await ref.put(file)
    console.log(getFileUrl(ref))
    return getFileUrl(ref)
  }

  function getFileUrl(fileRef) {
    return `https://firebasestorage.googleapis.com/v0/b/${fileRef.bucket}/o/${encodeURIComponent(fileRef.fullPath)}?alt=media`
  }
 


 
// 
export const getResult = (result)=>{
  
}