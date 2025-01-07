const dropoffEventPayload = {
    address: {
        addressSpecificNote: '2',
        buildingNumber: '1',
        country: 'ESP',
        countrySubDivision: 'ESP',
        globalLocationNumber: '1111111111111',
        gpsCoordinate: {
            lat: '4',
            long: '3'
        },
        nameOfBusinessPartyAtAddress: 'Nissan',
        postCode: '1234',
        floor: '5th',
        streetNumber: '34',
        streetName: 'asdf',
        townName: 'asdf'
    },
    assetReference: {
        assetReferenceInternalId: 'transportInstruction_883b2198a9fb2ca0efe394acd81b6658dcf96def267b82ef8f1fbbeeda4a68b8',
        assetReferenceReceivingBusinessPartyExternalReference: '',
        assetReferenceServiceBuyerExternalReference: '',
        assetReferenceServiceProviderExternalReference: '',
        assetReferenceType: 'TransportInstruction'
    },
    assetStatus: 'Active',
    assetStatusValidFrom: '2024-05-07T16:02:14.775Z',
    assetType: 'event',
    contacts: [
        {
            contactDetails: 'required, department logistics',
            emailAddress: 'CompanyX@world.com',
            faxNumber: '+31634567890',
            mobileNumber: '+31634567890',
            name: 'Mister X',
            namePrefix: 'Mr',
            phoneNumber: '+31634567890',
            webAddress: 'www.company-x.com'
        }
    ],
    createdAt: '2024-05-07T16:02:14.775Z',
    createdBy: 'businessParty_bd58c2e59b4854f36d',
    eventCategory: 'TransportEvent',
    eventMessage: 'string',
    eventTypeCustomer: 'asdf',
    eventTypeStandard: 'actualDropOff',
    id: 'event_bfb86ec20e2999a98a8f0d148bf2604742b749010830578a573d942c145714cf',
    metadata: {
        modelVersion: '1.0.0'
    },
    registrationDate: '2018-09-15T20:00:40+00:00',
    revisionNo: 0,
    transportCompanyId: 'businessParty_f8733c724c06205323____vehicle_e3c9592e4aae475b7b14113a2c4f0b5c0a3bcbc8255c9af3b72aeb286f7df62e',
    vehicleId: 'vehicle_e3c9592e4aae475b7b14113a2c4f0b5c0a3bcbc8255c9af3b72aeb286f7df62e',
    vin: 'ZXRH79LCCCSYRHCNG'
}

module.exports = {
  dropoffEventPayload
}