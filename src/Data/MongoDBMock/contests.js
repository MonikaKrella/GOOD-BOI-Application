const contests = [
  {
    contestId: 'a0347677-c3c9-4edc-9d46-fed4a958fdc2',
    competitionName: 'XII Zawody im. Pana Starosty',
    kynologiqueDepartment: 'Gdynia',
    startDate: new Date(2022, 3, 22, 10, 0),
    endDate: new Date(2022, 3, 23),
    place: 'Gdańsk',
    detailAdress: 'ul.Grunwaldzka 222',
    judge: 'Alberto Makkaroni',
    steward: 'Wiesio Kapusta',
    manager: 'Jagienka Krzywobroda',
    applicationFeeInPLN: 90,
    participants: ['matylda1234', 'bogdan678', 'zosia9474'],
    obedienceClasses: {
      class0: {
        isComleted: false,
        competingPairs: [
          {
            dogName: 'Woof',
            summaryId: '22-03-22Woof',
          },
          {
            dogName: 'Nosek',
            summaryId: '22-03-22Nosek',
          },
          {
            dogName: 'Ptysio',
            summaryId: '22-03-22Ptysio',
          },
        ],
      },
      class1: {
        isComleted: false,
        competingPairs: [
          {
            dogName: 'Ollie',
            summaryId: '22-03-22Ollie',
          },
          {
            dogName: 'Norah',
            summaryId: '22-03-22Norah',
          },
          {
            dogName: 'Zumba',
            summaryId: '22-03-22Zumba',
          },
        ],
      },
    },
  },

  {
    id: '3845029d-e97d-41ed-997f-2299d09ef648',
    kynologiqueDepartment: 'Poznań',
    competitionName: 'Piętnasty zjazd dobrych chłopaków',
    date: new Date(2022, 5, 1),
    endDate: new Date(2022, 3, 23),
    place: 'Poznań',
    detailAdress: 'ul.Grunwaldzka 222',
    judge: 'Zuzzana Zezowa',
    steward: 'Zygfryd Zaduzy',
    manager: 'Zbyszko Bogdaniec',
    applicationFeeInPLN: 110,
    obedienceClasses: {
      class0: {
        isComleted: false,
        competingPairs: [
          {
            dogName: 'Woof',
            summaryId: '22-05-01Woof',
          },
          {
            dogName: 'Nosek',
            summaryId: '22-05-01Nosek',
          },
          {
            dogName: 'Ptysio',
            summaryId: '22-05-01Ptysio',
          },
        ],
      },
      class1: {
        isComleted: false,
        competingPairs: [
          {
            dogName: 'Ollie',
            summaryId: '22-05-01Ollie',
          },
          {
            dogName: 'Norah',
            summaryId: '22-05-01Norah',
          },
          {
            dogName: 'Zumba',
            summaryId: '22-05-01Zumba',
          },
        ],
      },
    },
  },
  {
    id: 'c9e7b738-f8e6-4300-9087-332ad5a28b4f',
    kynologiqueDepartment: 'Sopot',
    competitionName: 'Konkurs grzeczności',
    date: new Date(2021, 12, 24, 11, 0),
    endDate: new Date(2021, 12, 24),
    place: 'Sopot',
    detailAdress: 'ul. Potokowa 13',
    judge: 'Aniela Loczek',
    steward: 'Bruno Mars',
    manager: 'Gerwazy Kapusta',
    applicationFeeInPLN: 70,
    obedienceClasses: {
      class0: {
        isComleted: false,
        competingPairs: [
          {
            dogName: 'Woof',
            summaryId: '21-12-24Woof',
          },
        ],
      },
      class1: {
        isComleted: false,
        competingPairs: [
          {
            dogName: 'Nosek',
            summaryId: '21-12-24Nosek',
          },
        ],
      },
      class2: {
        isComleted: false,
        competingPairs: [
          {
            dogName: 'Ptysio',
            summaryId: '21-12-24Ptysio',
          },
          {
            dogName: 'Ollie',
            summaryId: '21-12-24Ollie',
          },
        ],
      },
      class3: {
        isComleted: false,
        competingPairs: [
          {
            dogName: 'Norah',
            summaryId: '21-12-24Norah',
          },
          {
            dogName: 'Zumba',
            summaryId: '21-12-24Zumba',
          },
        ],
      },
    },
  },
];

export default contests;
