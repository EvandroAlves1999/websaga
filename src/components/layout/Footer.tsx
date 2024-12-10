export function Footer() {
  return (
    <footer className="bg-black border-t border-blue-500/20 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              Saga
            </h3>
            <p className="text-blue-100">
              Transformando ideias em soluções digitais inovadoras.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contato</h3>
            <p className="text-blue-100">Email: contato@saga.com</p>
            <p className="text-blue-100">Telefone: (11) 1234-5678</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-100 hover:text-blue-400 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-blue-100 hover:text-blue-400 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-blue-100 hover:text-blue-400 transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-500/20 text-center text-blue-100">
          <p>&copy; {new Date().getFullYear()} Saga. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}