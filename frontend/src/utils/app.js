const togglebtn = document.querySelector('.togglebtn')
togglebtn.addEventListener('click',function(){
    var btnsdiv = document.querySelector('.btnsdiv')
    btnsdiv.classList.toggle('open')
    const sidebar_container = document.querySelector('.sidebar-container');
    sidebar_container.classList.toggle('slide');
})

// const droptrigger = document.querySelectorAll('.droptrigger')
// droptrigger.addEventListener('click',function(){
//     var dropper = document.querySelector('.drop')
//     dropper.classList.toggle('rotated')
//     console.log("i love php")

//     var groupdrop = document.querySelector('.groupdrop')
//     groupdrop.classList.toggle('openmenu')
// })

document.addEventListener('DOMContentLoaded',function(){
    const droptrigger = document.querySelectorAll('.droptrigger')
    droptrigger.forEach(function(trigger){
        trigger.addEventListener('click',function(){
            const groupdrop = this.nextElementSibling

            groupdrop.classList.toggle('openmenu')
        });
    });

    

    // window.addEventListener('click',function(event){
    //     if(!event.target.matches('.droptrigger')){
    //         const opendropdowns = this.document.querySelectorAll('.groupdrop');
    //         opendropdowns.classList.remove('openmenu');
            
    //     }
    // })

    // const alltriggers=document.querySelectorAll('.droptrigger')
    // alltriggers.forEach(function(trigger){
    //     const arrow = trigger.querySelector('.drop');
    //     if(arrow && trigger.nextElementSibling && trigger.nextElementSibling.computedStyleMap.display ==='none'){
    //         arrow.classList.remove('rotated')
    //     }
    // })
})