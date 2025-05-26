
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Contato = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch('https://formsubmit.co/dozeroaocodigo2024@gmail.com', {
        method: 'POST',
        body: formData
      });
      
      setShowSuccess(true);
      form.reset();
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC] text-[#4E342E]">
      {/* Header Navigation */}
      <nav className="bg-[#4E342E] text-[#F5F5DC] py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold">Joaquim Borges</h1>
          <div className="flex gap-6">
            <button 
              onClick={() => navigate('/')}
              className="hover:text-amber-200 transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => navigate('/projetos')}
              className="hover:text-amber-200 transition-colors"
            >
              Projetos
            </button>
            <button 
              onClick={() => navigate('/contato')}
              className="hover:text-amber-200 transition-colors font-semibold"
            >
              Contato
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#4E342E]">
            Me Contrate
          </h1>
          <p className="text-lg md:text-xl text-[#4E342E]/80 max-w-3xl mx-auto">
            Pronto para transformar sua infraestrutura? Vamos conversar sobre como posso ajudar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 border-2 border-[#4E342E]/20">
            <h2 className="text-2xl font-bold mb-6 text-[#4E342E]">
              Envie uma Mensagem
            </h2>
            
            {showSuccess && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                <p className="font-medium">Mensagem enviada com sucesso!</p>
                <p className="text-sm">Retornarei o contato em breve.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="Novo contato do portfólio - Joaquim Borges" />
              <input type="hidden" name="_next" value={window.location.href} />
              <input type="hidden" name="_captcha" value="false" />

              <div>
                <Label htmlFor="name" className="text-[#4E342E] font-medium">
                  Nome Completo *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 border-[#4E342E]/30 focus:border-[#4E342E] focus:ring-[#4E342E]"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-[#4E342E] font-medium">
                  E-mail *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 border-[#4E342E]/30 focus:border-[#4E342E] focus:ring-[#4E342E]"
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-[#4E342E] font-medium">
                  Telefone
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="mt-2 border-[#4E342E]/30 focus:border-[#4E342E] focus:ring-[#4E342E]"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-[#4E342E] font-medium">
                  Mensagem *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-2 border-[#4E342E]/30 focus:border-[#4E342E] focus:ring-[#4E342E] resize-none"
                  placeholder="Conte-me sobre seu projeto ou necessidade..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#4E342E] hover:bg-[#3D2A26] text-[#F5F5DC] py-3 text-lg font-medium rounded-lg transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 border-2 border-[#4E342E]/20">
              <h2 className="text-2xl font-bold mb-6 text-[#4E342E]">
                Informações de Contato
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-[#4E342E]" />
                  <div>
                    <p className="font-medium text-[#4E342E]">E-mail</p>
                    <p className="text-[#4E342E]/80">dozeroaocodigo2024@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-[#4E342E]" />
                  <div>
                    <p className="font-medium text-[#4E342E]">Localização</p>
                    <p className="text-[#4E342E]/80">Brasil - Atendimento remoto e presencial</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-[#4E342E]/20">
              <h3 className="text-xl font-bold mb-4 text-[#4E342E]">
                Siga-me nas Redes Sociais
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="https://instagram.com/dozeroaoscodigos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg border border-[#4E342E]/20 hover:border-[#4E342E]/40 hover:bg-[#4E342E]/5 transition-all duration-300 group"
                >
                  <Instagram className="w-6 h-6 text-[#4E342E] group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium text-[#4E342E]">Instagram</p>
                    <p className="text-sm text-[#4E342E]/80">@dozeroaoscodigos</p>
                  </div>
                </a>

                <a 
                  href="https://youtube.com/@dozeroaocode" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg border border-[#4E342E]/20 hover:border-[#4E342E]/40 hover:bg-[#4E342E]/5 transition-all duration-300 group"
                >
                  <Youtube className="w-6 h-6 text-[#4E342E] group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium text-[#4E342E]">YouTube</p>
                    <p className="text-sm text-[#4E342E]/80">@dozeroaocode</p>
                  </div>
                </a>
              </div>
            </Card>

            <Card className="p-8 border-2 border-[#4E342E]/20 bg-[#4E342E] text-[#F5F5DC]">
              <h3 className="text-xl font-bold mb-4">
                Especialidades
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• Infraestrutura de Redes Corporativas</li>
                <li>• Segurança da Informação</li>
                <li>• Firewalls e Sistemas de Proteção</li>
                <li>• Monitoramento e Análise de Redes</li>
                <li>• Consultoria em TI</li>
                <li>• Implementação de Soluções Customizadas</li>
              </ul>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#4E342E] text-[#F5F5DC] py-8 mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-8 mb-4">
            <a 
              href="https://instagram.com/dozeroaoscodigos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-amber-200 transition-colors"
              aria-label="Seguir no Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://youtube.com/@dozeroaocode" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-amber-200 transition-colors"
              aria-label="Inscrever-se no YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm opacity-80">
            © 2024 Joaquim Borges. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contato;
