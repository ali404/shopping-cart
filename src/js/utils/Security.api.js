export default class Security {
    static validateUsername(username) {
        if(username.length < 3) {
            return false
        }
        else {
            return !(/\W+/g.test(username))
        }
    }

    static validatePassword(password) {
        if(password.length < 4) {
            return false
        }
        else {
            return !(/\W+/g.test(password))
        }
    }
}
