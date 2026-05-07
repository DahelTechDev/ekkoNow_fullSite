import Image from 'next/image';

interface PageHeroProps {
  title: string;
  titleHighlight?: string;
  subtitle: string;
  badgeText?: string;
  imageSrc: string;
}

export default function PageHero({ title, titleHighlight, subtitle, badgeText, imageSrc }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden bg-[#1A0B4F]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A0B4F] via-[#1A0B4F]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B4F] via-transparent to-[#1A0B4F]/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl animate-fade-up">
          {badgeText && (
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[#2EE6A6] mb-6 border-[#2EE6A6]/20">
              <span className="w-2 h-2 rounded-full bg-[#2EE6A6] animate-pulse" />
              {badgeText}
            </div>
          )}

          <h1
            style={{ fontFamily: 'Outfit, sans-serif' }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1]"
          >
            {titleHighlight ? (
              <>
                {title}{' '}
                <span className="gradient-text">{titleHighlight}</span>
              </>
            ) : (
              <span className="gradient-text">{title}</span>
            )}
          </h1>

          <p className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-xl">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
