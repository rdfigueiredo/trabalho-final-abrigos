// Trabalho Final - Abrigos

/* Olá! Você foi contratado para desenvolver um programa em Javascript que ajude a população em situação de rua a encontrar abrigos temporários em dias frios. O programa deve utilizar o comando "prompt" para receber dados de entrada dos usuários.

O programa deve permitir que o usuário encontre um abrigo temporário na sua cidade, informando a sua localização. Para isso, deve ser criado um banco de dados com informações dos abrigos disponíveis no estado, como nome, endereço, cidade, telefone e capacidade de lotação.

O programa deve ter um menu com as seguintes opções:
*/

/*
===== ABRIGOS TEMPORÁRIOS =====
1. Cadastrar abrigo
2. Listar abrigos
3. Procurar abrigo
4. Sair
Escolha uma opção:

Ao selecionar uma opção deve ser chamada uma função que execute a respectiva ação, conforme detalhamento abaixo:
*/

// 1. Cadastro de Abrigo:** essa opção permite cadastrar um novo abrigo no sistema. O programa deve solicitar o nome, endereço, telefone e capacidade de lotação do abrigo. Os dados devem ser armazenados em um objeto e este objeto deve ser incluído em um `array` de abrigos.

// 2. Listar Abrigos:** essa opção lista todos os abrigos cadastrados no sistema, mostrando seus códigos, nomes, endereços, telefones e capacidade de lotação. O código é sempre a posição do objeto no `array`.

/* 
Exemplo:

--------------------
LISTAGEM DE ABRIGOS:
--------------------
CÓDIGO |         NOME         |              ENDEREÇO              |   TELEFONE   |  CAPACIDADE | CIDADE
---------------------------------------------------------------------------------------------------------
  001  | Casa do Caminho      | Rua do Amanhecer, 123, Centro      |  (11) 1234-5678  |     20  | Canoas
  002  | Abrigo Esperança     | Rua da Solidariedade, 321, Bairro  |  (11) 9876-5432  |     30  | São Leopoldo
  003  | Casa dos Amigos      | Av. da Fraternidade, 456, Centro   |  (11) 5555-4444  |     25  | Novo Hamburgo
  004  | Abrigo do Bem        | Rua da Esperança, 789, Bairro      |  (11) 7777-8888  |     35  | Canoas
  005  | Casa dos Anjos       | Av. da Paz, 159, Centro            |  (11) 3333-2222  |     15  | Porto Alegre
---------------------------------------------------------------------------------------------------------
*/

// 3. Procurar Abrigo:** essa opção permite que o usuário encontre um abrigo temporário na sua cidade, informando a sua localização. O programa deve perguntar ao usuário a sua cidade e mostrar todos os abrigos cadastrados naquela cidade, com suas informações completas, além de informar a disponibilidade de vagas.

/*
Exemplo:

Qual cidade você está?
Canoas

--------------------
LISTAGEM DE ABRIGOS:
--------------------
CÓDIGO |         NOME         |              ENDEREÇO              |   TELEFONE   |  CAPACIDADE | CIDADE
---------------------------------------------------------------------------------------------------------
  001  | Casa do Caminho      | Rua do Amanhecer, 123, Centro      |  (11) 1234-5678  |     20  | Canoas
  004  | Abrigo do Bem        | Rua da Esperança, 789, Bairro      |  (11) 7777-8888  |     35  | Canoas
---------------------------------------------------------------------------------------------------------
*/

// 4. Sair: o programa deve encerrar seu funcionamento.





// Trabalho resolvido usando videos do youtube

// PASSO-A-PASSO
// 01. Criar uma Array vazia para salvar os Abrigos digitados pelo usuário

let abrigos = [];

// 02. Criar um Menu de opções conforme a descrição do enunciado

function menu() {
  let opcao 
  
  do {
  opcao = Number(prompt(`Abrigos temporários: \n\n1. Cadastrar abrigo \n2. Listar abrigos \n3. Procurar abrigo \n4. Sair \n\n(Digite de 1 a 4 para selecionar)`))
  
    switch (opcao) {
      case 1:
      cadastrarAbrigo();
      break;
            
      case 2:
      listarAbrigos();
      break;
            
      case 3:
      procurarAbrigo();
      break;
      
      case 4:
      alert("Programa finalizado!");
      break;
            
      default:
      alert("Tente novamente (Digite um número de 1 a 4)");
      }
      
      } while (opcao !== 4); 
}

menu()

// 03. Criar um cadastro de abrigos e avisar ao usuário que o abrigo foi cadastrado

function cadastrarAbrigo() {
  let nomeAbrigo = prompt("Digite o nome do abrigo:")
  let enderecoAbrigo = prompt("Digite o endereço do abrigo: \n(Exemplo: Rua, número, bairro)")
  let telefoneAbrigo = prompt("Digite o telefone do abrigo:")
  let capacidadeAbrigo = Number(prompt("Digite a capacidade do abrigo:"))
  let cidadeAbrigo = prompt("Digite a cidade onde fica localizado o abrigo:")
  
  let abrigo = {
    nome: nomeAbrigo,
    endereco: enderecoAbrigo,
    telefone: telefoneAbrigo,
    capacidade: capacidadeAbrigo,
    cidade: cidadeAbrigo
    };

    abrigos.push(abrigo);
    alert(`"Abrigo ${abrigo.nome} cadastrado com sucesso!"`);
}

// 04. Criar uma função que permita listar os abrigos

function listarAbrigos() {
    if (abrigos.length === 0) {
        alert("Nenhum abrigo cadastrado.");
        return;
    }

    let lista = "Abrigos cadastrados:\n";
    abrigos.forEach((abrigo, index) => {
        lista += `${index}. Nome: ${abrigo.nome}, Endereço: ${abrigo.endereco}, Telefone: ${abrigo.telefone}, Capacidade: ${abrigo.capacidade}, Cidade: ${abrigo.cidade}\n`;
    });
    alert(lista);
}

// 05. Criar uma função que permita procurar um abrigo pela sua cidade

function procurarAbrigo() {
    const cidade = prompt("Digite a cidade onde você está procurando o abrigo:");
    const resultados = abrigos.filter(abrigo => abrigo.cidade.toLowerCase().includes(cidade.toLowerCase()));

    if (resultados.length === 0) {
        alert("Nenhum abrigo encontrado. Tente outra cidade");
    } else {
        let lista = `Abrigos encontrados na cidade de ${cidade}:\n`;
        resultados.forEach(abrigo => {
            lista += `Nome: ${abrigo.nome}, Endereço: ${abrigo.endereco}, Telefone: ${abrigo.telefone}, Capacidade: ${abrigo.capacidade}, Cidade: ${abrigo.cidade}\n`;
        });
        alert(lista);
    }
}     

// a função de listar o abrigo com um índice e a função inteira de procurar abrigo, especificamentre pela cidade, só consegui resolver através da internet, copiando exemplos e testando.