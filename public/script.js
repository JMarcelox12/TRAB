document.addEventListener('DOMContentLoaded', () => {
    const apostaForm = document.getElementById('apostaForm');
    const apostasList = document.getElementById('apostasList');
  
    // Função para carregar as apostas na página
    const carregarApostas = async () => {
      apostasList.innerHTML = '';
  
      const response = await fetch('/apostas');
      const apostas = await response.json();
  
      apostas.forEach(aposta => {
        const apostaItem = document.createElement('div');
        apostaItem.innerHTML = `<strong>Formiga:</strong> ${aposta.formiga} | <strong>Valor:</strong> ${aposta.valor}`;
        
        const editarBtn = document.createElement('button');
        editarBtn.innerText = 'Editar';
        editarBtn.addEventListener('click', () => editarAposta(aposta._id));
  
        const excluirBtn = document.createElement('button');
        excluirBtn.innerText = 'Excluir';
        excluirBtn.addEventListener('click', () => excluirAposta(aposta._id));
  
        apostaItem.appendChild(editarBtn);
        apostaItem.appendChild(excluirBtn);
  
        apostasList.appendChild(apostaItem);
      });
    };
  
    apostaForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const formiga = document.getElementById('formiga').value;
      const valor = document.getElementById('valor').value;
  
      await fetch('/apostas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formiga, valor }),
      });
  
      carregarApostas();
      apostaForm.reset();
    });

    const apostaSchema = new mongoose.Schema({
        formiga: String,
        Valor: Number,
        vitorias: {type:Number, default: 0},
        data: {type: Date, default: Date.now}
    });

    const editarAposta = async (id) => {
      const response = await fetch(`/apostas/${id}`);
      const aposta = await response.json();
  
      const novoFormiga = prompt('Novo nome da formiga:', aposta.formiga);
      const novoValor = prompt('Novo valor:', aposta.valor);
  
      await fetch(`/apostas/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formiga
        })
        })
    }
})