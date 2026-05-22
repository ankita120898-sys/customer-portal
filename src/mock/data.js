export const mockCases = [
  { Id: '1', CaseNumber: '00001001', Subject: 'AC not working in unit 4B', Priority: 'High', Status: 'In Progress', CreatedDate: '2026-05-01T10:00:00Z', Description: 'The air conditioning unit has stopped working.' },
  { Id: '2', CaseNumber: '00001002', Subject: 'Water leakage from ceiling', Priority: 'High', Status: 'New', CreatedDate: '2026-05-10T09:00:00Z', Description: 'Water dripping from the ceiling near the bathroom.' },
  { Id: '3', CaseNumber: '00001003', Subject: 'Parking spot dispute', Priority: 'Medium', Status: 'Resolved', CreatedDate: '2026-04-20T14:00:00Z', Description: 'Another tenant is using my assigned parking spot.' },
  { Id: '4', CaseNumber: '00001004', Subject: 'Elevator maintenance request', Priority: 'Low', Status: 'Closed', CreatedDate: '2026-04-05T11:00:00Z', Description: 'Elevator makes a loud noise when going to floor 3.' },
  { Id: '5', CaseNumber: '00001005', Subject: 'Broken window latch', Priority: 'Medium', Status: 'New', CreatedDate: '2026-05-18T08:30:00Z', Description: 'Window latch in bedroom is broken and cannot be locked.' },
];

export const mockInvoices = [
  { Id: '1', Name: 'INV-2026-001', Amount__c: 1500.00, Status__c: 'Paid', Invoice_Date__c: '2026-01-01', Due_Date__c: '2026-01-15' },
  { Id: '2', Name: 'INV-2026-002', Amount__c: 1500.00, Status__c: 'Paid', Invoice_Date__c: '2026-02-01', Due_Date__c: '2026-02-15' },
  { Id: '3', Name: 'INV-2026-003', Amount__c: 1500.00, Status__c: 'Paid', Invoice_Date__c: '2026-03-01', Due_Date__c: '2026-03-15' },
  { Id: '4', Name: 'INV-2026-004', Amount__c: 1500.00, Status__c: 'Unpaid', Invoice_Date__c: '2026-04-01', Due_Date__c: '2026-04-15' },
  { Id: '5', Name: 'INV-2026-005', Amount__c: 1500.00, Status__c: 'Overdue', Invoice_Date__c: '2026-05-01', Due_Date__c: '2026-05-15' },
];

export const mockContracts = [
  { Id: '1', ContractNumber: 'CON-2024-001', Status: 'Activated', StartDate: '2024-06-01', EndDate: '2026-05-31', ContractTerm: 24 },
  { Id: '2', ContractNumber: 'CON-2022-001', Status: 'Terminated', StartDate: '2022-06-01', EndDate: '2024-05-31', ContractTerm: 24 },
];

export const mockAccount = {
  Id: '001',
  Name: 'Garg Properties',
  Phone: '+91 98765 43210',
  BillingStreet: '12, MG Road',
  BillingCity: 'Bengaluru',
  BillingState: 'Karnataka',
  BillingPostalCode: '560001',
  BillingCountry: 'India',
};

export const mockContact = {
  Id: '003',
  FirstName: 'Anjali',
  LastName: 'Garg',
  Email: 'anjali.garg@yopmail.com',
  Phone: '+91 98765 43210',
  MobilePhone: '+91 91234 56789',
  MailingStreet: '12, MG Road',
  MailingCity: 'Bengaluru',
  MailingState: 'Karnataka',
  MailingPostalCode: '560001',
};
