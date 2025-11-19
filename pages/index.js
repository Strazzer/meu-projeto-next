import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Bem-vindo ao meu app Next.js</h1>
      <p>Esta é a página inicial da minha aplicação Next.js. Aqui você pode encontrar informações sobre o projeto e navegar para outras páginas.</p>
      <p><Link href="/sobre">Sobre</Link></p>
    </div>
  )
}
