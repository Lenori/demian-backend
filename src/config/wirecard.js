import moipSdk from 'moip-sdk-node'

const moip = moipSdk({
  token: '2UVKJKDUEGY3WVPMKQGAY3ORCROQECXJ',
  key: 'XS2TPXDNNF797ZBIRRCCM4YVM5FPLR5HIPFB461Q',
  production: false
});

export async function createWirecardCustomer(customer) {
    return await moip.customer.create({
        ownId: customer.id,
        fullname: customer.name,
        email: customer.email,
        birthDate: customer.birthday,
        taxDocument: {
            type: 'CPF',
            number: customer.cpf
        },
        phone: {
            countryCode: '55',
            areaCode: '11',
            number: '66778899'
        }
    }).then((response) => {
        return response.body.id;
    }).catch((err) => {
        console.log(err)
    });
}