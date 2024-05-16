function login()
{
    var obj= document.getElementById('btn_post');
    obj.onclick=goToReview;
}
function goToReview()
{
    /*var user = document.getElementById('txb_username').value;
    var pass = document.getElementById('txb_password').value;
    AccountModel.find({
      username : user,
      password: pass
  })
  .then(function(data){
    app.get('/', (req, res) => {
      var duongDanFile= path.join(__dirname, 'Review.html')
      res.sendFile(duongDanFile)
    });
  })
  .catch(function(err){
      console.log('loi',err);
  })*/
  alert('hello')
}