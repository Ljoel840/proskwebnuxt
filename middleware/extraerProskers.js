import axios from 'axios'

export default (context,entrada) =>new Promise ((resolve, reject) => {
    axios
    .post(`${context.$config.baseURL}dfs30007`, entrada)
    .then(response => {
        if (!response.data) {
            reject('No hay retorno de login')
        } else if (!response.data.ErrorSDT) {
            reject('No hay retorno del ErrorSDT')
        } else if (response.data.ErrorSDT.ErrorCode === 0) {
           resolve(response.data.frontNomUsuario)
        } else {
            reject(response.data.ErrorSDT.ErrorDescription)
        }

    })
    .catch(error => reject(error))
})