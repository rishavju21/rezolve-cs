import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Sparkles, 
  MessageSquare, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Clock, 
  CheckCircle2,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Star,
  Bot,
  Headphones,
  TrendingUp
} from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-purple-500">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">Rezolve</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" onClick={() => navigate('/auth')}>
                Login
              </Button>
              <Button onClick={() => navigate('/auth?mode=signup')}>
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
              <Sparkles className="h-4 w-4" />
              AI-Powered Customer Support
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in">
              Resolve customer queries{' '}
              <span className="gradient-text">10x faster</span> with AI
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in">
              Unify all your customer conversations in one inbox. Let AI suggest replies, 
              automate workflows, and help your team deliver exceptional support.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
              <Button size="lg" className="text-lg px-8 py-6" onClick={() => navigate('/auth?mode=signup')}>
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => scrollToSection('about')}>
                See How It Works
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 mt-12 text-sm text-muted-foreground animate-fade-in">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Dashboard Preview */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
            <div className="rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
              <div className="bg-muted/50 px-4 py-3 border-b border-border flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="p-8 bg-gradient-to-br from-muted/30 to-muted/10">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-1 space-y-4">
                    <div className="h-12 bg-muted/50 rounded-lg animate-pulse" />
                    <div className="h-20 bg-muted/30 rounded-lg" />
                    <div className="h-20 bg-primary/20 rounded-lg border-2 border-primary/30" />
                    <div className="h-20 bg-muted/30 rounded-lg" />
                  </div>
                  <div className="col-span-2 bg-card rounded-lg p-6 border border-border">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-primary/20" />
                      <div className="space-y-2">
                        <div className="h-4 w-32 bg-muted/50 rounded" />
                        <div className="h-3 w-24 bg-muted/30 rounded" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-16 bg-muted/30 rounded-lg w-3/4" />
                      <div className="h-16 bg-primary/10 rounded-lg w-3/4 ml-auto border border-primary/20" />
                    </div>
                    <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-primary">AI Suggested Reply</span>
                      </div>
                      <div className="h-12 bg-muted/30 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 border-y border-border bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10x', label: 'Faster Response Time' },
              { value: '85%', label: 'Tickets Auto-Resolved' },
              { value: '50%', label: 'Cost Reduction' },
              { value: '4.9/5', label: 'Customer Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Customer support is broken
            </h2>
            <p className="text-xl text-muted-foreground">
              Traditional support tools leave teams overwhelmed and customers frustrated
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: 'Scattered Conversations',
                description: 'Messages from WhatsApp, email, chat, and social media are siloed across different platforms, making it impossible to get a complete view.',
              },
              {
                icon: Clock,
                title: 'Slow Response Times',
                description: 'Agents spend hours switching between tools, searching for context, and typing repetitive responses.',
              },
              {
                icon: TrendingUp,
                title: 'Scaling Challenges',
                description: 'Hiring more agents is expensive and training takes time. Growth becomes a bottleneck.',
              },
            ].map((problem, index) => (
              <div key={index} className="p-8 rounded-2xl bg-destructive/5 border border-destructive/10 hover:border-destructive/20 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-6">
                  <problem.icon className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              The Rezolve advantage
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to deliver exceptional customer support at scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: 'Unified Inbox',
                description: 'All channels in one place—WhatsApp, Email, Web Chat, Shopify. Never miss a message again.',
              },
              {
                icon: Bot,
                title: 'AI-Powered Replies',
                description: 'Get intelligent reply suggestions based on your knowledge base. Edit and send in seconds.',
              },
              {
                icon: Zap,
                title: 'Smart Automation',
                description: 'Auto-assign tickets, trigger workflows, and resolve common queries without human intervention.',
              },
              {
                icon: Users,
                title: 'Team Collaboration',
                description: 'Internal notes, ticket assignments, and performance tracking for seamless teamwork.',
              },
              {
                icon: Shield,
                title: 'Knowledge Base',
                description: 'Build a central repository of answers. AI learns from it to provide accurate suggestions.',
              },
              {
                icon: BarChart3,
                title: 'Real-time Analytics',
                description: 'Track response times, resolution rates, and team performance with actionable insights.',
              },
            ].map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              How it works
            </h2>
            <p className="text-xl text-muted-foreground">
              Get started in minutes, not months
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Connect Channels', description: 'Link WhatsApp, Email, and other channels in just a few clicks' },
              { step: '02', title: 'Add Knowledge', description: 'Upload FAQs and documents to train the AI on your business' },
              { step: '03', title: 'Invite Team', description: 'Add your support agents and assign roles' },
              { step: '04', title: 'Start Resolving', description: 'Let AI suggest replies while your team focuses on complex issues' },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-primary/10 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < 3 && (
                  <ChevronRight className="hidden md:block absolute top-8 -right-4 h-8 w-8 text-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Loved by support teams
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our customers have to say
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Rezolve cut our response time by 80%. Our customers are happier than ever.",
                author: 'Sarah Chen',
                role: 'Head of Support, TechStart',
                rating: 5,
              },
              {
                quote: "The AI suggestions are incredibly accurate. It's like having an expert on every ticket.",
                author: 'Michael Torres',
                role: 'Support Manager, ShopFlow',
                rating: 5,
              },
              {
                quote: "We scaled from 100 to 10,000 tickets/month without adding a single agent.",
                author: 'Emily Johnson',
                role: 'CEO, GrowthBox',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="p-8 rounded-2xl bg-card border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-lg text-foreground mb-6">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Start free, scale as you grow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '$0',
                period: '/month',
                description: 'Perfect for small teams getting started',
                features: ['Up to 3 agents', '500 conversations/month', '2 channels', 'Basic AI suggestions', 'Email support'],
                cta: 'Start Free',
                popular: false,
              },
              {
                name: 'Pro',
                price: '$49',
                period: '/agent/month',
                description: 'For growing teams that need more power',
                features: ['Unlimited agents', 'Unlimited conversations', 'All channels', 'Advanced AI & automation', 'Priority support', 'Analytics dashboard'],
                cta: 'Start Free Trial',
                popular: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: '',
                description: 'For large organizations with custom needs',
                features: ['Everything in Pro', 'Custom integrations', 'Dedicated account manager', 'SLA guarantees', 'On-premise option', 'Custom training'],
                cta: 'Contact Sales',
                popular: false,
              },
            ].map((plan, index) => (
              <div key={index} className={`p-8 rounded-2xl border ${plan.popular ? 'border-primary bg-primary/5 relative' : 'border-border bg-card'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <Button className="w-full mb-6" variant={plan.popular ? 'default' : 'outline'} onClick={() => navigate('/auth?mode=signup')}>
                  {plan.cta}
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Get in touch
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-medium text-foreground">hello@rezolve.io</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <div className="font-medium text-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Office</div>
                    <div className="font-medium text-foreground">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input type="email" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <textarea 
                    className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Tell us about your needs..."
                  />
                </div>
                <Button className="w-full">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-purple-500/10 border border-primary/20">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Ready to transform your support?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of teams delivering exceptional customer experiences with Rezolve.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="text-lg px-8" onClick={() => navigate('/auth?mode=signup')}>
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection('contact')}>
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-purple-500">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-foreground">Rezolve</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-xs">
                AI-powered customer support platform that helps teams resolve queries 10x faster.
              </p>
              <div className="flex items-center gap-2">
                <Input 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="max-w-xs"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="#" className="hover:text-foreground transition-colors">Features</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-colors">Integrations</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-colors">Changelog</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="#" className="hover:text-foreground transition-colors">About</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-colors">Careers</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="#" className="hover:text-foreground transition-colors">Privacy</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-colors">Terms</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-colors">Security</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Rezolve. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-muted-foreground">
              <Link to="#" className="hover:text-foreground transition-colors">Twitter</Link>
              <Link to="#" className="hover:text-foreground transition-colors">LinkedIn</Link>
              <Link to="#" className="hover:text-foreground transition-colors">GitHub</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
