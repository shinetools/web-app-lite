export interface Recipient {
  iban: string;
  label: string;
  bankTransferRecipientId: string;

  [x: string]: any;
}

const recipients: Recipient[] = [
  {
    bankTransferRecipientId: 'c34c2842-0164-404b-aab7-8a031ca2738e',
    createdAt: 1570632852155,
    iban: 'FR7610107001011234567890129',
    name: 'Mon compte perso',
    nameLatinised: 'mon compte perso',
    phoneNumber: '',
    uid: '297c56af-5ec9-4994-97c0-70e9c3fb6af2',
    updatedAt: 1570632852155,
    swiftBic: 'BNPAFRPP',
    bankProvider: 'TREEZOR',
    bankProviderTransferRecipientId: '11809',
    isUserBankAccount: true,
    status: 'VALIDATED',
    isDeleted: false,
    label: 'Mon compte',
    usableForSct: true,
    isTreezorBeneficiary: true,
    sepaCreditorIdentifier: '',
  },
  {
    bankTransferRecipientId: '9d56c407-474a-4bd6-9915-66ba9b14a72d',
    createdAt: 1570462969963,
    iban: 'FR7616798000010000012077882',
    name: 'URSSAF',
    nameLatinised: 'urssaf',
    phoneNumber: '',
    uid: '297c56af-5ec9-4994-97c0-70e9c3fb6af2',
    updatedAt: 1570462969963,
    swiftBic: 'TRZOFR21XXX',
    bankProvider: 'TREEZOR',
    bankProviderTransferRecipientId: '11762',
    isUserBankAccount: false,
    status: 'VALIDATED',
    isDeleted: false,
    label: 'URSSAF',
    usableForSct: true,
    isTreezorBeneficiary: true,
    sepaCreditorIdentifier: '',
  },
];

export default recipients;
