export default {
    user: {
        read: {
            error: {
                err_user_not_exists: 'Usuário inexistente.'
            }
        },
        create: {
            error: {
                err_email_already_exists: 'E-mail já cadastrado.',
                err_rg_already_exists: 'RG já cadastrado.',
                err_cpf_already_exists: 'CPF já cadastrado.',
            },
            success: 'Usuário criado com sucesso.'
        }
    },
    planos: {
        read: {
            error: {
                err_plano_not_exists: 'Plano inexistente.'
            }
        }
    },
    aulas: {
        read: {
            error: {
                err_aula_not_exists: 'Aula inexistente.'
            }
        }
    },
    orders: {
        create: {
            error: {
                err_user_not_exists: 'Usuário inexistente.'
            },
            success: 'Pedido criado com sucesso.'
        },
        read: {
            error: {
                err_order_not_exists: 'Pedido inexistente.'
            }
        }
    }
}