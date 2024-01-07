export const getData =() => {
  const getDataFromLocalStore = JSON.parse(window.localStorage.getItem("userData"))
 
  return getDataFromLocalStore
}