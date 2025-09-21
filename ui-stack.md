# UI Theme Guide - Focus On The Detail

## Overview

This comprehensive guide documents the UI theme and design system used in the Focus On The Detail website, adapted with a **Green/Blue/Black** color scheme. The theme features modern glassmorphism effects, smooth animations, and a professional automotive aesthetic.

## Technology Stack

- **Framework**: Next.js 15.4.3 with React 19
- **Styling**: Tailwind CSS v4 with custom CSS variables
- **Animations**: Framer Motion 12.23.7
- **Components**: Radix UI primitives with custom styling
- **Icons**: Lucide React
- **Additional**: tw-animate-css for enhanced animations

## Color Scheme (Green/Blue/Black)

### CSS Variables Configuration

```css
:root {
  --radius: 0.625rem;
  --background: oklch(0.05 0 0); /* Deep black */
  --foreground: oklch(0.95 0.02 180); /* Light blue-white */
  --card: oklch(0.08 0.01 180); /* Dark blue-black */
  --card-foreground: oklch(0.95 0.02 180);
  --popover: oklch(0.08 0.01 180);
  --popover-foreground: oklch(0.95 0.02 180);
  --primary: oklch(0.6 0.15 150); /* Emerald green */
  --primary-foreground: oklch(0.98 0.01 180);
  --secondary: oklch(0.15 0.02 210); /* Dark blue */
  --secondary-foreground: oklch(0.95 0.02 180);
  --muted: oklch(0.12 0.02 210);
  --muted-foreground: oklch(0.65 0.05 200);
  --accent: oklch(0.55 0.12 200); /* Blue accent */
  --accent-foreground: oklch(0.98 0.01 180);
  --destructive: oklch(0.6 0.2 20); /* Keep red for warnings */
  --border: oklch(0.2 0.02 210);
  --input: oklch(0.18 0.02 210);
  --ring: oklch(0.6 0.15 150); /* Green focus ring */
}

.dark {
  --background: oklch(0.03 0 0); /* Deeper black */
  --foreground: oklch(0.98 0.01 180);
  --card: oklch(0.06 0.01 210);
  --card-foreground: oklch(0.98 0.01 180);
  --popover: oklch(0.06 0.01 210);
  --popover-foreground: oklch(0.98 0.01 180);
  --primary: oklch(0.65 0.18 150); /* Brighter green for dark mode */
  --primary-foreground: oklch(0.02 0 0);
  --secondary: oklch(0.12 0.02 210);
  --secondary-foreground: oklch(0.98 0.01 180);
  --muted: oklch(0.1 0.02 210);
  --muted-foreground: oklch(0.7 0.05 200);
  --accent: oklch(0.6 0.15 200); /* Brighter blue accent */
  --accent-foreground: oklch(0.98 0.01 180);
  --border: oklch(0.15 0.02 210);
  --input: oklch(0.15 0.02 210);
  --ring: oklch(0.65 0.18 150);
}
```

### Custom Gradient Utilities

```css
@layer utilities {
  .bg-green-gradient {
    background: linear-gradient(135deg, oklch(0.6 0.15 150) 0%, oklch(0.55 0.12 160) 100%);
  }
  
  .bg-blue-gradient {
    background: linear-gradient(135deg, oklch(0.55 0.12 200) 0%, oklch(0.5 0.1 220) 100%);
  }
  
  .text-green-gradient {
    background: linear-gradient(135deg, oklch(0.6 0.15 150) 0%, oklch(0.55 0.12 160) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .text-blue-gradient {
    background: linear-gradient(135deg, oklch(0.55 0.12 200) 0%, oklch(0.5 0.1 220) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}
```

## Glassmorphism Effects

### Core Glassmorphism Classes

```css
@layer utilities {
  .glassmorphism {
    backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(0, 20, 40, 0.75); /* Dark blue tint */
    border: 1px solid rgba(100, 255, 200, 0.2); /* Green border */
  }
  
  .glassmorphism-dark {
    backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(5, 15, 25, 0.85); /* Deeper blue-black */
    border: 1px solid rgba(100, 255, 200, 0.15);
  }
  
  .glassmorphism-header {
    backdrop-filter: blur(12px) saturate(150%);
    background-color: rgba(0, 10, 20, 0.8);
    border-bottom: 1px solid rgba(100, 255, 200, 0.1);
  }
  
  .glassmorphism-card {
    backdrop-filter: blur(20px) saturate(200%);
    background-color: rgba(0, 15, 30, 0.6);
    border: 1px solid rgba(100, 255, 200, 0.25);
    box-shadow: 0 8px 32px rgba(0, 50, 100, 0.3);
  }
}
```

