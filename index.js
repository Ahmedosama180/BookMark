var bookname = document.getElementById("sname");
var bookurl = document.getElementById("surl");
var errnam = document.getElementById("errname");
var urlfield = document.getElementById("urlfiel");
var add=document.querySelector('#submt')

var contbook = [];

if( localStorage.getItem("story") !=null){

    contbook=JSON.parse(localStorage.getItem("story"));
    display(contbook); 
}



function addsubmit() {

        if(regxcheck()){

            var books = {
                name: bookname.value,
                siteURL: bookurl.value,
            };
        
            contbook.push(books);
            localStorage.setItem("story",JSON.stringify(contbook))
        
            display(contbook);
            cleerform();
            
}
}
add.addEventListener('click',function(){
    addsubmit() 
})



function cleerform() {
    bookname.value = "";
    bookurl.value = "";
}

console.log(contbook);

function display(contbook){
    var box = ``;

    for (var i= 0; i<contbook.length; i++){
        box +=`

<tr class="tb">
<td class=" px-5 py-5 ">
    <h4>${contbook[i].name}</h4>
</td>
<td>
 <a href="${contbook[i].siteUR}" target="blank">
<button class=" but2  btn btn-success  py-3 px-4 rounded-2 mx-5">Visit</button></a> </td>

<td><button class="but2 btn btn-danger py-3 px-4 rounded-2 mx-2" onclick="deletecont(${i})">Delete</button></td>
</tr>`;
}
document.getElementById("mytable").innerHTML=box;
}

function deletecont(index){
    contbook.splice(index,1);
    localStorage.setItem("story",JSON.stringify(contbook))
    display(contbook);
}

function validproudact(){
    reg=/^[A-Z][a-z]{3,}$/
    return regxs.test(bookname.value);
}



function regxcheck(){
  var flag=true;
    if(bookname.value==""){
   errnam.classList.replace('d-none','d-block');
        flag=false;
    }
    if(bookurl.value ==""){
        urlfield.classList.replace('d-none','d-block');
      flag=  false;
    }
    return flag;
}
