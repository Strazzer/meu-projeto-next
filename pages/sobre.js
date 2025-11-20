import Link from 'next/link'

export default function Sobre() {
  return (
    <div>
      <h1>Sobre esta aplicação</h1>
      <p>Esta é uma loja de ebooks digitais onde você pode encontrar milhares de títulos para ler onde e quando quiser. Nosso objetivo é facilitar o acesso à leitura digital, oferecendo uma plataforma moderna e fácil de usar.</p>
      <p><Link href="/">Voltar para a Home</Link></p>
    </div>
  )
}

