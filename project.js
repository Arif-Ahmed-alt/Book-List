let bookName=document.getElementById("book_name");
let authorName=document.getElementById("author_name");
let isbnCode=document.getElementById("isbn");
let button=document.getElementById("form_action")
let del=document.querySelector(".del");
let tbody=document.querySelector("tbody");
let cardBody=document.querySelector(".card-body")
let title=document.querySelector(".form-group");
console.log(del);


button.addEventListener("click",function(){
    
    if(bookName.value=="" || authorName.value=="" || isbnCode.value==""){
       Alert("Please fill in the fields","alert alert-danger")
    }else{
        Alert("Book added","alert alert-success");
        let tr=document.createElement("tr");
        let col1=document.createElement("td");
        let col2=document.createElement("td");
        let col3=document.createElement("td");
        let col4=document.createElement("td");
        col1.textContent=bookName.value;
        col2.textContent=authorName.value;
        col3.textContent=isbnCode.value;
        col4.innerHTML="<i class='fa fa-trash'></i>"
        col4.classList="del"
        tr.appendChild(col1);
        tr.appendChild(col2);
        tr.appendChild(col3);
        tr.appendChild(col4);
        Del(col4)
        tbody.appendChild(tr);
        bookName.value="";
        authorName.value=""
        isbnCode.value=""

    }
})

function Del(input){
    input.addEventListener("click",function(e){
        if(confirm("Are You Sure To delete this item")){
            input.parentElement.remove();
            Alert("Book removed","alert alert-danger")
        }
        
    })
}


function Alert(msg,classDetail){
    let divName=document.createElement("div");
     divName.appendChild(document.createTextNode(msg));
     divName.classList=classDetail;
    cardBody.insertBefore(divName,title);

    setTimeout(function(){
        divName.remove();
    },2000)
}