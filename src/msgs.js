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
    texts: {
        read: {
            error: {
                err_text_not_exists: 'Texto inexistente.'
            }
        },
        update: {
            error: {
                err_text_not_exists: 'Texto inexistente.',
                err_request_format_invalid: 'Formato inválido.'
            },
            success: 'Texto alterado com sucesso.'
        }
    },
    links: {
        read: {
            error: {
                err_link_not_exists: 'Link inexistente.'
            }
        },
        update: {
            error: {
                err_link_not_exists: 'Link inexistente.',
                err_request_format_invalid: 'Formato inválido.'
            },
            success: 'Link alterado com sucesso.'
        }
    },
    images: {
        read: {
            error: {
                err_image_not_exists: 'Imagem inexistente.'
            }
        }
    },
    planos: {
        read: {
            error: {
                err_plano_not_exists: 'Plano inexistente.'
            }
        },
        update: {
            error: {
                err_plano_not_exists: 'Plano inexistente.',
                err_request_format_invalid: 'Formato inválido.'
            },
            success: 'Plano alterado com sucesso.'
        }
    },
    aulas: {
        read: {
            error: {
                err_aula_not_exists: 'Aula inexistente.'
            }
        },
        update: {
            error: {
                err_aula_not_exists: 'Aula inexistente.',
                err_request_format_invalid: 'Formato inválido.'
            },
            success: 'Aula alterada com sucesso.'
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