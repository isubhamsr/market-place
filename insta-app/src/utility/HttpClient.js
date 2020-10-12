import Storage from './Storage'

const HttpClient = {
    BASE_URL: 'http://localhost:3001/api/v1/',

    prepareUrl : (route)=>{
        const url = HttpClient.BASE_URL
        return url + route
    },

    get: function(route) {
        return HttpClient.request(route, null, 'GET');
    },

    post: function(route, params) {
        return HttpClient.request(route, params, "POST");
    },

    put: function(route, params) {
        return HttpClient.request(route, params, "PUT");
    },

    delete: function(route, params) {
        return HttpClient.request(route, params, "DELETE");
    },

    request: async (route, params = null, method = 'GET') => {
        const token = Storage.get('token')
        let response = null
        const config = {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'token': token,
            },
        }
        if (method != 'GET') {
            config.body = JSON.stringify(params)
        }
        const url = HttpClient.prepareUrl(route)
        await fetch(url, config)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            response = data
        })
        .catch(error => {
            console.log(error.message);
            response = error.message
        })
        return response
    }
}

export default HttpClient