const url = 'https://6046a517f0c6dc00177b21a9.mockapi.io/api/v1/catalog';

class Api {
    static getCatalog = () => fetch(url).then(res => res.json());
}

export default Api;