### Usage Examples

```jsx
// Header with glassmorphism
<header className="glassmorphism-header fixed top-0 w-full z-50">
  {/* Header content */}
</header>

// Card with glassmorphism
<div className="glassmorphism-card rounded-xl p-6">
  {/* Card content */}
</div>

// Popup with glassmorphism
<div className="glassmorphism rounded-lg backdrop-blur-xl">
  {/* Popup content */}
</div>
```

## Background Animations

### Background Animation Component

The `BackgroundAnimation` component provides three animated background variants:

```typescript
interface BackgroundAnimationProps {
  variant?: 'dots' | 'grid' | 'bubbles';
  intensity?: 'subtle' | 'medium' | 'strong';
}
```

#### Variant: Dots (Floating Particles)

```jsx
// Green/blue floating dots
<BackgroundAnimation variant="dots" intensity="subtle" />
```

**Styling for green/blue theme:**
```css
.bg-green-500 { background-color: oklch(0.6 0.15 150); }
.bg-blue-500 { background-color: oklch(0.55 0.12 200); }
```

#### Variant: Grid (Animated Grid Lines)

```jsx
// Animated grid background
<BackgroundAnimation variant="grid" intensity="medium" />
```

**Grid styling with green/blue accents:**
```css
.grid-green {
  background-image: 
    linear-gradient(rgba(100, 255, 200, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(100, 255, 200, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}

.grid-blue {
  background-image: 
    linear-gradient(rgba(100, 200, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(100, 200, 255, 0.02) 1px, transparent 1px);
  background-size: 120px 120px;
}
```

#### Variant: Bubbles (Floating Circles)

```jsx
// Floating bubble animation
<BackgroundAnimation variant="bubbles" intensity="strong" />
```

## Header Component

### Structure and Styling

```jsx
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glassmorphism-dark' 
          : 'bg-black/70 backdrop-blur-md border-b border-green-500/10'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header content */}
    </motion.header>
  );
};
```

### Navigation Menu with Green/Blue Theme

```jsx
<NavigationMenu className="hidden lg:flex">
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger className="text-foreground hover:text-green-400">
        <Shield className="h-4 w-4 mr-2" />
        Services
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="w-96 p-4 glassmorphism-card">
          {/* Menu content */}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

### Call-to-Action Buttons

```jsx
// Primary CTA (Green)
<Button className="bg-green-gradient hover:opacity-90 text-white">
  <Phone className="h-4 w-4 mr-2" />
  Call Now
</Button>

// Secondary CTA (Blue outline)
<Button 
  variant="outline" 
  className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white"
>
  Get Quote
</Button>
```

## Hero Section

### Video Background with Overlay

```jsx
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Video Background */}
  <div className="absolute inset-0 z-0">
    <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
      <source src="/hero-video.mp4" type="video/mp4" />
    </video>
    {/* Green/Blue Gradient Overlay */}
    <div className="absolute inset-0 bg-black/60" />
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-green-900/20 to-blue-900/40" />
  </div>
  
  {/* Hero Content */}
  <div className="container mx-auto px-4 relative z-10">
    <motion.div
      className="text-center max-w-5xl mx-auto text-white"
      initial="initial"
      animate="animate"
      variants={staggerChildren}
    >
      <motion.h1 variants={fadeInUp} className="text-4xl md:text-8xl font-bold mb-6">
        Professional{' '}
        <span className="text-green-gradient">Auto Care</span>{' '}
        Solutions
      </motion.h1>
    </motion.div>
  </div>
</section>
```

### Badge Components

```jsx
<Badge variant="outline" className="mb-4 text-green-400 border-green-400/50 bg-black/30 backdrop-blur-sm">
  <Truck className="h-3 w-3 mr-1" />
  Mobile Service Available
</Badge>
```

## Card Components

### Glassmorphism Cards

```jsx
<Card className="glassmorphism-card border-0 text-white hover:bg-black/60 transition-all duration-300">
  <CardHeader className="pb-4">
    <div className="w-16 h-16 bg-green-gradient rounded-xl flex items-center justify-center mb-4">
      <Shield className="h-8 w-8 text-white" />
    </div>
    <CardTitle className="text-2xl mb-2 text-white">Service Title</CardTitle>
    <CardDescription className="text-gray-300">Service description</CardDescription>
  </CardHeader>
  <CardContent>
    <Button variant="outline" className="w-full border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white">
      Learn More
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  </CardContent>
</Card>
```

### Service Cards with Gradient Backgrounds

```jsx
const services = [
  {
    icon: Shield,
    title: "Protection Services",
    gradient: "from-green-500 to-green-600"
  },
  {
    icon: Sparkles,
    title: "Detailing Services", 
    gradient: "from-blue-500 to-blue-600"
  }
];

