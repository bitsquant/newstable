
export const saveApiDataAction = (x) => dispatch => {
 dispatch({
  type: 'SAVE_API_DATA_ACTION',
  payload: x
 })
}


export const getDataFromApi = (APIkey) => {
  if(APIkey){
  return function(dispatch, getState) {
  	let url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&from=2021-04-15&sortBy=publishedAt&pageSize=100&page=1&apiKey=`+APIkey
    return fetch(url)
      .then(data => data.json())
      .then(data => {
        dispatch(saveApiDataAction(data));
      })
      .catch(err => console.log(err));
  };
}else{
  return []
}
};
