//Função principal para fazer transações
async function doAddFounds() {
    const valueTransaction = parseFloat(document.getElementById('valueAddFounds').value.replace(',', '.'));

    if (valueTransaction) {
        const myHeaders = new Headers();
        myHeaders.append("id_wallet", "3");
        myHeaders.append("id_user", "3");
        myHeaders.append("value", valueTransaction);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            redirect: "follow"
        };

        await fetch("http://127.0.0.1:3000/addFunds", requestOptions)
            .then((response) => {
                console.log(response.text());
                if (response.status === 200) {
                    alert(`Deposito de R$${valueTransaction} realizado com sucesso`);
                    // location.reload()
                } else {
                    alert("Informação inválida, digite números positivos");
                }
            })
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    } else {
        alert("Digite todas as informações pedidas");
    }
}
//Função para chamar o modal
function openModal() {
    const modalFounds = document.getElementById('modalFounds');
    modalFounds.classList.remove('model');
}

//Função para fechar o modal
function closeModal() {
    const modalFounds = document.getElementById('modalFounds');
    modalFounds.classList.add('model');
}

//Funções para trocar a cor dos botões de opção do modal
function tradeBtnAddFoundsColor() {
    document.getElementById('btnAddFounds').style.backgroundColor = '#fff';
    document.getElementById('btnAddFounds').style.color = '#002852';
}

function tradeBtnWithDrawFounds() {
    document.getElementById('btnAddFounds').style.backgroundColor = '#fff';
    document.getElementById('btnAddFounds').style.color = '#002852';
}