const personalInfo = [
  {
    name: 'name',
    type: 'text',
    charLimit: '40',
  },
  {
    name: 'email',
    type: 'text',
    charLimit: '50',
  },
  {
    name: 'id',
    type: 'text',
    charLimit: '11',
  },
  {
    name: 'address',
    type: 'text',
    charLimit: '200',
  },
  {
    name: 'city',
    type: 'text',
    charLimit: '28',
  },
  {
    name: 'state',
    type: 'select',
  },
  {
    name: 'typeOfHousing',
    type: 'radio',
  }
];

const states = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

export { personalInfo, states };