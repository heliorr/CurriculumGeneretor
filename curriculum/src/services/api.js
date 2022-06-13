async function cepSearch(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
}

export default cepSearch;