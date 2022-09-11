// Trabalho final Lógica de Progamação |
// Aluno:Guilherme Ferreira De Arruda  |
// Matrícula: 20114290050  Turma: AB   |
// Professor:Michel Emerson            |
// Asunto:Sistema de Clínica           |
// Nome: GVidas                        |
// -------------------------------------

const prompt=require("prompt-sync")({sigint:true});

console.log("1-Para iniciar")
console.log("2-Para encerrar o sistema")
sc=Number(prompt("Digite se deseja iniciar o sitema: "))

while(sc == 1){
    console.log("-------------------------------------------------")
    console.log("Opção 1-Clínica Geral")
    console.log("Opção 2-Ortopedia")
    console.log("Opção 3-Fisioterapia")
    console.log("Opção 4-Odontologia")
    console.log("Opção 5-Cardiologia")

    console.log("-------------------------------------------------")
    let at=Number(prompt("Digite em qual área deseja consultar: "));
    let hora_func=Number(prompt("Digite a hora de atendimento do paciente na fila: "));
    console.log("-------------------------------------------------")
    
    if (hora_func >=7.00 && hora_func <=22.00){         
        switch(at){
            case(1):
                console.log("Você será atendido na Clínica geral")
                console.log("-------------------------------------------------")
                if(hora_func >=7.00 && hora_func<=12.00){
                    console.log("Bem vindo ao turno da manhã de Clínica Geral")                 
                }
                else if(hora_func >=13.00 && hora_func<=18.00){
                    console.log("Bem vindo ao turno da tarde de Clínica geral" )
                    break
                }
                else if(hora_func >18.00 &&  hora_func<=22.00){
                    console.log("Bem vindo ao turno da noite de Clínica Geral")
                    break
                }
                break
            case(2):
                console.log("Você será atendido na Ortopedia")
                console.log("-------------------------------------------------")
                if(hora_func >=7.00 && hora_func<=12.00){
                    console.log("Bem vindo ao turno da manhã da Ortopedia ")
                    break
                }
                else if(hora_func>=13.00 && hora_func<=18.00){
                    console.log("Bem vindo ao turno da tarde da Ortopedia")
                    break
                }
                else if(hora_func>18.00 && hora_func<=22.00){
                    console.log("Bem vindo ao turno da noite de Ortopedia")
                    break
                }
                
                break       
            case(3):
                console.log("Você será atendido na Fisioterapia")
                console.log("-------------------------------------------------")
                if(hora_func >=7.00 && hora_func<=12.00){
                    console.log("Bem vindo ao turno da manhã da Fisioterapia ")
                    break
                }
                else if(hora_func>=13.00 && hora_func<=18.00){
                    console.log("Bem vindo ao turno da tarde da Fisioterapia")
                    break
                }
                else if(hora_func>18.00 && hora_func<=22.00){
                    console.log("Bem vindo ao turno da noite de Fisioterapia")
                    break
                }
                break
    
            case(4):
                console.log("Você será atendido na Odontologia")
                console.log("-------------------------------------------------")
                if(hora_func >=7.00 && hora_func<=12.00){
                    console.log("Bem vindo ao turno da manhã da Odontologia ")
                    break
                }
                else if(hora_func>=13.00 && hora_func<=18.00){
                    console.log("Bem vindo ao turno da tarde da Odontologia")
                    break
                }
                else if(hora_func>18.00 && hora_func<=22.00){
                    console.log("Bem vindo ao turno da noite de Odontologia")
                    break
                }
                break
    
            case(5):
                console.log("Você será atendido na Cardiologia")
                console.log("-------------------------------------------------")
                if(hora_func >=7.00 && hora_func<=12.00){
                    console.log("Bem vindo ao turno da manhã da Cardiologia ")
                    break
                }
                else if(hora_func>=13.00 && hora_func<=18.00){
                    console.log("Bem vindo ao turno da tarde da Cardiologia")
                    break
                }
                else if(hora_func>18.00 && hora_func<=22.00){
                    console.log("Bem vindo ao turno da noite de Cardiologia")
                    break
                }    
                break
    
            default:
                console.log("Desculpe,mas a área de atendimento selecionada é inválida \n reinicie o sistema ou coloque uma área válida no cadastro do paciente!!")   
                break
        }
    }else{
        console.log("Desculpe,estamos fechados!!")
        break
    }   
    console.log("1-Para escolher outra área de atendimento: ")    
    console.log("2-Para desligar o sistema: ")
    console.log("3-Para cadastrar o paciente: ")
    console.log("-------------------------------------------------")
    sc=Number(prompt("Deseja continuar ou encerrar ?  "))
    if(sc ==3){
        var fs = require('fs');
        fs.readFile('Documents/GUILHERME/ADS 2020/Trabalhos ADS 1° Semestre/Trabalho Final LP/Dadosconsulta.json', 'utf8', function readFileCallback(err,dados) {
            if (err) {
                return console.log("Arquivo NÃO encontrado!!!");
            } 
            else{
                var cadastro = JSON.parse(dados)
                var i = cadastro.length,sair="|"
                while (sair.toUpperCase() != "-") {
                    rg   = prompt("Digite o RG: "), 
                    nome = prompt("Digite o NOME: "),
                    med = prompt("Digite Nome do Médico: "),
                    area=prompt("Área da consulta: ")
                    fone = prompt("Digite o Telefone do paciente: ")
                    horacons=(prompt("Digite o horário da consulta: "))
                    sair = prompt("Para finalizar o cadastro do paciente digite - ")
                    dados = {
                        RG: rg,
                        Nome: nome,
                        Medico: med,
                        Atendimento: area,
                        Telefone: fone,
                        Horário: horacons
                    }
                    cadastro[i] = (dados)
                    i+=1
                }  
            }
            var jsonstr = JSON.stringify(cadastro)
            console.log(jsonstr) 
            fs.writeFile(Documents/GUILHERME/ADS 2020/Trabalhos ADS 1° Semestre/Trabalho Final LP/Dadosconsulta.json', jsonstr, (err) => {
                if (err) {
                    console.error("Erro Encontrado, Tente o Cadastro Do Paciente Novamente!!");
                    return;
                };
                console.log("Paciente Cadastrado Com Sucesso, Aguarde Ser Chamado!!");
            });
        }) 
    }    
}

        
