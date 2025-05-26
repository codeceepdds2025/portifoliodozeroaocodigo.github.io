
import { Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

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
              className="hover:text-amber-200 transition-colors"
            >
              Contato
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center">
          {/* Profile Picture */}
          <div className="mb-8">
            <img 
              src="https://github.com/dozeroaocode.png" 
              alt="Foto de perfil de Joaquim Borges"
              className="w-32 h-32 rounded-full mx-auto border-4 border-[#4E342E] shadow-lg"
            />
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#4E342E]">
            Joaquim Borges
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium mb-8 text-[#4E342E]/80">
            Especialista em Redes, Infraestrutura e Segurança
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto text-[#4E342E]/90">
            Especialista em redes, infraestrutura e segurança com mais de 12 anos de atuação. 
            Com foco em soluções robustas, confiáveis e seguras, atuo na interseção entre 
            hardware, software e conectividade.
          </p>

          {/* Main Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              onClick={() => navigate('/contato')}
              className="bg-[#4E342E] hover:bg-[#3D2A26] text-[#F5F5DC] px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Me Contrate
            </Button>
            <Button 
              onClick={() => navigate('/projetos')}
              variant="outline"
              className="border-2 border-[#4E342E] text-[#4E342E] hover:bg-[#4E342E] hover:text-[#F5F5DC] px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Ver Projetos
            </Button>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center gap-8">
            <a 
              href="https://instagram.com/dozeroaoscodigos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#4E342E] hover:text-[#4E342E]/70 transition-colors group"
              aria-label="Seguir no Instagram"
            >
              <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Instagram</span>
            </a>
            <a 
              href="https://youtube.com/@dozeroaocode" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#4E342E] hover:text-[#4E342E]/70 transition-colors group"
              aria-label="Inscrever-se no YouTube"
            >
              <Youtube className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="font-medium">YouTube</span>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#4E342E] text-[#F5F5DC] py-8 mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm opacity-80">
            © 2024 Joaquim Borges. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
