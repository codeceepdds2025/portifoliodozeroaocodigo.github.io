
import { useState, useEffect } from "react";
import { Instagram, Youtube, ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  updated_at: string;
}

const Projetos = () => {
  const navigate = useNavigate();
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/dozeroaocode/repos?sort=updated&per_page=6');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Erro ao carregar repositórios:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const featuredProjects = [
    {
      id: 1,
      title: "Infraestrutura de Rede Corporativa",
      description: "Projeto de implementação de infraestrutura completa com foco em segurança e alta disponibilidade.",
      link: "https://instagram.com/dozeroaoscodigos",
      type: "instagram" as const
    },
    {
      id: 2,
      title: "Sistema de Monitoramento de Segurança",
      description: "Solução customizada para monitoramento em tempo real de eventos de segurança em redes corporativas.",
      link: "https://github.com/dozeroaocode",
      type: "github" as const
    },
    {
      id: 3,
      title: "Firewall Customizado",
      description: "Desenvolvimento de firewall personalizado com regras avançadas de filtragem e logging detalhado.",
      link: "https://github.com/dozeroaocode",
      type: "github" as const
    }
  ];

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
              className="hover:text-amber-200 transition-colors font-semibold"
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
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#4E342E]">
            Meus Projetos
          </h1>
          <p className="text-lg md:text-xl text-[#4E342E]/80 max-w-3xl mx-auto">
            Conheça alguns dos projetos e soluções que desenvolvi ao longo da minha carreira
          </p>
        </div>

        {/* Featured Projects Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#4E342E] text-center">
            Projetos em Destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="p-6 border-2 border-[#4E342E]/20 hover:border-[#4E342E]/40 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-[#4E342E] flex-1">
                    {project.title}
                  </h3>
                  {project.type === 'instagram' ? (
                    <Instagram className="w-5 h-5 text-[#4E342E]/60 ml-2" />
                  ) : (
                    <Github className="w-5 h-5 text-[#4E342E]/60 ml-2" />
                  )}
                </div>
                <p className="text-[#4E342E]/80 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#4E342E] hover:text-[#4E342E]/70 font-medium transition-colors"
                >
                  Ver Projeto
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Card>
            ))}
          </div>
        </section>

        {/* GitHub Repositories Section */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#4E342E] text-center">
            Repositórios GitHub
          </h2>
          
          {loading ? (
            <div className="text-center py-12">
              <p className="text-[#4E342E]/80">Carregando repositórios...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo) => (
                <Card key={repo.id} className="p-6 border-2 border-[#4E342E]/20 hover:border-[#4E342E]/40 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-[#4E342E] flex-1">
                      {repo.name}
                    </h3>
                    <Github className="w-5 h-5 text-[#4E342E]/60 ml-2" />
                  </div>
                  <p className="text-[#4E342E]/80 mb-4 text-sm leading-relaxed">
                    {repo.description || "Projeto em desenvolvimento"}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-2 py-1 bg-[#4E342E]/10 text-[#4E342E] rounded">
                      {repo.language || 'Múltiplas linguagens'}
                    </span>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#4E342E] hover:text-[#4E342E]/70 font-medium transition-colors text-sm"
                    >
                      Ver Código
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4 text-[#4E342E]">
            Gostou do que viu?
          </h3>
          <p className="text-lg text-[#4E342E]/80 mb-8">
            Entre em contato para discutirmos seu próximo projeto
          </p>
          <Button 
            onClick={() => navigate('/contato')}
            className="bg-[#4E342E] hover:bg-[#3D2A26] text-[#F5F5DC] px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Me Contrate
          </Button>
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

export default Projetos;