{services.map((service, index) => (
  <Card key={index} className="glassmorphism-card">
    <CardHeader>
      <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-4`}>
        <service.icon className="h-8 w-8 text-white" />
      </div>
    </CardHeader>
  </Card>
))}
```

## Button Variants

### Green/Blue Button System

```jsx
// Primary Green Button
<Button className="bg-green-gradient hover:opacity-90 text-white shadow-lg">
  Primary Action
</Button>

// Secondary Blue Button
<Button className="bg-blue-gradient hover:opacity-90 text-white shadow-lg">
  Secondary Action
</Button>

// Outline Green Button
<Button 
  variant="outline" 
  className="border-green-500 text-green-400 hover:bg-green-600 hover:text-white"
>
  Outline Green
</Button>

// Outline Blue Button
<Button 
  variant="outline" 
  className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white"
>
  Outline Blue
</Button>

// Ghost Button
<Button 
  variant="ghost" 
  className="text-green-400 hover:bg-green-500/10 hover:text-green-300"
>
  Ghost Button
</Button>
```

## Animation Patterns

### Framer Motion Variants

```jsx
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
};

const floatingAnimation = {
  animate: { y: [-10, 10, -10] },
  transition: { duration: 4, repeat: Infinity }
};
```

### Logo Animation

```jsx
<motion.h1 
  className="text-xl font-bold text-foreground tracking-wide"
  animate={{ 
    opacity: [0.7, 1, 0.7],
    letterSpacing: ["0.02em", "0.06em", "0.02em"]
  }}
  transition={{ 
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  COMPANY NAME
</motion.h1>
```

### Icon Rotation Animation

```jsx
<motion.div
  className="w-16 h-16 bg-green-gradient rounded-full flex items-center justify-center"
  animate={{ 
    rotate: [0, 10, -10, 0],
    scale: [1, 1.05, 1] 
  }}
  transition={{ 
    duration: 2,
    repeat: Infinity,
    repeatType: "loop"
  }}
>
  <Car className="w-full h-full object-contain" />
</motion.div>
```

## Footer Component

### Gradient Footer with Background Animation

```jsx
<footer className="relative bg-gradient-to-b from-gray-900 to-black overflow-hidden">
  {/* Grid Animation Background */}
  <BackgroundAnimation variant="grid" intensity="subtle" />
  <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 via-transparent to-blue-600/10" />
  
  <div className="container mx-auto px-4 py-12 relative z-10">
    {/* Footer content with green/blue accents */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="space-y-4">
        <div className="w-8 h-8 bg-green-gradient rounded-lg flex items-center justify-center">
          <Car className="h-5 w-5 text-white" />
        </div>
        {/* Company info */}
      </div>
    </div>
  </div>
</footer>
```

## Form Components

### Glassmorphism Form Styling

```jsx
<Card className="glassmorphism-card border-0">
  <CardHeader>
    <CardTitle className="text-2xl text-white text-center">Contact Form</CardTitle>
  </CardHeader>
  <CardContent className="space-y-6">
    <form className="grid md:grid-cols-2 gap-4">
      <div>
        <label className="text-sm font-medium mb-2 block text-white">Name</label>
        <Input 
          className="bg-black/50 border-green-600/30 text-white placeholder:text-gray-400 focus:border-green-500" 
          placeholder="Your name"
        />
      </div>
      
      <Select>
        <SelectTrigger className="bg-black/50 border-blue-600/30 text-white focus:border-blue-500">
          <SelectValue placeholder="Select service" />
        </SelectTrigger>
        <SelectContent className="bg-black/90 border-gray-600">
          <SelectItem value="service1">Service Option 1</SelectItem>
        </SelectContent>
      </Select>
      
      <Button className="w-full bg-green-gradient hover:opacity-90 text-lg py-3" type="submit">
        Submit Form
      </Button>
    </form>
  </CardContent>
</Card>
```

## Quote Popup Component

### Animated Modal with Glassmorphism

```jsx
<AnimatePresence>
  {isVisible && (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      
      {/* Popup */}
      <motion.div
        className="fixed inset-0 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{ 
          type: "spring",
          damping: 25,
          stiffness: 200,
          duration: 0.6 
        }}
      >
        <Card className="glassmorphism-card w-full max-w-md shadow-2xl relative overflow-hidden">
          {/* Animated progress bar */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-green-gradient"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          <CardContent className="p-6">
            <Button className="w-full bg-green-gradient hover:opacity-90">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white"
            >
              Get Quote
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </>
  )}
</AnimatePresence>
```

## Trust Signals & Stats

### Animated Statistics Cards

```jsx
const trustSignals = [
  { icon: Star, value: "5.0", label: "Rating", sublabel: "Google Reviews", color: "green" },
  { icon: Shield, value: "100%", label: "Guarantee", sublabel: "Satisfaction", color: "blue" },
  { icon: Users, value: "500+", label: "Customers", sublabel: "Served", color: "green" },
  { icon: Award, value: "3 Year", label: "Warranty", sublabel: "Protection", color: "blue" }
];

<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
  {trustSignals.map((signal, index) => (
    <motion.div key={index} variants={fadeInUp} className="text-center">
      <div className={`w-16 h-16 ${signal.color === 'green' ? 'bg-green-gradient' : 'bg-blue-gradient'} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
        <signal.icon className="h-8 w-8 text-white" />
      </div>
      <div className="text-3xl font-bold text-white mb-2">{signal.value}</div>
      <div className="font-medium text-gray-200">{signal.label}</div>
      <div className="text-sm text-gray-400">{signal.sublabel}</div>
    </motion.div>
  ))}
