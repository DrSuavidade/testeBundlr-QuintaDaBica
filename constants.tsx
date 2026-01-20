import { Wine, Event } from "./types";
import bicaVinhas2011 from "./src/images/bica_vinhas_2011.png";
import bicaVinhas2016 from "./src/images/bica_vinhas_2016.png";
import bicaJaen2011 from "./src/images/bica_2011.png";
import bicaRose2019 from "./src/images/bica_2019.png";
import brancoQbica2021 from "./src/images/qbica_2021.png";

export const WINES: Wine[] = [
  {
    id: "1",
    name: "Quinta da Bica Vinhas Velhas",
    vintage: "2011",
    region: "Dão",
    type: "Red",
    price: 25,
    description:
      "Um vinho que expressa a pureza do terroir do Dão. Apresenta-se pronto a consumir no entanto poderá ser guardado por mais 10 anos.",
    tastingNotes:
      "Aroma muito complexo, apresenta aroma a frutos silvestres bem maduros, com nuances de cereja e especiarias, aliados à presença de notas de chocolate.",
    blend: "Touriga Nacional, Alfrocheiro, Tinta Roriz",
    servingTemp: "18ºC",
    aging: "Pode ser guardado por mais 10 anos",
    awards: ["Altamente Recomendado - Revista de Vinhos"],
    imageUrl:
      "https://images.unsplash.com/photo-1510850477530-ceb236b41f67?auto=format&fit=crop&q=80&w=1000",
    bottleImageUrl: bicaVinhas2011,
  },
  {
    id: "2",
    name: "Quinta da Bica Vinhas Velhas",
    vintage: "2016",
    region: "Dão",
    type: "Red",
    price: 65,
    description:
      "A expressão máxima das nossas vinhas mais antigas. Demonstra-se aveludado e de corpo inteiro com presença elegante.",
    tastingNotes:
      "Aroma muito complexo, apresenta aroma a frutos silvestres bem maduros, nuances vegetais e especiarias. Sabor: Taninos civilizados contribuindo para um final longo.",
    blend: "Mistura de castas tradicionais de Vinhas Velhas",
    servingTemp: "18ºC",
    aging: "Pode ser guardado por 20 anos",
    awards: ["94 pts - Robert Parker", "Grande Escolha"],
    imageUrl:
      "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80&w=1000",
    bottleImageUrl: bicaVinhas2016,
  },
  {
    id: "3",
    name: "Quinta da Bica Jaen",
    vintage: "2011",
    region: "Dão",
    type: "Red",
    price: 32,
    description:
      "Um monovarietal de Jaen que revela a elegância e delicadeza desta casta no Dão.",
    tastingNotes:
      "Aroma complexo, apresenta aroma a frutos silvestres bem maduros, nuances vegetais e especiarias. Sabor: Aveludado e corpo médio.",
    blend: "Jaen (100%)",
    servingTemp: "18ºC",
    aging: "Pode ser guardado por 10 anos",
    awards: ["Medalha de Ouro - Vinhos de Portugal"],
    imageUrl:
      "https://images.unsplash.com/photo-1559158068-930d7b7eb841?auto=format&fit=crop&q=80&w=1000",
    bottleImageUrl: bicaJaen2011,
  },
  {
    id: "4",
    name: "Quinta da Bica Jean",
    vintage: "2019",
    region: "Dão",
    type: "Rosé",
    price: 18,
    description:
      "Fresco e envolvente, ideal para momentos de descontração e gastronomia leve.",
    tastingNotes:
      "Frutos vermelhos frescos, floral discreto, acidez equilibrada.",
    blend: "Touriga Nacional",
    servingTemp: "9ºC",
    aging: "Pode ser guardado por mais 5 anos",
    awards: ["Boa Escolha - Revista de Vinhos"],
    imageUrl:
      "https://images.unsplash.com/photo-1594498653385-d5172c532c00?auto=format&fit=crop&q=80&w=1000",
    bottleImageUrl: bicaRose2019,
  },
  {
    id: "5",
    name: "Vinho Branco QBica",
    vintage: "2021",
    region: "Dão",
    type: "White",
    price: 15,
    description:
      "Um branco vibrante, reflexo da mineralidade e altitude da nossa propriedade.",
    tastingNotes: "Frutos de polpa branca, notas cítricas, final mineral.",
    blend: "Encruzado, Malvasia Fina",
    servingTemp: "9ºC",
    aging: "Pode ser guardado por mais 5 anos",
    awards: [],
    imageUrl:
      "https://images.unsplash.com/photo-1559158068-930d7b7eb841?auto=format&fit=crop&q=80&w=1000",
    bottleImageUrl: brancoQbica2021,
  },
];

export const EVENTS: Event[] = [
  {
    id: "e1",
    title: "Prova Clássica de Vinhos",
    date: "Todos os Sábados",
    time: "11:00",
    price: 25,
    description:
      "Uma viagem sensorial pelos vinhos da Quinta da Bica, acompanhada por produtos regionais selecionados.",
    image:
      "https://images.unsplash.com/photo-1474767821094-a8fe9d8c8fdd?auto=format&fit=crop&q=80&w=1000",
  },
];
