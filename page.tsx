"use client"

import { motion } from "framer-motion"
import { ShoppingBag, Sparkles, Zap, Play, Download, Star, MessageCircle, Phone } from "lucide-react"

const products = [
  {
    id: 1,
    title: "TikTok Live Effects Pack",
    description: "50+ premium live effects for viral streams",
    price: "$29.99",
    category: "Effects",
    rating: 4.9,
    sales: "2.3K",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=300&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Battle Animations Bundle",
    description: "Epic gaming battle transitions & alerts",
    price: "$39.99",
    category: "Animations",
    rating: 4.8,
    sales: "1.8K",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
    featured: true,
  },
  {
    id: 3,
    title: "Stream Transitions Pro",
    description: "Smooth cinematic scene transitions",
    price: "$24.99",
    category: "Transitions",
    rating: 5.0,
    sales: "3.1K",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
    featured: false,
  },
  {
    id: 4,
    title: "Intro Videos Collection",
    description: "Professional gaming intro templates",
    price: "$49.99",
    category: "Videos",
    rating: 4.7,
    sales: "1.2K",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=300&fit=crop",
    featured: false,
  },
  {
    id: 5,
    title: "Overlay Packs Ultimate",
    description: "Complete streaming overlay bundle",
    price: "$34.99",
    category: "Overlays",
    rating: 4.9,
    sales: "4.5K",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=300&fit=crop",
    featured: true,
  },
  {
    id: 6,
    title: "Alert Sounds Pro",
    description: "Premium notification sound effects",
    price: "$19.99",
    category: "Audio",
    rating: 4.6,
    sales: "2.1K",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop",
    featured: false,
  },
]

const reviews = [
  {
    id: 1,
    name: "Alex Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "These overlays completely transformed my stream! The quality is insane and my viewers love the new look.",
    role: "Twitch Partner",
  },
  {
    id: 2,
    name: "Sarah Gaming",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Best investment I made for my streaming career. The transitions are so smooth and professional.",
    role: "Content Creator",
  },
  {
    id: 3,
    name: "Mike Streams",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Stream Empire has everything you need. Fast delivery, amazing quality, and great customer support!",
    role: "YouTube Gaming",
  },
]

const categories = [
  { name: "TikTok Live Effects", icon: Sparkles, count: "120+" },
  { name: "Battle Animations", icon: Zap, count: "85+" },
  { name: "Stream Transitions", icon: Play, count: "200+" },
  { name: "Intro Videos", icon: Play, count: "150+" },
  { name: "Overlay Packs", icon: ShoppingBag, count: "300+" },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center neon-glow-sm">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Stream Empire</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-6"
          >
            <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">Products</a>
            <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">Reviews</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium neon-glow-sm hover:bg-primary/90 transition-all"
          >
            <ShoppingBag className="w-4 h-4 inline mr-2" />
            Shop Now
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/20" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/30 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/30 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Premium Gaming Assets</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
              <span className="neon-text">STREAM</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                EMPIRE
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Level up your streaming game with premium TikTok Live effects, battle animations, 
              stream transitions, and overlay packs designed for champions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px oklch(0.65 0.3 285 / 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg neon-glow transition-all flex items-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                Shop Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl glass-card font-bold text-lg text-foreground hover:bg-secondary/50 transition-all flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                Watch Preview
              </motion.button>
            </div>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mt-16"
          >
            {[
              { value: "50K+", label: "Happy Streamers" },
              { value: "1000+", label: "Premium Assets" },
              { value: "4.9", label: "Average Rating" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="glass-card rounded-xl p-4 md:p-6"
              >
                <div className="text-2xl md:text-4xl font-bold text-primary neon-text">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Browse <span className="text-primary neon-text">Categories</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Find the perfect assets to elevate your streaming experience
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card rounded-xl p-6 text-center cursor-pointer group hover:neon-glow-sm transition-all"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{category.name}</h3>
                <span className="text-xs text-muted-foreground">{category.count} items</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Trending <span className="text-primary neon-text">Products</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The most popular assets loved by thousands of streamers
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card rounded-2xl overflow-hidden group"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  {product.featured && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                      Featured
                    </span>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-3 right-3 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Play className="w-5 h-5 text-foreground" />
                  </motion.button>
                </div>
                
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-primary font-medium">{product.category}</span>
                    <span className="text-muted-foreground">•</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-xs text-muted-foreground">{product.rating}</span>
                    </div>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{product.sales} sales</span>
                  </div>
                  
                  <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm flex items-center gap-2 hover:bg-primary/90 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Get Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              What <span className="text-primary neon-text">Streamers</span> Say
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Join thousands of satisfied content creators
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                  />
                  <div>
                    <h4 className="font-bold text-foreground">{review.name}</h4>
                    <span className="text-xs text-muted-foreground">{review.role}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">{review.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20" />
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring" }}
                className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary flex items-center justify-center neon-glow"
              >
                <Zap className="w-8 h-8 text-primary-foreground" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to <span className="text-primary neon-text">Level Up</span>?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Join over 50,000 streamers who have transformed their content with Stream Empire assets.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px oklch(0.65 0.3 285 / 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg neon-glow transition-all"
              >
                Start Shopping
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Stream Empire</span>
            </div>
            
            <div className="flex items-center gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:neon-glow-sm transition-all"
              >
                <MessageCircle className="w-5 h-5 text-foreground" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:neon-glow-sm transition-all"
              >
                <Phone className="w-5 h-5 text-foreground" />
              </motion.a>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © 2026 Stream Empire. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
