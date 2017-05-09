//https://blogdummi.fr/developpement/tutoriel-creer-transition-automatique-texte/
$( document ).ready(function() {
    $('.citation .motivation:gt(0)').hide();
    setInterval(
        function(){
            $('.citation > :first-child').fadeOut(1000, function() {
                $(this).next('.motivation').fadeIn(1000).end().appendTo('.citation')
            });
        }, 4000
    );
});