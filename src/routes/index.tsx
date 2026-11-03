import { createFileRoute } from "@tanstack/react-router";
import {
  Brain,
  Puzzle,
  GraduationCap,
  BookOpen,
  Instagram,
  MessageCircle,
  Mail,
  MapPin,
  Heart,
  Sparkles,
  Compass,
  Briefcase
} from "lucide-react";
import heroImage from "@/assets/hero.png";
import fotoPost1 from "@/assets/post1.jpg";
import fotoPost2 from "@/assets/post2.jpg";
import fotoPost3 from "@/assets/post3.jpg";
import logoImagem from "@/assets/logo.png";
import juliaImage from "@/assets/julia.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  {
    icon: Compass,
    title: "Psicoterapia para Adultos",
    text: "Um espaço seguro de escuta e acolhimento para compreender emoções, fortalecer o autoconhecimento e enfrentar os desafios da vida com mais leveza.",
  },
  {
    icon: Sparkles,
    title: "Psicoterapia Infantil",
    text: "Um cuidado sensível e individualizado, que utiliza o brincar para favorecer o desenvolvimento emocional, comportamental e social da criança.",
  },
  {
    icon: Brain,
    title: "Psicoterapia para Adolescentes",
    text: "Um espaço de confiança e acolhimento para lidar com emoções, autoestima, relacionamentos e os desafios dessa fase da vida.",
  },
  {
    icon: Puzzle,
    title: "Intervenção Comportamental (ABA)",
    text: "Acompanhamento individualizado para desenvolver habilidades, promover autonomia e favorecer a qualidade de vida, respeitando as necessidades de cada pessoa.",
  },
  {
    icon: GraduationCap,
    title: "Visitas Escolares e Domiciliares",
    text: "Acompanhamento e orientação nos ambientes em que a criança está inserida, buscando compreender suas necessidades e favorecer seu desenvolvimento no dia a dia.",
  },
];

