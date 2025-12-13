"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { User, Package, MapPin, CreditCard, LogOut, Settings } from "lucide-react"
import { useRouter } from "next/navigation"

const mockOrders = [
  {
    id: "ORD-ABC123",
    date: "Jan 15, 2025",
    total: 159.99,
    status: "Delivered",
    items: [
      { name: "Classic Denim Jacket", quantity: 1, image: "/men-denim-jacket.jpg" },
      { name: "Slim Fit Chinos", quantity: 2, image: "/men-chino-pants-beige.jpg" },
    ],
  },
  {
    id: "ORD-DEF456",
    date: "Jan 8, 2025",
    total: 89.99,
    status: "Shipped",
    items: [{ name: "Floral Summer Dress", quantity: 1, image: "/women-floral-dress.jpg" }],
  },
  {
    id: "ORD-GHI789",
    date: "Dec 28, 2024",
    total: 219.98,
    status: "Delivered",
    items: [
      { name: "Leather Sneakers", quantity: 1, image: "/men-white-leather-sneakers.jpg" },
      { name: "Cashmere Sweater", quantity: 1, image: "/women-beige-cashmere-sweater.jpg" },
    ],
  },
]

export default function ProfilePage() {
  const router = useRouter()

  const handleLogout = () => {
    router.push("/login")
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
              <Link href="/profile">
                <Button variant="ghost" size="icon">
                  <User className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Profile Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarFallback className="text-2xl bg-accent text-accent-foreground">JD</AvatarFallback>
                  </Avatar>
                  <h2 className="font-bold text-xl">John Doe</h2>
                  <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                </div>

                <nav className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <User className="w-4 h-4" />
                    Profile Info
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <Package className="w-4 h-4" />
                    Orders
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <MapPin className="w-4 h-4" />
                    Addresses
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <CreditCard className="w-4 h-4" />
                    Payment Methods
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <Settings className="w-4 h-4" />
                    Settings
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-2 text-destructive"
                    onClick={handleLogout}
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Account Overview */}
            <div>
              <h1 className="text-3xl font-bold mb-6">My Account</h1>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <p className="text-3xl font-bold text-accent mb-2">{mockOrders.length}</p>
                    <p className="text-sm text-muted-foreground">Total Orders</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <p className="text-3xl font-bold text-accent mb-2">
                      ${mockOrders.reduce((sum, order) => sum + order.total, 0).toFixed(2)}
                    </p>
                    <p className="text-sm text-muted-foreground">Total Spent</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <p className="text-3xl font-bold text-accent mb-2">1</p>
                    <p className="text-sm text-muted-foreground">Active Orders</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Order History */}
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>View and track your recent orders</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {mockOrders.map((order) => (
                    <div key={order.id} className="border border-border rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="font-semibold text-lg">{order.id}</p>
                          <p className="text-sm text-muted-foreground">{order.date}</p>
                        </div>
                        <Badge
                          variant={order.status === "Delivered" ? "default" : "secondary"}
                          className={
                            order.status === "Delivered"
                              ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                              : ""
                          }
                        >
                          {order.status}
                        </Badge>
                      </div>

                      <div className="space-y-3 mb-4">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-4">
                            <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                              <img
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className="font-semibold">Total: ${order.total.toFixed(2)}</span>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          {order.status === "Shipped" && (
                            <Button size="sm" variant="outline">
                              Track Order
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Saved Addresses */}
            <Card>
              <CardHeader>
                <CardTitle>Saved Addresses</CardTitle>
                <CardDescription>Manage your shipping addresses</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary">Default</Badge>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                    <p className="font-semibold mb-1">Home</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      123 Main Street
                      <br />
                      New York, NY 10001
                      <br />
                      United States
                    </p>
                  </div>

                  <button className="border-2 border-dashed border-border rounded-lg p-4 hover:border-accent transition-colors flex items-center justify-center text-muted-foreground hover:text-foreground">
                    <div className="text-center">
                      <p className="font-medium">Add New Address</p>
                    </div>
                  </button>
                </div>
              </CardContent>
            </Card>
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
