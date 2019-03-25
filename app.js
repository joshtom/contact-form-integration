function _(id) {return document.getElementById(id); }
function submitForm(){
    _("mybtn").disabled = true; //Disabling the submit button after clicked
    _("status").innerHTML = '<h3 class=\'text-center\'> Please wait .... </h3>';
    const formdata = new FormData();
    formdata.append( "name", _("name").value );
    formdata.append( "email", _("email").value );
    formdata.append( "message", _("message").value );

    // calling the ajax method
    const ajax = new XMLHttpRequest();
    ajax.open( "POST", "parser.php" );
    ajax.onreadystatechange = () => {
        if (ajax.readyState == 4 && ajax.status == 200) {
            _("status").innerHTML = "<p class='text-muted text-center'> Thanks " + _("name").value + ", Your message has been sent. </p>";
            _("name").value = "";
            _("email").value = "";
            _("message").value = "";
        } else {
            _("status").innerHTML = ajax.responseText;
            _("mybtn").disabled = false;
        }
    }
    ajax.send( formdata ); //Sending the actual data

}