export default {
    user: {
        create: {
            error: {
                err_email_already_exists: 'E-mail already in use.'
            },
            success : 'User created successfully.'
        },
        update: {
            error: {
                err_email_already_exists: 'E-mail already in use.',
                err_password_not_match: 'Incorrect password'
            },
            success: 'User updated successfully.'
        }
    },
    session: {
        create: {
            error: {
                err_email_not_found: 'E-mail not found.',
                err_password_not_match: 'Incorrect password'
            },
            success: 'Login success'
        }
    }
}