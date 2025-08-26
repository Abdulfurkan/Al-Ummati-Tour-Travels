"use client";

import { useState, useEffect } from "react";
import { CardSkeleton, PackageSkeleton, ServiceSkeleton } from "./skeleton";

interface PageLoaderProps {
  children: React.ReactNode;
  delay?: number;
}

export function PageLoader({ children, delay = 1000 }: PageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (isLoading) {
    return (
      <div className="min-h-screen">
        {/* Header Skeleton */}
        <div className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
          <div className="bg-emerald-600 dark:bg-emerald-700 text-white py-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center space-x-6">
                  <div className="w-32 h-4 bg-emerald-500 rounded animate-pulse"></div>
                  <div className="w-40 h-4 bg-emerald-500 rounded animate-pulse"></div>
                </div>
                <div className="w-48 h-4 bg-emerald-500 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-2">
                <div className="w-32 h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="hidden md:flex items-center space-x-8">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="w-16 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  <div className="w-24 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  <div className="w-20 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Skeleton */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-8">
              <div className="w-48 h-8 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse"></div>
              <div className="space-y-4">
                <div className="w-96 h-16 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse"></div>
                <div className="w-80 h-12 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse"></div>
              </div>
              <div className="w-72 h-8 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse"></div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="w-48 h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="w-48 h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-white/20 dark:border-gray-700/20">
                    <div className="w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse"></div>
                    <div className="w-24 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Skeleton */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="w-32 h-6 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-4 animate-pulse"></div>
              <div className="w-80 h-12 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-6 animate-pulse"></div>
              <div className="w-96 h-8 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <ServiceSkeleton key={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Packages Skeleton */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="w-32 h-6 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-4 animate-pulse"></div>
              <div className="w-80 h-12 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-6 animate-pulse"></div>
              <div className="w-96 h-8 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {Array.from({ length: 3 }).map((_, i) => (
                <PackageSkeleton key={i} />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return <>{children}</>;
}