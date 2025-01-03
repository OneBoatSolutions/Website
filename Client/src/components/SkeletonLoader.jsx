import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
export function CourseCardSkeleton() {
    return (
      <Card className="flex flex-col animate-pulse">
        <CardHeader>
          <div className="w-full h-48 bg-gray-300 rounded-t-lg" />
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-2" />
          <div className="h-4 bg-gray-300 rounded w-full mb-2" />
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-2" />
          <div className="h-6 bg-gray-300 rounded w-1/4" />
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <div className="h-6 bg-gray-300 rounded w-1/4" />
          <div className="flex space-x-2">
            <div className="h-8 bg-gray-300 rounded w-20" />
            <div className="h-8 bg-gray-300 rounded w-24" />
          </div>
        </CardFooter>
      </Card>
    )
  }
  
export function CourseDetailsSkeleton() {
    return (
      <Card className="animate-pulse">
        <CardHeader>
          <div className="h-8 bg-gray-300 rounded w-32 mb-4" />
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/3 h-48 bg-gray-300 rounded-lg" />
            <div className="flex-grow">
              <div className="h-8 bg-gray-300 rounded w-3/4 mb-2" />
              <div className="h-4 bg-gray-300 rounded w-full mb-2" />
              <div className="h-4 bg-gray-300 rounded w-1/2 mb-2" />
              <div className="h-6 bg-gray-300 rounded w-1/4 mb-2" />
              <div className="h-6 bg-gray-300 rounded w-1/3" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="h-6 bg-gray-300 rounded w-1/2 mb-2" />
              <div className="space-y-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="h-4 bg-gray-300 rounded w-full" />
                ))}
              </div>
            </div>
            <div>
              <div className="h-6 bg-gray-300 rounded w-1/2 mb-2" />
              <div className="space-y-2">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="h-4 bg-gray-300 rounded w-full" />
                ))}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="h-10 bg-gray-300 rounded w-full" />
        </CardFooter>
      </Card>
    )
  }