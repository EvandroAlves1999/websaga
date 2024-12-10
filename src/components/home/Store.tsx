import { useState } from 'react';
import { ShoppingCart, Plus } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { useCart } from '../../contexts/CartContext';
import { useAdmin } from '../../contexts/AdminContext';
import { ProductModal } from '../admin/ProductModal';
import { ProductDetails } from '../admin/ProductDetails';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  stock: number;
  additionalImages?: string[];
}

const initialProducts: Product[] = [
  {
    id: 1,
    name: 'PlayStation 5',
    price: 4499.99,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=800',
    description: 'Console PlayStation 5 com controle DualSense. Experimente jogos com gráficos incríveis e carregamento ultrarrápido.',
    category: 'Consoles',
    stock: 10,
    additionalImages: [
      'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 2,
    name: 'SSD NVMe 1TB',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1628557044797-f21a177c37ec?auto=format&fit=crop&q=80&w=800',
    description: 'SSD NVMe PCIe 4.0 de alta performance com velocidades de leitura de até 7000MB/s.',
    category: 'Armazenamento',
    stock: 15
  },
  {
    id: 3,
    name: 'Pendrive 128GB',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1618410320979-93b53ff4710a?auto=format&fit=crop&q=80&w=800',
    description: 'Pendrive USB 3.0 de alta velocidade com capacidade de 128GB.',
    category: 'Armazenamento',
    stock: 30
  },
  {
    id: 4,
    name: 'Mouse Gamer RGB',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=800',
    description: 'Mouse gamer com iluminação RGB, sensor óptico de alta precisão e 7 botões programáveis.',
    category: 'Periféricos',
    stock: 20
  }
];

export function Store() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();
  const { isAdmin } = useAdmin();

  const categories = Array.from(new Set(products.map(p => p.category)));
  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;

  const handleAddProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = {
      ...product,
      id: Math.max(...products.map(p => p.id)) + 1
    };
    setProducts([...products, newProduct]);
  };

  const handleEditProduct = (updatedProduct: Product) => {
    setProducts(products.map(p => 
      p.id === updatedProduct.id ? updatedProduct : p
    ));
    setSelectedProduct(null);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <section id="store" className="py-32 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Nossa Loja
          </h2>
          <p className="text-white max-w-2xl mx-auto text-lg">
            Produtos de alta qualidade para suas necessidades tecnológicas
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <Button
            variant={selectedCategory === null ? 'neon' : 'outline'}
            onClick={() => setSelectedCategory(null)}
          >
            Todos
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'neon' : 'outline'}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
          {isAdmin && (
            <Button
              variant="neon"
              icon={Plus}
              onClick={() => setIsNewProductModalOpen(true)}
            >
              Novo Produto
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="group bg-black/60 backdrop-blur-xl border border-blue-500/20 overflow-hidden cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {product.name}
                </h3>
                <p className="text-blue-100 mb-4 text-sm">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-400">
                    R$ {product.price.toFixed(2)}
                  </span>
                  <Button
                    variant="neon"
                    icon={ShoppingCart}
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                  >
                    Comprar
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {isAdmin && (
        <ProductModal
          isOpen={isNewProductModalOpen}
          onClose={() => setIsNewProductModalOpen(false)}
          onSave={handleAddProduct}
        />
      )}

      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          isOpen={true}
          onClose={() => setSelectedProduct(null)}
          onEdit={isAdmin ? handleEditProduct : undefined}
        />
      )}
    </section>
  );
}