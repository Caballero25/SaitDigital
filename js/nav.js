
function scrollToSection(event, sectionId) {
    var section = document.getElementById(sectionId);

    if (section) {

        section.scrollIntoView({
            behavior: 'smooth', 
            block: 'start'       // Esto alinea el inicio del elemento con la parte superior del contenedor de desplazamiento
        });
        event.preventDefault();
    }
}