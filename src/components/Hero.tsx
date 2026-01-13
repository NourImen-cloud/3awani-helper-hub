import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Sparkles, ArrowRight, ArrowLeft, Check } from 'lucide-react';

const Hero = () => {
  const { t, isRTL } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="hero" className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isRTL ? 'lg:order-2' : ''}`}>
            <Badge variant="secondary" className="gap-2 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-4 h-4" />
              {t('hero.badge')}
            </Badge>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {t('hero.title')}
                <br />
                <span className="text-primary">{t('hero.titleHighlight')}</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                {t('hero.subtitle')}
              </p>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md">
              <Input
                type="email"
                placeholder={t('hero.emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 bg-card border-border"
                disabled={isSubmitted}
              />
              <Button
                type="submit"
                size="lg"
                className="h-12 px-8 gap-2 bg-primary hover:bg-primary/90"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <Check className="w-5 h-5" />
                  </>
                ) : (
                  <>
                    {t('hero.notifyMe')}
                    <Arrow className="w-5 h-5" />
                  </>
                )}
              </Button>
            </form>

            {isSubmitted && (
              <p className="text-sm text-primary font-medium animate-fade-in">
                {t('hero.emailSuccess')}
              </p>
            )}
          </div>

          {/* Phone Mockup */}
          <div className={`relative ${isRTL ? 'lg:order-1' : ''}`}>
            <div className="relative mx-auto w-[280px] md:w-[320px]">
              {/* Phone Frame */}
              <div className="relative bg-foreground rounded-[3rem] p-3 shadow-2xl shadow-primary/20">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-b-2xl" />
                <div className="bg-card rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  {/* App Screen Content */}
                  <div className="h-full bg-gradient-to-b from-primary/10 to-card p-4 flex flex-col">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center text-xs text-muted-foreground mb-4">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-muted-foreground rounded-sm" />
                        <div className="w-4 h-2 bg-muted-foreground rounded-sm" />
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="text-sm text-muted-foreground">Welcome to</p>
                        <h3 className="text-xl font-bold text-primary">3awani</h3>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-primary/20" />
                    </div>

                    {/* Search Bar */}
                    <div className="bg-muted rounded-xl px-4 py-3 mb-6">
                      <p className="text-sm text-muted-foreground">Search services...</p>
                    </div>

                    {/* Service Categories */}
                    <div className="grid grid-cols-2 gap-3 flex-1">
                      {[
                        { icon: '🔧', color: 'bg-blue-100' },
                        { icon: '🧹', color: 'bg-green-100' },
                        { icon: '💆', color: 'bg-pink-100' },
                        { icon: '🍽️', color: 'bg-orange-100' },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className={`${item.color} rounded-2xl p-4 flex items-center justify-center text-3xl`}
                        >
                          {item.icon}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-2xl p-3 shadow-lg animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium">Verified</p>
                    <p className="text-xs text-muted-foreground">Providers</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl p-3 shadow-lg animate-float-delayed">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium">Easy</p>
                    <p className="text-xs text-muted-foreground">Booking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
