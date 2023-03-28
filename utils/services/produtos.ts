import Api from './api'

const getProdutos = {
  produtos: () => Api.get('/produtos').catch(() => null)
}

export default getProdutos
