const acc = require('./Account.js')
const account=acc()
var btn=document.getElementById('btn_post')
btn.onclick= function (account)
{
    alert('bam vao dang')
    account.find({
    })
    .then(function(data){
        alert('tim thay data',data)
    })
    .catch(function(err){
        alert('loi',err);
    })
}

var nguoidung = document.getElementById('UserID')
nguoidung.onclick= function(){
    alert('bam vao nguoi dung')
}

