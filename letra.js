/*
    LETRA DA MÚSICA
    ----------------
    Cole a letra ENTRE os dois acentos graves ( ` ) logo abaixo.
    Uma linha da música por linha. Não precisa de aspas nem de vírgula.
    Linhas em branco são ignoradas.

    Apague o texto de exemplo e cole o seu.
*/

const TEXTO_DA_LETRA = `
Se um dia eu te encontrar
Do jeito que sonhei
Quem sabe ser seu par perfeito

E te amar do jeito que eu imaginei

Ao virar a esquina
Atrás de uma cortina
Me perder

Me perder
No escuro com você
Fogo na fogueira
O seu beijo
E o desejo em seu olhar
As flores no altar
Véu e grinalda, lua de mel
Chuva de arroz e tudo depois
Dama de honra pega o buquê
Ninguém mais feliz que eu e você
Mas se um dia eu te encontrar
Do jeito que sonhei
Quem sabe ser seu par perfeito
E te amar do jeito que eu imaginei
Ao virar a esquina
Atrás de uma cortina
Me perder
No escuro com você
Fogo na fogueira
O seu beijo
E o desejo em seu olhar
As flores no altar
Véu e grinalda, lua de mel
Chuva de arroz e tudo depois

`;

window.LETRA = TEXTO_DA_LETRA 
    .split("\n")
    .map(function (linha) { return linha.trim(); })
    .filter(function (linha) { return linha.length > 0; });      


  
