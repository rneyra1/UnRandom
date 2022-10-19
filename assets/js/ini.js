$(document).ready(function(){

    $("#btn-login").on('click', function(){
        if(validarFormVacio("formu") == 0){
            $.ajax({type:"POST", url: "./",  data: {c:"index",a:'Login', 
                            name:$("#inputEmail").val(),
                            password:$("#inputPassword").val()
                            },success:function(responseText){
                                //alert(responseText);
                                if(responseText == "true"){
                                    // alertify.success("Acceso!!");
                                    window.location="?c=menu";
                                }
                                else if(responseText == "false"){alertify.error("Datos incorrectos");}  
                                else if(responseText == "desactivate"){alertify.error("Usuario desactivado");}  
                                else{alertify.alert("ERROR:" + responseText);}
                                
                            },error:function(error){
                                alertify.error("Ha ocurrido un error del servidor. MSM: " + error);
                            }
            });  
        }else{ alertify.warning("TODOS LOS CAMPOS NO HAN SIDO RELLENADOS"); }
    });

})

function validarFormVacio(formulario){
    datos=$('#' + formulario).serialize();
    // console.log(JSON.stringify(datos));
    d=datos.split('&');
    vacios=0;
    for(i=0;i< d.length;i++){
            controles=d[i].split("=");
            if(controles[1]==null || controles[1]==""){
                vacios++;
            }
    }
   // $("#foto").val() == "" || null ? vacios++ : null;
    return vacios;
}

$('#inputEmail').keyup(function(e){
 if(e.keyCode == 13)
 {
   $('#btn-login').click();
 }
 
 if(e.keyCode==40)
 {
   $('#inputPassword').focus();
 }
});

$('#inputPassword').keyup(function(e){
 if(e.keyCode == 13)
 {
   $('#btn-login').click();
 }
 if(e.keyCode==38)
 {
   $('#inputEmail').focus();
 }
})	