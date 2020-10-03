function OpenPerson() {
    console.log("---ready memo");
    var URL = window.location.search.substring(1);
    console.log(URL);
    var flag = URL.split('=');
    console.log(flag[0]);
    var element;
    if (flag[0] == 2) {
        document.getElementById('collapse1').classList.add("show");
    } else
    if (flag[0] == 3) {
        document.getElementById('collapse2').classList.add("show");
    } else
    if (flag[0] == 4) {
        document.getElementById('collapse3').classList.add("show");
    } else
    if (flag[0] == 5) {
        document.getElementById('collapse4').classList.add("show");
    } else
    if (flag[0] == 6) {
        document.getElementById('collapse5').classList.add("show");
    } else
    if (flag[0] == 7) {
        document.getElementById('collapse6').classList.add("show");
    }

}