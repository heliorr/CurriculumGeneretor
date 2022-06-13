

const INITIAL_STATE = {
  name:"Helio Souza",
  idade:"23",
  sobre: "SOu muito Brabo, em tudo que é brabo!",
  telefone:"8798788787",
  email:"heliorr7@gmail.com",
  linkedin:"heliorr7@gmail.com",
  cep:"56313750",
  cidade:"Petrolina",
  estado:"PE",
  bairro:"Cosme e Damião",
  rua:"Rua Cézario Paiva Neto",
  number:"67",
  image:"https://conteudo.imguol.com.br/c/entretenimento/58/2017/05/30/pikachu-nervoso-1496159464346_v2_450x450.png",
  formacao: [
    {
      instituto:"Curso Doidho",
      ano:"2018",
      curso:"informatica",
    },
    {
      instituto:"Faculdade Doidha",
      ano:"2019",
      curso:"Culinaria Animal",
    }
  ],
  github: "heliorr7@gmail.com",
  skills: ['jogar', 'lutar', 'treinar'],
  referencias: [
    {
      empresa:"Curso Doidho",
      periodo:"2018",
      referencia:"informatica",
    },
    {
      empresa:"Faculdade Doidha",
      periodo:"2019",
      referencia:"Culinaria Animal",
    }
  ],
  };
  
  function myReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'SUBMIT_PERSONAL':
        return { 
            ...state,
            name: action.payload.name,
            idade: action.payload.idade,
            sobre: action.payload.sobre,
            telefone: action.payload.telefone,
            email: action.payload.email,
            linkedin: action.payload.linkedin,
            cep: action.payload.cep,
            cidade: action.payload.cidade,
            estado: action.payload.estado,
            bairro: action.payload.bairro,
            rua: action.payload.rua,
            number: action.payload.number,
            image: action.payload.image,
         };
        case 'SUBMIT_PROFISSIONAL':
        return { 
            ...state,
            formacao: action.payload.formacao,
            github: action.payload.github,
            skills: action.payload.skills,
            referencias: action.payload.referencias,
         };
      default:
        return state;
    }
  }
  
  export default myReducer;