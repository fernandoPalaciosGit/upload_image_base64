(function(w,d){
    function init(){
        var form = d.getElementById('upload-form');
        var imageInput = d.getElementById('upload-form-image-input');
        form.addEventListener('submit',function(e) {
            e.preventDefault();

            console.dir(imageInput);

        });
    };

    function getImageURL(_input) {
        var fileExtension = _input.value.slice(-3);
        var limitedFileExtension = 'jpg';

        //Change this 'if' statement for limit for another specific file extension


        if ( file_extension != limitedFileExtension) {
            //Since the goal of this project isn't make it beautiful, I just use a javascript default alert message.
            alert('Not accepted file');

            return;
        }


    };

    function ajax() {

        var xmlhttp;

        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {

            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
                if(xmlhttp.status == 200){
                    return
                }
                else if(xmlhttp.status == 400) {
                   return false;
                }
                else {
                   return false;
                }
            }
        }

        xmlhttp.open("POST", "localhost/back/receive_form.php", true);
        xmlhttp.send();

    };

    d.addEventListener('DOMContentLoaded', init, false);
})(window,document);