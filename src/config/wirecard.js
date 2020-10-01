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

export async function createWirecardOrder(order, pedido, customer) {
    return await moip.order.create({
        ownId: order.id,
        amount: {
            currency: 'BRL'
        },
        items: [{
            product: pedido.name,
            quantity: 1,
            detail: pedido.description,
            price: pedido.price
        }],
        customer: {
            id: customer,
        }
    }).then((response) => {
        return response.body.id;
    }).catch((err) => {
        console.log(err)
    })
}

export async function createWirecardBoletoPayment(order) {
    var expirationDate = new Date(new Date().getTime()+(3*24*60*60*1000));

    var expirationYear = expirationDate.getFullYear();
    var expirationMonth = expirationDate.getMonth() + 1;
    var expirationDay = expirationDate.getDate();

    return await moip.payment.create(order, {
        installmentCount: 1,
        fundingInstrument: {
            method: "BOLETO",
            boleto: {
                expirationDate: expirationYear + '-' + ("0" + expirationMonth).slice(-2) + '-' + ("0" + expirationDay).slice(-2),
                instructionLines: {
                    first: "",
                    second: "",
                    third: ""
                },
                logoUri: "https://escolademianmaia.com.br/static/media/logo.facb62b7.png"
            }
        }
    }).then((response) => {
        return response.body;
    }).catch((err) => {
        console.log(err)
    });
}

export async function createWirecardCardPayment(order, cchash) {
    return await moip.payment.create(order, {
        installmentCount: 1,
        statementDescriptor: 'DEMIANMAIA',
        fundingInstrument: {
            method: 'CREDIT_CARD',
            creditCard: {
                hash: cchash
            }
        }
    }).then((response) => {
        return response.body;
    }).catch((err) => {
        console.log(err)
    })
}

export async function getWirecardPayment(payment) {

    return await moip.payment.getOne(payment)
    .then((response) => {
        return response.body;
    }).catch((err) => {
        console.log(err)
    })
}