const botaoContato = document.getElementById("botao-contato");
const botaoEntrega = document.getElementById("botao-entrega");

botaoEntrega.addEventListener("click", janelaEntrega);
botaoContato.addEventListener("click", janelaContato);

function janelaEntrega() {
  const CEP = "88317-280";
  Swal.fire({
    title: 'Logradouro: Rua José Francisco Mastri 636\nBairro: Espinheiros\nCEP: 88317-280\nCidade: Itajaí\nUF: SC',
    showDenyButton: true,
    confirmButtonText: 'Copiar CEP para área de transferência',
    denyButtonText: `Sair`,
    customClass: {
      title: "sweetalert-title",
      content: "sweetalert-content"
    },
    fontFamily: 'roboto',
    confirmButtonColor: '#008000'
  }).then((result) => {
    if (result.isConfirmed) {
      navigator.clipboard.writeText(CEP)
        .then(() => {
          Swal.fire({
            text: 'Copiado!',
            icon: 'success',
            confirmButtonColor: '#008000'
          });
        })
        .catch((error) => {
          Swal.fire('Ocorreu um erro ao copiar!', '', 'error');
        });
    }
  });
}


function janelaContato() {
  Swal.fire({
    title: 'Whatsapp: (92) 99483-0999\nEmail: cleofilhog15@gmail.com\nPIX: 92994830999',
    showDenyButton: true,
    confirmButtonText: 'Abrir no Whatsapp',
    denyButtonText: `Sair`,
    customClass: {
      title: "sweetalert-title",
      content: "sweetalert-content"
    },
    fontFamily: 'roboto',
    confirmButtonColor: '#008000'
  }).then((result) => {
    if (result.isConfirmed) {
      window.open('https://wa.me/5592994830999', '_blank');

    }
  });
}