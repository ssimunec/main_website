function scrollToDiv(target) { 
    const targetDiv = document.getElementById(target); 
    targetDiv.scrollIntoView({ behavior: 'smooth' }); 
}

document.getElementById('scrollToFirst').onclick = function() { 
    scrollToDiv('firstContent');
};

document.getElementById('devopsButton').onclick = function() { 
    scrollToDiv('devopsContent');
};