</div>
```

## Responsive Design

### Mobile-First Breakpoints

```jsx
// Mobile menu with glassmorphism
<SheetContent side="right" className="w-80 glassmorphism-dark text-white border-l border-green-500/20">
  <div className="flex flex-col space-y-5 mt-6">
    <div className="text-center border-b border-green-500/20 pb-4">
      <motion.div className="text-lg font-bold tracking-wider">
        COMPANY NAME
      </motion.div>
    </div>
    
    {/* Mobile navigation items */}
    <Link className="flex items-center text-[17px] font-medium hover:text-green-400">
      <Shield className="h-5 w-5 mr-3" />
      Services
    </Link>
  </div>
</SheetContent>
```

### Responsive Grid Layouts

```jsx
// Hero section responsive text
<h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6">
  Responsive{' '}
  <span className="text-green-gradient">Heading</span>
</h1>

// Responsive service grid
<div className="grid lg:grid-cols-3 gap-8">
  {services.map((service, index) => (
    <Card key={index} className="glassmorphism-card">
      {/* Service content */}
    </Card>
  ))}
</div>

// Responsive stats grid
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
  {stats.map((stat, index) => (
    <div key={index} className="text-center">
      {/* Stat content */}
    </div>
  ))}
</div>
```

## Package.json Dependencies

```json
{
  "dependencies": {
    "@radix-ui/react-dialog": "^1.1.14",
    "@radix-ui/react-navigation-menu": "^1.2.13",
    "@radix-ui/react-select": "^2.2.5",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slot": "^1.2.3",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "framer-motion": "^12.23.7",
    "lucide-react": "^0.525.0",
    "next": "15.4.3",
    "next-themes": "^0.4.6",
    "react": "19.1.0",
    "tailwind-merge": "^3.3.1"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "tailwindcss": "^4",
    "tw-animate-css": "^1.3.5"
  }
}
```

## Implementation Checklist

### Setup Steps

1. **Install Dependencies**
   ```bash
   npm install framer-motion lucide-react @radix-ui/react-dialog @radix-ui/react-navigation-menu class-variance-authority clsx tailwind-merge
   ```

2. **Configure Tailwind CSS v4**
   - Add CSS variables to `globals.css`
   - Configure custom utilities for glassmorphism
   - Set up gradient utilities

3. **Component Structure**
   - Create `BackgroundAnimation` component
   - Set up Radix UI components with custom styling
   - Implement Framer Motion animations

4. **Color Theme Integration**
   - Replace all red references with green/blue variants
   - Update gradient classes
   - Modify hover states and focus rings

### Key Features to Implement

- ✅ Glassmorphism effects with backdrop-filter
- ✅ Smooth Framer Motion animations
- ✅ Responsive navigation with mobile menu
- ✅ Background animation variants (dots, grid, bubbles)
- ✅ Green/blue gradient system
- ✅ Form components with glassmorphism styling
- ✅ Trust signals and statistics animations
- ✅ Video background with gradient overlays
- ✅ Quote popup with spring animations

This theme guide provides a complete foundation for replicating the professional automotive website aesthetic with the requested green/blue/black color scheme while maintaining all the modern UI features including glassmorphism, animations, and responsive design.
