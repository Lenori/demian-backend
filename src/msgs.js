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
    },
    auth: {
        read: {
            error: {
                err_token_not_provided: 'Auth token not provided.',
                err_token_invalid: 'Auth token invalid.',
                err_admin_only: 'Only admin users can see this page.'
            }
        }
    },
    room: {
        create: {
            error: {
                err_game_not_exists: 'Game does not exist.',
                err_user_not_teacher: 'Only teachers can create games'
            },
            success: 'Room created successfully.'
        },
        update: {
            error: {
                err_room_not_exists: 'Room does not exist.',
                err_user_not_authorized: 'You do not have permission to edit this room.'
            },
            success: 'Room updated successfully.'
        },
        show: {
            error: {
                err_room_not_exists: 'Room does not exist.'
            }
        }
    },
    game_session: {
        create: {
            error: {
                err_room_not_exists: 'Room does not exist.',
                err_password_not_match: 'Wrong password'
            },
            success: 'Login created succsesfully.'
        }
    },
    game_auth: {
        read: {
            error: {
                err_token_not_provided: 'Auth token for this game not sent.',
                err_token_invalid: 'Auth token for this game invalid.',
                err_game_invalid: 'Login invalid for this game.'
            }
        }
    },
}