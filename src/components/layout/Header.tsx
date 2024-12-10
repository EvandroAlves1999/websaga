import { Menu, ShoppingBag, User } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import { AuthModal } from '../auth/AuthModal';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { items, setIsCartOpen } = useCart();
  const { user, logout } = useAuth();

  const navLinks = [
    { href: '#services', label: 'Serviços' },
    { href: '#store', label: 'Loja' },
    { href: '#about', label: 'Sobre' },
    { href: '#contact', label: 'Contato' }
  ];

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="fixed w-full bg-black/30 backdrop-blur-md z-50 border-b border-blue-500/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                Saga
              </h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text hover:from-blue-300 hover:to-blue-500 transition-all duration-200"
                >
                  {label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              {user ? (
                <div className="flex items-center gap-4">
                  <span className="text-blue-400">{user.name}</span>
                  <button
                    onClick={logout}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Sair
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <User className="h-6 w-6" />
                  <span className="hidden md:inline">Entrar</span>
                </button>
              )}

              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ShoppingBag className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              <button
                className="md:hidden p-2 hover:bg-blue-500/10 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu size={24} className="text-blue-400" />
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t border-blue-500/10">
              <div className="flex flex-col space-y-4">
                {navLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text hover:from-blue-300 hover:to-blue-500 transition-all duration-200"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
}