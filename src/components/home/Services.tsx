import { Code, Database, LineChart, MessageSquare, Settings, Shield } from 'lucide-react';
import { Card } from '../ui/Card';

const services = [
  {
    icon: Code,
    title: 'Desenvolvimento de Software',
    description: 'Criação de aplicações personalizadas para atender às necessidades específicas do seu negócio.',
  },
  {
    icon: Database,
    title: 'Infraestrutura em Nuvem',
    description: 'Soluções escaláveis e seguras para hospedar suas aplicações na nuvem.',
  },
  {
    icon: Shield,
    title: 'Segurança Digital',
    description: 'Proteção avançada para seus dados e sistemas contra ameaças cibernéticas.',
  },
  {
    icon: MessageSquare,
    title: 'Consultoria em TI',
    description: 'Análise e otimização dos processos de TI para melhorar a eficiência.',
  },
  {
    icon: LineChart,
    title: 'Business Intelligence',
    description: 'Análise de dados e insights para tomada de decisões estratégicas.',
  },
  {
    icon: Settings,
    title: 'Suporte Técnico',
    description: 'Assistência técnica especializada 24/7 para seus sistemas.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Nossos Serviços
          </h2>
          <p className="text-white max-w-2xl mx-auto text-lg">
            Oferecemos soluções completas em tecnologia para impulsionar
            sua empresa ao próximo nível.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 group bg-black/60 backdrop-blur-xl border border-blue-500/20 hover:bg-blue-900/40 transition-all duration-300"
            >
              <service.icon className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-blue-800 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-blue-800 group-hover:text-white transition-colors duration-300">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}