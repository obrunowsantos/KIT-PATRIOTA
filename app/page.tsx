"use client"

import { useState } from "react"
import { Phone, Star, ShoppingCart, Shield, Truck, CreditCard, Check, Minus, Plus } from "lucide-react"

export default function KitPatriotaPage() {
  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)

  const sizes = ["P", "M", "G", "GG", "XG"]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 via-slate-700 to-slate-900 text-white">
      {/* Header Section */}
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-8">
        {/* Logo Header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="flex-shrink-0">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/patriota-nroVG1YT8KiH4ijiGwaeGXKNPyeeNa.png"
              alt="Kit Patriota Logo"
              className="w-16 h-12 sm:w-20 sm:h-16 object-contain"
            />
          </div>
          <div>
            <h1 className="text-yellow-400 font-bold text-xl sm:text-2xl">KIT PATRIOTA</h1>
            <p className="text-green-400 text-sm sm:text-base">BRASIL ACIMA DE TUDO, DEUS A CIMA DE TODOS!</p>
          </div>
        </div>

        {/* Impeachment Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-yellow-400 font-bold text-2xl sm:text-4xl mb-3 sm:mb-4">IMPEACHMENT JÁ!</h2>
          <p className="text-white text-base sm:text-lg mb-2 px-2">
            Ao garantir seu kit, você contribui diretamente para a expansão das manifestações que luta por
          </p>
          <p className="text-white text-base sm:text-lg mb-3 sm:mb-4 px-2">
            um Brasil mais livre, justo e democrático.
          </p>
          <p className="text-yellow-400 font-bold text-lg sm:text-xl">Juntos somos mais fortes.</p>
        </div>

        {/* Main Product Section */}
        <div className="bg-slate-800 rounded-lg p-4 sm:p-8 mb-6 sm:mb-8">
          <h3 className="text-yellow-400 font-bold text-xl sm:text-2xl text-center mb-6 sm:mb-8">
            Kit Patriota 2025 Completo
          </h3>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
            {/* Product Image */}
            <div className="bg-gray-200 rounded-lg p-4 sm:p-6 w-full">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kit-YiKMUi6WkMrPyfoKduLOp9M9Cl4lhu.png"
                alt="Kit Patriota - Camiseta amarela, boné verde, garrafa térmica e bandeira do Brasil"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-4 sm:space-y-6 w-full">
              <div>
                <h4 className="text-yellow-400 font-bold text-xl sm:text-2xl mb-2">KIT PATRIOTA "EU SOU PATRIOTA"</h4>
                <p className="text-red-400 font-bold text-base sm:text-lg mb-3 sm:mb-4">A REVOLTA GANHOU ROSTO! 🔥</p>
                <p className="text-gray-300 text-sm sm:text-base">
                  Mostre de que lado você está. O Brasil não vai mais se calar.
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-400 text-sm sm:text-base">(572 avaliações)</span>
              </div>

              {/* Pricing */}
              <div className="bg-slate-700 rounded-lg p-3 sm:p-4 border-2 border-green-500">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-yellow-400 text-2xl sm:text-3xl font-bold">R$ 49,90</span>
                  <div className="text-right">
                    <div className="text-gray-400 line-through text-base sm:text-lg">R$ 134,03</div>
                    <div className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                      33% OFF
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <CreditCard className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">ou até 3x de R$ 16,63 sem juros</span>
                </div>
              </div>

              {/* Attention Notice */}
              <div className="bg-slate-700 rounded-lg p-3 sm:p-4">
                <h5 className="text-yellow-400 font-bold mb-2 text-sm sm:text-base">Atenção:</h5>
                <p className="text-green-400 text-xs sm:text-sm">
                  Alguns estados podem exigir a emissão de nota fiscal. Caso seja necessário, você receberá um e-mail ou
                  SMS com as instruções.
                </p>
              </div>

              {/* What's in the Kit */}
              <div className="bg-slate-700 rounded-lg p-3 sm:p-4">
                <h5 className="text-yellow-400 font-bold mb-3 text-sm sm:text-base">🎁 O que vem no kit:</h5>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">1x Camiseta "EU SOU PATRIOTA" (100% algodão)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">1x Boné exclusivo bordado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">1x Garrafinha térmica (500ml)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">1x Bandeira do Brasil (1,5m de largura)</span>
                  </div>
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h5 className="text-yellow-400 font-bold mb-3 text-sm sm:text-base">
                  Tamanho da Camiseta: <span className="text-red-400">*</span>
                </h5>
                <div className="flex gap-2 sm:gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 font-bold text-sm sm:text-base ${
                        selectedSize === size
                          ? "bg-green-500 border-green-500 text-white"
                          : "bg-slate-600 border-slate-500 text-gray-300"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h5 className="text-yellow-400 font-bold mb-3 text-sm sm:text-base">Quantidade:</h5>
                <div className="flex items-center gap-3 sm:gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-600 rounded-lg flex items-center justify-center hover:bg-slate-500"
                  >
                    <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <span className="text-yellow-400 text-lg sm:text-xl font-bold min-w-[2rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-600 rounded-lg flex items-center justify-center hover:bg-slate-500"
                  >
                    <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>

              {/* Purchase Button */}
              <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg flex items-center justify-center gap-2 text-base sm:text-lg transition-colors">
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                COMPRAR AGORA - R$ 49,90
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-center mb-8 sm:mb-12">
          <div className="flex flex-col items-center">
            <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-green-400 mb-2 sm:mb-3" />
            <div className="text-base sm:text-lg font-semibold">Compra Segura</div>
            <div className="text-xs sm:text-sm text-gray-400">SSL Certificado</div>
          </div>
          <div className="flex flex-col items-center">
            <Truck className="w-10 h-10 sm:w-12 sm:h-12 text-green-400 mb-2 sm:mb-3" />
            <div className="text-base sm:text-lg font-semibold">Frete Grátis</div>
            <div className="text-xs sm:text-sm text-gray-400">Todo o Brasil</div>
          </div>
          <div className="flex flex-col items-center">
            <CreditCard className="w-10 h-10 sm:w-12 sm:h-12 text-green-400 mb-2 sm:mb-3" />
            <div className="text-base sm:text-lg font-semibold">12x sem juros</div>
            <div className="text-xs sm:text-sm text-gray-400">No cartão</div>
          </div>
        </div>

        {/* Brazil Message */}
        <div className="bg-gradient-to-r from-yellow-600 to-green-600 rounded-lg p-4 sm:p-6 text-center mb-8 sm:mb-12">
          <h3 className="text-yellow-200 font-bold text-lg sm:text-2xl mb-2 sm:mb-3">
            Não é mais sobre política. É sobre o Brasil.
          </h3>
          <p className="text-white text-sm sm:text-lg">
            Todo valor arrecadado financia as manifestações nacionais (estrutura, som, transporte, divulgação)
          </p>
        </div>

        {/* Customer Reviews */}
        <div className="bg-slate-800 rounded-lg p-4 sm:p-8 mb-8 sm:mb-12">
          <h3 className="text-yellow-400 font-bold text-xl sm:text-2xl mb-4 sm:mb-6">Avaliações dos Clientes</h3>

          <div className="space-y-4 sm:space-y-6">
            <div className="border-b border-slate-600 pb-4 sm:pb-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-base sm:text-lg">João Silva</span>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                Produto de excelente qualidade! A camiseta é muito confortável e a mensagem é clara. Recomendo!
              </p>
            </div>

            <div className="border-b border-slate-600 pb-4 sm:pb-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-base sm:text-lg">Maria Santos</span>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                Chegou rapidinho! Tudo conforme anunciado. A bandeira é linda e de ótima qualidade.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-base sm:text-lg">Carlos Oliveira</span>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                Kit completo e bem embalado. Estou usando com orgulho! Brasil acima de tudo!
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center">
          <div className="mb-4 sm:mb-6">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/patriota-nroVG1YT8KiH4ijiGwaeGXKNPyeeNa.png"
              alt="Kit Patriota Logo"
              className="w-16 h-12 sm:w-20 sm:h-16 object-contain mx-auto"
            />
          </div>

          <h3 className="text-yellow-400 font-bold text-lg sm:text-xl mb-3 sm:mb-4">Contato</h3>

          <div className="space-y-2 mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-2">
              <span>📧</span>
              <span className="text-gray-300 text-xs sm:text-base break-all">
                suporte@kit-patriota.somospatriota.com
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span>🕐</span>
              <span className="text-gray-300 text-xs sm:text-base">Seg. à Sáb. das 10h às 19h</span>
            </div>
          </div>

          <h3 className="text-yellow-400 font-bold text-lg sm:text-xl mb-3 sm:mb-4">Redes Sociais</h3>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-2">
              <span>📘</span>
              <span className="text-gray-300 text-sm sm:text-base">Facebook</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span>📷</span>
              <span className="text-gray-300 text-sm sm:text-base">Instagram</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span>🐦</span>
              <span className="text-gray-300 text-sm sm:text-base">Twitter</span>
            </div>
          </div>

          <div className="text-gray-400 text-xs sm:text-base px-4">
            © 2025 Loja Oficial do Kit Patriota. Todos os direitos reservados.
          </div>
        </footer>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6">
        <button className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg transition-colors">
          <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  )
}
