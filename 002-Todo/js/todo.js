const taskDom = document.querySelector("#task");
const liveToastBtnDom = document.querySelector("#liveToastBtn");
const ulDom = document.querySelector("#list");
const closeDom = document.querySelector(".close");



allEventListener(); //Tüm Eventlerin Toplandığı Fonksiyon
function allEventListener(){
    //Todo Ekleme Eventi
    liveToastBtnDom.addEventListener('click', addTodoScreen);
    // Todo Silme Eventi
    ulDom.addEventListener('click',removeTodo);
}



//Todo Eklemek
function addTodoScreen(e) {
    if (taskDom.value === "") {
        alert("Lütfen Birşeyler yazın.");
    } else {
        let li = document.createElement("li");
        li.textContent = taskDom.value;
        ulDom.appendChild(li);

        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.classList ="close";
        a.innerHTML= "X";
        li.appendChild(a);
        taskDom.value = ""
    }

    e.preventDefault();
}




// Todo Silmek
function removeTodo(e){
        if(e.target.classList == "close"){
            e.target.parentElement.remove(); 
        }

        e.preventDefault();
}





// Uyari Penceresi Alanı

