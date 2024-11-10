function scrollToDiv(target) { 
    const targetDiv = document.getElementById(target); 
    targetDiv.scrollIntoView({ behavior: 'smooth' }); 
}

document.getElementById('scrollToFirst').onclick = function() { 
    scrollToDiv('firstContent');
};

document.getElementById('frontEndButton').onclick = function() { 
    scrollToDiv('frontEndContent');
    setTimeout(() => {
        document.getElementById('askMoreFrontEnd').focus();
    }, 1200);
};

document.getElementById('architectButton').onclick = function() { 
    scrollToDiv('architectContent');
    setTimeout(() => {
        document.getElementById('askMoreArchitecture').focus();
    }, 1200);
};

document.getElementById('devopsButton').onclick = function() { 
    scrollToDiv('devopsContent');
    setTimeout(() => {
        document.getElementById('askMoreDevOps').focus();
    }, 1200);
};