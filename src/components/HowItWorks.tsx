import { useLanguage } from '@/contexts/LanguageContext';
import { Search, CalendarCheck, PartyPopper } from 'lucide-react';

const HowItWorks = () => {
  const { t, isRTL } = useLanguage();

  const steps = [
    {
      icon: Search,
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description'),
      step: '01',
    },
    {
      icon: CalendarCheck,
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description'),
      step: '02',
    },
    {
      icon: PartyPopper,
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description'),
      step: '03',
    },
  ];

  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Step Card */}
                <div className="bg-card border border-border rounded-3xl p-8 text-center hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 ${isRTL ? '-left-6' : '-right-6'} w-12 h-12 items-center justify-center`}>
                    <div className={`w-3 h-3 border-t-2 border-r-2 border-primary/50 ${isRTL ? '-rotate-135' : 'rotate-45'}`} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
