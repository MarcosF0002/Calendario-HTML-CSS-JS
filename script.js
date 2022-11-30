const dataAtual = document.querySelector(".data-atual");
daysTag = document.querySelector(".dias");
prevNextIcon = document.querySelectorAll(".icons span");

 data = new Date(),
anoAtual = data.getFullYear(),
mesAtual = data.getMonth();

const meses = [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", 
    "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ];

const renderCalendario = () => {
    let firstDateofMonth = new Date(anoAtual, mesAtual, 1).getDay(),
     lastDateofMonth = new Date(anoAtual, mesAtual + 1, 0).getDate(),
     lastDayofMonth = new Date(anoAtual, mesAtual, lastDateofMonth).getDay(),
     lastDateofLastMonth = new Date(anoAtual, mesAtual, 0).getDate();    
    let liTag = "";

    for (let i = firstDateofMonth; i > 0; i--) {
        liTag += `<li class="inativo">${lastDateofLastMonth - i + 1}</li>`;       
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        let hoje = i === data.getDate() && mesAtual === new Date().getMonth()
        && anoAtual === new Date().getFullYear() ? "ativo" : "";
    liTag += `<li class="${hoje}">${i}</li>`;      
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inativo">${i - lastDayofMonth + 1}</li>`;   
    }
    
    dataAtual.innerText = `${meses[mesAtual]} ${anoAtual}`;
    daysTag.innerHTML = liTag;

}

renderCalendario();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () =>{
        mesAtual = icon.id === "prev" ? mesAtual - 1 : mesAtual + 1;

        if(mesAtual < 0 || mesAtual > 11) { 
            data = new Date(anoAtual, mesAtual);
            anoAtual = data.getFullYear(); 
            mesAtual = data.getMonth(); 
        } else {
            data = new Date(); 
        }
        
        renderCalendario();
    });
});