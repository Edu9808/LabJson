var Container = document.getElementById("demo");
var btn = document.getElementById("Boton").addEventListener("click", getpos);


function getpos()
{
    var Numero = document.getElementById("NumeritoPro").value;
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res) => {
        return res.json();
    }) 
    .then((post)=>
    {
        Container.innerHTML = ` <div class="Cont_id">ID</div>
                                <div class="Cont_id">Name</div>
                                <div class="imagen">Image</div>`
        for(let index = 0; index<Numero ;index++){
           Container.innerHTML += `
                                <hr>
                                <div class="Cont_General">
                                   <div class="Cont_id"> ${post[index].id}</div>
                                   <div class="Cont_Title"> ${post[index].title}</div>
                                   <img class="imagen" src="${post[index].thumbnailUrl}">
                                </div>`
                                
        }
    })

}



















