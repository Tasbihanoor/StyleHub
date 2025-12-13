import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getProductById } from "@/lib/products"
import { ArrowLeft, Check } from "lucide-react"
import { AddToCartForm } from "@/components/add-to-cart-form"
import { notFound } from "next/navigation"

interface ProductPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-foreground">
              StyleHub
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/shop/men" className="text-foreground/80 hover:text-foreground transition-colors">
                Men
              </Link>
              <Link href="/shop/women" className="text-foreground/80 hover:text-foreground transition-colors">
                Women
              </Link>
              <Link href="/shop/kids" className="text-foreground/80 hover:text-foreground transition-colors">
                Kids
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/cart">
                <Button variant="ghost" size="icon">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="ghost">Sign In</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href={`/shop/${product.category}`}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to {product.category.charAt(0).toUpperCase() + product.category.slice(1)}'s Collection
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
            <img
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold mb-4 text-balance">{product.name}</h1>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
              {product.inStock ? (
                <span className="inline-flex items-center gap-1 text-sm text-green-600 dark:text-green-400">
                  <Check className="w-4 h-4" />
                  In Stock
                </span>
              ) : (
                <span className="text-sm text-destructive">Out of Stock</span>
              )}
            </div>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{product.description}</p>

            {/* Add to Cart Form */}
            <AddToCartForm product={product} />

            {/* Product Features */}
            <div className="mt-12 pt-12 border-t border-border space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">Product Details</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent" />
                    Premium quality materials
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent" />
                    Comfortable fit
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent" />
                    Easy care instructions
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent" />
                    Available in multiple sizes
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Shipping & Returns</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Free shipping on orders over $50. 30-day return policy. Please refer to our shipping and returns page
                  for more information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">StyleHub</h3>
              <p className="text-muted-foreground text-sm">Your destination for modern fashion and timeless style.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/shop/men" className="hover:text-foreground transition-colors">
                    Men
                  </Link>
                </li>
                <li>
                  <Link href="/shop/women" className="hover:text-foreground transition-colors">
                    Women
                  </Link>
                </li>
                <li>
                  <Link href="/shop/kids" className="hover:text-foreground transition-colors">
                    Kids
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Returns
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2025 StyleHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
