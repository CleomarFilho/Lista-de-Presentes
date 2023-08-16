const botaoPix = document.getElementById("botao-pix")

botaoPix.addEventListener("click", janelaPix)

function janelaPix() {
  const PIX = "92994830999";
  Swal.fire({
    imageUrl: '../imagens/Pix.jpg',
    title: 'Pix: Cleomar de Souza Pontes Filho\n(92) 99483-0999',
    showDenyButton: true,
    confirmButtonText: 'Copiar PIX para área de transferência',
    denyButtonText: `Sair`,
    customClass: {
      title: "sweetalert-title",
      content: "sweetalert-content"
    },
    fontFamily: 'roboto',
    confirmButtonColor: '#008000'
  }).then((result) => {
    if (result.isConfirmed) {
      navigator.clipboard.writeText(PIX)
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
const botaoAlfinete = document.getElementById("botao-alfinete");

botaoAlfinete.addEventListener("click", janelaEntrega);

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