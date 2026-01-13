import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Wrench, Sparkles, Heart, UtensilsCrossed } from 'lucide-react';

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Wrench,
      title: t('features.homeRepairs.title'),
      description: t('features.homeRepairs.description'),
      color: 'bg-blue-500/10 text-blue-500',
      gradient: 'from-blue-500/20 to-blue-500/5',
    },
    {
      icon: Sparkles,
      title: t('features.cleaning.title'),
      description: t('features.cleaning.description'),
      color: 'bg-green-500/10 text-green-500',
      gradient: 'from-green-500/20 to-green-500/5',
    },
    {
      icon: Heart,
      title: t('features.beauty.title'),
      description: t('features.beauty.description'),
      color: 'bg-pink-500/10 text-pink-500',
      gradient: 'from-pink-500/20 to-pink-500/5',
    },
    {
      icon: UtensilsCrossed,
      title: t('features.food.title'),
      description: t('features.food.description'),
      color: 'bg-orange-500/10 text-orange-500',
      gradient: 'from-orange-500/20 to-orange-500/5',
    },
  ];

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('features.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group border-border/50 bg-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <CardContent className="p-6 relative">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
