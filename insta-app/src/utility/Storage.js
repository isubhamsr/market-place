const Storage = {
    get : (key)=>{
        try {
            const token = localStorage.getItem(key)
            if (token !== null){
                return token
            }
            return token
        } catch (error) {
            return error.message
        }
    },
    set : (key, value)=>{
        try {
            return localStorage.setItem(key, value)
        } catch (error) {
            return error.message
        }
    },
    delete : (key)=>{
        try {
            return localStorage.removeItem(key)
        } catch (error) {
            return error.message
        }
    }
}

export default Storage