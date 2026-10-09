

const botaoTema = document.getElementById("tema");




const temaSalvo =
    localStorage.getItem("tema");



if (temaSalvo === "dark") {

    document.body.classList.add("dark");

    botaoTema.textContent = "☀️";

} else {

    document.body.classList.remove("dark");

    botaoTema.textContent = "🌙";

}



botaoTema.addEventListener(
    "click",
    function () {

        document.body.classList.toggle("dark");


        if (
            document.body.classList.contains("dark")
        ) {

            botaoTema.textContent = "☀️";

            localStorage.setItem(
                "tema",
                "dark"
            );

        } else {

            botaoTema.textContent = "🌙";

            localStorage.setItem(
                "tema",
                "light"
            );

        }

    }
);





const telefone =
    document.getElementById("telefone");


telefone.addEventListener(
    "input",
    function () {

        let valor =
            telefone.value.replace(/\D/g, "");


        if (valor.length > 11) {

            valor =
                valor.substring(0, 11);

        }


        if (valor.length <= 10) {

            valor =
                valor.replace(
                    /^(\d{2})(\d)/,
                    "($1) $2"
                );

            valor =
                valor.replace(
                    /(\d{4})(\d)/,
                    "$1-$2"
                );

        } else {

            valor =
                valor.replace(
                    /^(\d{2})(\d)/,
                    "($1) $2"
                );

            valor =
                valor.replace(
                    /(\d{5})(\d)/,
                    "$1-$2"
                );

        }


        telefone.value = valor;

    }
);





const formulario =
    document.getElementById("formulario");

const modal =
    document.getElementById("modal");

const fecharModal =
    document.getElementById("fecharModal");

const confirmarModal =
    document.getElementById("confirmarModal");

const aviso =
    document.getElementById("aviso");




formulario.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        // Abre o modal

        modal.classList.add("ativo");


        aviso.textContent =
            "";

    }
);




fecharModal.addEventListener(
    "click",
    function () {

        modal.classList.remove("ativo");

    }
);




confirmarModal.addEventListener(
    "click",
    function () {

        modal.classList.remove("ativo");


        const nome =
            document
                .getElementById("nome")
                .value;

        const telefoneValor =
            document
                .getElementById("telefone")
                .value;

        const email =
            document
                .getElementById("email")
                .value;

        const mensagem =
            document
                .getElementById("mensagem")
                .value;


        const assunto =
            encodeURIComponent(
                "Contato pelo meu portfólio - " +
                nome
            );


        const corpo =
            encodeURIComponent(

                "Nome: " +
                nome +

                "\nTelefone: " +
                telefoneValor +

                "\nEmail: " +
                email +

                "\n\nMensagem:\n" +
                mensagem

            );



        const meuEmail =
            "seuemail@email.com";


        window.location.href =
            "mailto:" +
            meuEmail +
            "?subject=" +
            assunto +
            "&body=" +
            corpo;

    }
);


// Fechar modal clicando fora

modal.addEventListener(
    "click",
    function (event) {

        if (
            event.target === modal
        ) {

            modal.classList.remove(
                "ativo"
            );

        }

    }
);



const elementos =
    document.querySelectorAll(
        ".animar"
    );


const observador =
    new IntersectionObserver(

        function (elementosVisiveis) {

            elementosVisiveis.forEach(
                function (elemento) {

                    if (
                        elemento.isIntersecting
                    ) {

                        elemento.target.classList.add(
                            "visivel"
                        );

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );



elementos.forEach(
    function (elemento) {

        observador.observe(
            elemento
        );

    }
);