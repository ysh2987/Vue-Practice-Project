exports.handler = async function (event, context){
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'test',
      age: 55,
      email: 'asdsad@naver.com'
    })
  }

}