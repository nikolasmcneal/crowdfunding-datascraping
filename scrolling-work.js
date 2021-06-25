//JavaScript code to scroll down HTML 

function pageScroll() {
    window.scrollBy(0,50); 
    scrolldelay = setTimeout('pageScroll()',100); 
}
