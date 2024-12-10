import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center bg-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e520_1px,transparent_1px),linear-gradient(to_bottom,#4f46e520_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-900/30 text-blue-400 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
            Inovação em Tecnologia
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-slide-up text-white">
            Transforme seu negócio com{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              soluções digitais
            </span>
          </h1>
          
          <p className="text-xl text-blue-100 mb-12 animate-slide-up-delayed">
            Desenvolvemos soluções personalizadas que impulsionam o crescimento e a eficiência da sua empresa
          </p>
          
          <div className="flex justify-center gap-4 animate-fade-in-delayed">
            <Button icon={ArrowRight} variant="neon">
              Comece Agora
            </Button>
            <Button variant="outline">
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}