const posts = [
  {
    title: "4 sinais de atraso no desenvolvimento",
    excerpt: "Reconheça os sinais e tome medidas: identificando e abordando atrasos no desenvolvimento!",
    tag: "Infantil",
    href: "https://www.instagram.com/p/C3vi7aQpqBt/?img_index=1",
    image: fotoPost1,
  },
  {
    title: "Sabia que somos como ovos?",
    excerpt: "Aumentando nossa resiliência, nos tornamos mais fortes e mais resistentes aos impactos do dia a dia…",
    tag: "Adultos",
    href: "https://www.instagram.com/p/CwgGj3guFgw/?img_index=1",
    image: fotoPost2,
  },
  {
    title: "Batalha de quem sofre mais",
    excerpt: "A dor é singular e sentido de forma única por cada pessoa.A proposta de hoje é substituir a comparação pelo acolhimento do sofrimento e busca por estratégias para lidar com ele..",
    tag: "Adultos",
    href: "https://www.instagram.com/p/CvtDFfbuKEW/?img_index=2",
    image: fotoPost3,
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/50">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center">
            <img
              src={logoImagem}
              alt="Logo da Clínica"
              className="h-12 w-auto object-contain"
            />
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#sobre" className="hover:text-foreground transition">Sobre</a>
            <a href="#servicos" className="hover:text-foreground transition">Serviços</a>
            <a href="#publicacoes" className="hover:text-foreground transition">Publicações</a>
            <a href="#contato" className="hover:text-foreground transition">Contato</a>
          </div>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition shadow-soft"
          >
            Agendar
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft opacity-70 -z-10" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary/60 blur-3xl -z-10" />
        <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-primary/40 blur-3xl -z-10" />

        <div className="max-w-6xl mx-auto px-6 pt-16 pb-12 md:pt-24 md:pb-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5" /> CRP 01/31318
            </span>
            <h1 className="mt-6 text-5xl md:text-6xl leading-[1.05]">
              Cuidado que <span className="italic text-[color:var(--brand-deep)]">acolhe</span>,
              ciência que <span className="italic text-[color:var(--brand-deep)]">transforma</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
              Psicóloga clínica com atuação em ABA e ACT, oferecendo um espaço de escuta, acolhimento e cuidado para crianças, adolescentes, adultos e suas famílias. Um olhar atento a cada história, respeitando a singularidade de cada pessoa e valorizando cada passo do seu desenvolvimento.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/5561998562017?text=Gostaria%20de%20marcar%20uma%20conversa"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition shadow-soft"
              >
                <MessageCircle className="w-4 h-4" /> Conversar no WhatsApp
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:opacity-90 transition"
              >
                Conheça os serviços
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-warm opacity-40 blur-2xl" />
            <img
              src={heroImage}
              alt="Espaço terapêutico acolhedor"
              width={1400}
              height={1600}
              className="relative rounded-[2rem] shadow-card w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="pt-8 pb-16 md:pt-12 md:pb-20 bg-background">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Sobre mim</span>
            <h2 className="mt-3 text-4xl md:text-5xl leading-tight">Acolher, compreender e caminhar junto</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Sou psicóloga clínica (CRP 01/31318), com atuação fundamentada na Análise do Comportamento Aplicada (ABA) e na Terapia de Aceitação e Compromisso (ACT).
              Minha trajetória é marcada pelo cuidado com o desenvolvimento infantil, pelo acompanhamento de pessoas neurodivergentes e pela psicoterapia de crianças, adolescentes e adultos.
              Acredito em uma psicologia que acolhe cada história com sensibilidade, respeita a individualidade e oferece um espaço seguro para o autoconhecimento, o desenvolvimento de habilidades e a construção de uma vida com mais significado.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-sm">
              {[
                "🛋️ Psicoterapia infanto-juvenil e adulta",
                "🧩 Acompanhamento crianças neurodivergentes",
                "👧🏽 ACT",
                "📚 Pós-graduanda em ABA",
              ].map((item) => (
                <li key={item} className="px-4 py-3 rounded-2xl bg-secondary/50 border border-border/60">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="aspect-square rounded-[2rem] shadow-card overflow-hidden relative">
              <img
                src={juliaImage}
                alt="Foto da Psicóloga"
                className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 bg-gradient-soft">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Serviços</span>
            <h2 className="mt-3 text-4xl md:text-5xl leading-tight">Como posso te acompanhar</h2>
            <p className="mt-4 text-muted-foreground">
              Cada atendimento é planejado para respeitar o momento, o ritmo e as necessidades de quem chega — seja na infância, na adolescência ou na fase adulta.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {services.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group p-6 rounded-3xl bg-card border border-border/60 shadow-card hover:-translate-y-1 transition-transform"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-warm flex items-center justify-center mb-5 shadow-soft">
                  <Icon className="w-5 h-5 text-[color:var(--brand-deep)]" strokeWidth={2} />
                </div>
                <h3 className="text-xl mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLICAÇÕES */}
      <section id="publicacoes" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Publicações</span>
              <h2 className="mt-3 text-4xl md:text-5xl leading-tight">Conteúdos do consultório</h2>
            </div>
            <a
              href="https://www.instagram.com/psiju.cv/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition"
            >
              <Instagram className="w-4 h-4" /> Ver tudo no Instagram
            </a>
          </div>

          {/* 
            OPÇÃO DE EMBED MANUAL DO INSTAGRAM 
            Se você for incorporar posts reais do Instagram, remova as barras e o asterisco abaixo e cole os códigos (Iframe/Blockquote) dentro da div.
          */}

          {/*
          <div className="grid md:grid-cols-3 gap-6 mb-12">
             <div dangerouslySetInnerHTML={{ __html: ` COLE O CÓDIGO DO POST 1 AQUI ` }} />
             <div dangerouslySetInnerHTML={{ __html: ` COLE O CÓDIGO DO POST 2 AQUI ` }} />
             <div dangerouslySetInnerHTML={{ __html: ` COLE O CÓDIGO DO POST 3 AQUI ` }} />
          </div>
          */}

          {/* OPÇÃO DE CARDS ATUAIS (Mantida como alternativa visual) */}
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((p) => (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-3xl overflow-hidden border border-border/60 bg-card shadow-card hover:shadow-soft transition flex flex-col"
              >
                {/* PARTE 1: A FOTO COM A TAG E O ÍCONE */}
                <div className="aspect-[4/3] relative flex items-end p-6 overflow-hidden shrink-0">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Película escura */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                  <Instagram className="absolute top-4 right-4 w-5 h-5 text-white drop-shadow-md z-10" />
                  <span className="px-3 py-1 rounded-full bg-background/90 text-xs font-medium backdrop-blur z-10">
                    {p.tag}
                  </span>
                </div>

                {/* PARTE 2: O TEXTO NA PARTE DE BAIXO */}
                <div className="p-6 flex-1 bg-card">
                  <h3 className="text-xl mb-2 group-hover:text-primary transition">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-[2.5rem] bg-gradient-warm p-10 md:p-16 shadow-card">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--brand-deep)]/70">
                  Vamos conversar
                </span>
                <h2 className="mt-3 text-4xl md:text-5xl leading-tight text-[color:var(--brand-deep)]">
                  Dê o primeiro passo, com calma.
                </h2>
                <p className="mt-4 text-[color:var(--brand-deep)]/80 leading-relaxed">
                  Marque uma conversa inicial sem compromisso. Vou te ouvir e juntos vamos entender o melhor caminho.
                </p>
              </div>
              <div className="space-y-3">
                <a
                  href="https://wa.me/5561998562017?text=Gostaria%20de%20marcar%20uma%20conversa"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-background/90 hover:bg-background transition shadow-soft"
                >
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">WhatsApp</div>
                    <div className="text-sm text-muted-foreground">(61) 99856-2017</div>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/psiju.cv/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-background/90 hover:bg-background transition shadow-soft"
                >
                  <Instagram className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">Instagram</div>
                    <div className="text-sm text-muted-foreground">@psiju.cv</div>
                  </div>
                </a>
                <a
                  href="mailto:jucoelhosoares@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-background/90 hover:bg-background transition shadow-soft"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">E-mail</div>
                    <div className="text-sm text-muted-foreground">jucoelhosoares@gmail.com</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-background/90 shadow-soft">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">Atendimento</div>
                    <div className="text-sm text-muted-foreground">Presencial e online</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-border/60">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Psicóloga • CRP 01/31318</div>
          <div>Feito com cuidado ♥</div>
        </div>
      </footer>
    </div>
  );
}