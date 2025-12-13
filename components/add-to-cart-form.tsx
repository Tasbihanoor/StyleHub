"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useCart } from "@/components/cart-provider"
import { useRouter } from "next/navigation"
import type { Product } from "@/lib/products"
import { ShoppingCart, Check } from "lucide-react"

interface AddToCartFormProps {
  product: Product
}

export function AddToCartForm({ product }: AddToCartFormProps) {
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0] || "")
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()
  const router = useRouter()

  const handleAddToCart = () => {
    if (!selectedSize) {
      return
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      quantity,
      category: product.category,
    })

    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const handleBuyNow = () => {
    if (!selectedSize) {
      return
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      quantity,
      category: product.category,
    })

    router.push("/checkout")
  }

  return (
    <div className="space-y-6">
      {/* Color Selection */}
      <div>
        <Label className="text-base font-semibold mb-3 block">Color: {selectedColor}</Label>
        <div className="flex flex-wrap gap-2">
          {product.colors.map((color) => (
            <Button
              key={color}
              type="button"
              variant={selectedColor === color ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedColor(color)}
            >
              {color}
            </Button>
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div>
        <Label className="text-base font-semibold mb-3 block">Size: {selectedSize || "Select a size"}</Label>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <Button
              key={size}
              type="button"
              variant={selectedSize === size ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </Button>
          ))}
        </div>
        {!selectedSize && <p className="text-sm text-muted-foreground mt-2">Please select a size</p>}
      </div>

      {/* Quantity */}
      <div>
        <Label htmlFor="quantity" className="text-base font-semibold mb-3 block">
          Quantity
        </Label>
        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            disabled={quantity <= 1}
          >
            -
          </Button>
          <span className="w-12 text-center font-medium">{quantity}</span>
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => setQuantity(Math.min(10, quantity + 1))}
            disabled={quantity >= 10}
          >
            +
          </Button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button
          size="lg"
          onClick={handleAddToCart}
          disabled={!selectedSize || !product.inStock}
          className="flex-1 gap-2"
        >
          {added ? (
            <>
              <Check className="w-5 h-5" />
              Added to Cart
            </>
          ) : (
            <>
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </>
          )}
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={handleBuyNow}
          disabled={!selectedSize || !product.inStock}
          className="flex-1 bg-transparent"
        >
          Buy Now
        </Button>
      </div>
    </div>
  )
}
