// Poster, Title 
// apiKey = "apikey=6b65d0f5"
// KeyMiduDev = 4287ad07
// const url = 'http://www.omdbapi.com/?apikey=4287ad07&s=Avengers';  

document.addEventListener('DOMContentLoaded', function() {
    let formBuscarMovie = document.getElementById("formBuscarMovie"); 
    let movies = document.getElementById('tendenciaHoy'); 
    let inputBuscar = document.getElementById('buscar'); 
    let btnBuscarMovie = document.getElementById('btnBuscarMovie'); 

    function fetchMovies(query = 'movie') {
        fetch(`http://www.omdbapi.com/?s=${query}&apikey=4287ad07`)
            .then(response => response.json())
            .then(data => {
                movies.innerHTML = ""; 

                if (data.Response === "True") {
                    data.Search.forEach((e) => { 
                        // console.log(e);

                        let tendenciaMovies = document.createElement("div"); 
                        tendenciaMovies.classList.add("tendenciaMovies");  
                        tendenciaMovies.innerHTML = `
                            <a href="./PAGES/detalle.html">
                                <img width="250px" src="${e.Poster}" alt="${e.Title}">
                            </a> 
                            <h3>${e.Title}</h3> 
                        `;
                        movies.appendChild(tendenciaMovies);
                    });
                } else {
                    movies.innerHTML = `<p>No se encontraron películas.</p>`;
                }
            }) 
            .catch(error => {
                console.log(error);
                movies.innerHTML = `<p>Error al cargar las películas.</p>`;
            });
    }

    fetchMovies();

    if (formBuscarMovie && inputBuscar && movies && btnBuscarMovie) {
        formBuscarMovie.addEventListener('submit', function(event) { 
            event.preventDefault(); 
            let buscar = inputBuscar.value;
            fetchMovies(buscar);
        });
    } else {
        console.error('No se encontro.'); 
    }
});





// Validar Datos Iniciar Sesion 
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        var emailError = document.getElementById('emailError');
        var passwordError = document.getElementById('passwordError');

        var hasErrors = false;

        if (email === '') {
            emailError.textContent = 'El correo electrónico es obligatorio';
            emailError.style.visibility = 'visible';
            hasErrors = true;
        } else {
            emailError.style.visibility = 'hidden';
        }

        if (password === '') {
            passwordError.textContent = 'La contraseña es obligatoria';
            passwordError.style.visibility = 'visible';
            hasErrors = true;
        } else {
            passwordError.style.visibility = 'hidden';
        }

        if (hasErrors) {
            event.preventDefault();
        }
    });
});



