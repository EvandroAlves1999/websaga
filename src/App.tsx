import { About } from './components/home/About';
import { Contact } from './components/home/Contact';
import { Hero } from './components/home/Hero';
import { ProjectCarousel } from './components/home/ProjectCarousel';
import { Services } from './components/home/Services';
import { Store } from './components/home/Store';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import { AdminProvider } from './contexts/AdminContext';
import { CartDrawer } from './components/cart/CartDrawer';

export function App() {
  return (
    <AuthProvider>
      <AdminProvider>
        <CartProvider>
          <div className="min-h-screen flex flex-col bg-black text-white">
            <Header />
            <main className="flex-grow">
              <Hero />
              <Services />
              <Store />
              <About />
              <ProjectCarousel />
              <Contact />
            </main>
            <Footer />
            <CartDrawer />
          </div>
        </CartProvider>
      </AdminProvider>
    </AuthProvider>
  );
}