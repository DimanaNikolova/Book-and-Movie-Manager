const request = async (method, url, data) => {
    // let options = {
    //     method,
    // };

    // if(data) {
    //     options.headers['Content-Type'] = 'application/json';
    //     options.body = JSON.stringify(data);
    // }

    // return fetch(url, options).then((res) => res.json());

    return fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
}

export const get = request.bind(null, 'GET')
export const post = request.bind(null, 'POST')
export const put = request.bind(null, 'PUT')
export const del = request.bind(null, 'DELETE')
export const patch = request.bind(null, 'PATCH')
