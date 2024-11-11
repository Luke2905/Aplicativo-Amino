const dados = [
    {
        nome: "AMICAT CRH 3001",
        prod: "Expansão",
        tipos: ["Bloco", "Moldado"],  // Alterado para um array de tipos
        aplicacao: ["Flexível Convencional", "Alta Resiliência", "Visco Elástico"],
        descricao: "Catalisador de expansão, indicado para melhorar a pele em peças injetadas.",

    },
    {
        nome: "AMICAT CMR 3077",
        prod: "Expansão",
        tipos: ["N/A"],
        aplicacao: ["Integral Skin", "Alta Resiliência", "Semi Rígido", "Microcelular"]
    },
    {
        nome: "AMICAT CMR 3300",
        prod: "Gelificação",
        tipos: ["Bloco", "Moldado"],
        aplicacao: ["Flexível Convencional", "Alta Resiliência", "Visco Elástico","Integral Skin", "Rigido", "Semi Rígido", "Hiper Soft", "Microcelular"]
    },
    {
        nome: "AMICAT CMR 3750",
        prod: "Balanceado",
        tipos: ["Bloco", "Moldado"],
        aplicacao: ["Flexível Convencional", "Alta Resiliência"]
    },
    {
        nome: "AMICAT CFF 3200",
        prod: "Balanceado",
        tipos: ["Bloco"],
        aplicacao: ["Flexível Convencional", "Alta Resiliência"]
    },
    {
        nome: "AMICAT CMR 3113",
        prod: "Balanceado",
        tipos: ["Bloco"],
        aplicacao: ["Flexível Convencional", "Alta Resiliência"]
    },
    {
        nome: "AMICAT CMR 3040",
        prod: "Balanceado",
        tipos: ["Moldado"],
        aplicacao: ["Alta Resiliência", "Semi Rígido"]
    },
    {
        nome: "AMICA BC 3310",
        prod: ["Gelificação", "Bloqueado"],
        tipos: ["Moldado"],
        aplicacao: ["Flexível Convencional", "Alta Resiliência", "Visco Elástico", "Microcelular"]
    },
    {
        nome: "AMISIL AMS 4327",
        prod: ["A","M"],
        tipos: ["Baixa"],
        aplicacao: ["Convencional Flexível"],
        estab: ["★★★★★"],
        ranking: ["Excelente"]
    },
    {
        nome: "AMISIL SHS 4124",
        prod: ["A"],
        tipos: ["Alta"],
        aplicacao: ["Hiper Soft"],
        estab: ["★★★★★"],
        ranking: ["Excelente"]
    },
    {
        nome: "AMISIL AMS 4230",
        prod: ["A - M"],
        tipos: ["Baixa"],
        aplicacao: ["Convencional Flexível"],
        estab: ["★★★★"],
        ranking: ["Bom"]
    },
    {
        nome: "AMISIL AMS 4800",
        prod: ["B"],
        tipos: ["Alta"],
        aplicacao: ["Flexivel Convencional Viscoelástico"],
        estab: ["★★★"],
        ranking: ["Médio"]
    },
    {
        nome: "AMICOLOR PFR",
        prod: ["Vermelho"],
        tipos: ["red"],
        aplicacao: ["Pasta"],
        descricao: "Pigmento vermelho orgânico disperso em poliol.",
        link: "pag-construcao.html"
    },
    {
        nome: "AMICOLOR PFR",
        prod: ["Vermelho"],
        tipos: ["#ff00a6"],
        descricao: "Pigmento vermelho orgânico disperso em poliol.",
        aplicacao: ["Pasta"],
        link: "pag-construcao.html"
    },
    {
        nome: "AMICOLOR PFY",
        prod: ["Amarelo"],
        tipos: ["yellow"],
        descricao: "Pigmento amarelo orgânico disperso em poliol.",
        aplicacao: ["Pasta", "Liquido"],
        link: "pag-construcao.html"
    },

]

function exportarDados(){

    return dados
}
