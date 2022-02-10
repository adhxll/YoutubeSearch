document.getElementById("searchQuery").addEventListener("keyup", event => {
    if(event.key !== "Enter") return; // Use `.key` instead.
    document.getElementById("searchButton").click(); // Things you want to do.
    event.preventDefault(); // No need to `return false;`.
});

function searchYoutube()
{
    var elem=document.getElementById('searchQuery');
    var url="https://www.youtube.com/results?search_query="+encodeURIComponent(elem.value);
    var win=window.open(url, '_blank');
    win.focus();
}
