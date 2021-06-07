var acc = document.getElementsByClassName('accordion');
var i;
var len = acc.length;

for(i = 0; i<len;i++){

    acc[i].addEventListener('click', function(){

        this.classList.toggle('activePan');
        var panel = this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        }else{
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    })

}
