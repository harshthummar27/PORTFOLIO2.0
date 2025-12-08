export default function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header Skeleton */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 pt-3 md:pt-4">
          <div className="bg-black/50 backdrop-blur-xl rounded-2xl xl:rounded-full border border-white/10 h-14 md:h-16 animate-pulse"></div>
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <div className="relative overflow-hidden pt-36 sm:pt-40 md:pt-32 xl:pt-24 pb-8 sm:pb-12 min-h-[80vh]">
        <div className="absolute inset-0 bg-black z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-[4]">
          <div className="space-y-6">
            <div className="h-16 sm:h-20 md:h-24 bg-white/5 rounded-lg animate-pulse w-3/4"></div>
            <div className="h-8 sm:h-10 bg-white/5 rounded-lg animate-pulse w-1/2"></div>
            <div className="h-6 sm:h-8 bg-white/5 rounded-lg animate-pulse w-2/3"></div>
          </div>
        </div>
      </div>

      {/* Section Skeletons */}
      <div className="space-y-16 py-16">
        {[1, 2, 3].map((i) => (
          <div key={i} className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
              <div className="space-y-4">
                <div className="h-8 bg-white/5 rounded-lg animate-pulse w-1/3"></div>
                <div className="h-4 bg-white/5 rounded-lg animate-pulse w-full"></div>
                <div className="h-4 bg-white/5 rounded-lg animate-pulse w-5/6"></div>
                <div className="h-4 bg-white/5 rounded-lg animate-pulse w-4/6"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

