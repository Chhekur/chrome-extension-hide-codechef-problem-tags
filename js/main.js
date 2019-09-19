window.onload = function(){
    var aside = document.getElementsByTagName('aside');
    var problem_info = aside[1].getElementsByTagName('p');
    for(i = 0; i < problem_info.length; i++){
        // console.log(problem_info[i]);
        let info = problem_info[i];
        console.log(info.getElementsByTagName('label')[0].innerHTML);
        if(info.getElementsByTagName('label')[0].innerHTML == "Tags:"){
            info.innerHTML = "";
            break;
        }
    }
}