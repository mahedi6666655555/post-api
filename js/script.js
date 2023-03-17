let loddata=()=>{

    let url=`https://jsonplaceholder.typicode.com/posts`
    fetch(url)
    .then(res=>res.json())
    .then((data)=>showData(data))

}


let showData=(phones)=>{
    let get1=document.getElementById("container")
    for(let total of phones){
        console.log(total.title);

        let create=document.createElement("div")
create.classList.add("mahedi")

create.innerHTML=`


<h1>${total.title}</h1>
<p>${total.id}</p>

`

get1.appendChild(create)

 }




}
loddata()