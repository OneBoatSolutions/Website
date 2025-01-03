'use client'

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, ChevronRight, Play, ArrowLeft } from 'lucide-react';

const courses = [
  {
    id: '1',
    title: 'React Fundamentals',
    progress: 60,
    lessons: [
      { id: '1-1', title: 'Introduction to React', notes: 'React is a JavaScript library for building user interfaces.', videoUrl: 'https://example.com/videos/react-intro.mp4' },
      { id: '1-2', title: 'Components and Props', notes: 'Components are the building blocks of React applications.', videoUrl: 'https://example.com/videos/react-components.mp4' },
      { id: '1-3', title: 'State and Lifecycle', notes: 'State allows React components to change their output over time.', videoUrl: 'https://example.com/videos/react-state.mp4' },
    ],
  },
  {
    id: '2',
    title: 'Advanced JavaScript',
    progress: 30,
    lessons: [
      { id: '2-1', title: 'Closures', notes: 'A closure is the combination of a function and its lexical environment.', videoUrl: 'https://example.com/videos/js-closures.mp4' },
      { id: '2-2', title: 'Promises', notes: 'Promises are used to handle asynchronous operations in JavaScript.', videoUrl: 'https://example.com/videos/js-promises.mp4' },
      { id: '2-3', title: 'Async/Await', notes: 'Async/Await is a syntactic sugar on top of promises.', videoUrl: 'https://example.com/videos/js-async-await.mp4' },
    ],
  },
];

export default function CourseDisplay() {
  const [filter, setFilter] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(filter.toLowerCase())
  );

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setCurrentLessonIndex(0);
  };

  const handleNextLesson = () => {
    if (selectedCourse && currentLessonIndex < selectedCourse.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    }
  };

  const handlePreviousLesson = () => {
    if (selectedCourse && currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    }
  };

  const handleBackToCourses = () => {
    setSelectedCourse(null);
    setCurrentLessonIndex(0);
  };

  return (
    <div className="container mx-auto p-4">
      {!selectedCourse ? (
        <>
          <Input
            type="text"
            placeholder="Filter courses..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="mb-4"
          />
          <div className="grid grid-cols-1 gap-4">
            {filteredCourses.map(course => (
              <CourseCard
                key={course.id}
                course={course}
                onClick={() => handleCourseClick(course)}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-4">
            <Button onClick={handleBackToCourses} className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses
            </Button>
            <Card>
              <CardHeader>
                <CardTitle>{selectedCourse.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={selectedCourse.progress} className="w-full mb-4" />
                <p className="mb-4 text-sm text-gray-600">{selectedCourse.progress}% complete</p>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <LessonDetails
                lesson={selectedCourse.lessons[currentLessonIndex]}
                onNext={handleNextLesson}
                onPrevious={handlePreviousLesson}
                isFirstLesson={currentLessonIndex === 0}
                isLastLesson={currentLessonIndex === selectedCourse.lessons.length - 1}
              />
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Table of Contents</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[calc(100vh-200px)]">
                    {selectedCourse.lessons.map((lesson, index) => (
                      <Button
                        key={lesson.id}
                        onClick={() => setCurrentLessonIndex(index)}
                        variant={index === currentLessonIndex ? "default" : "ghost"}
                        className="w-full justify-start mb-2"
                      >
                        {index + 1}. {lesson.title}
                      </Button>
                    ))}
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function CourseCard({ course, onClick }) {
  return (
    <Card
      className="cursor-pointer hover:shadow-lg transition-shadow w-full"
      onClick={onClick}
    >
      <CardHeader>
        <CardTitle>{course.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={course.progress} className="w-full" />
        <p className="mt-2 text-sm text-gray-600">{course.progress}% complete</p>
        <div className="mt-4 flex items-center text-sm text-gray-600">
          <Play className="w-4 h-4 mr-2" />
          {course.lessons.length} {course.lessons.length === 1 ? 'lesson' : 'lessons'}
        </div>
      </CardContent>
    </Card>
  );
}

function LessonDetails({ lesson, onNext, onPrevious, isFirstLesson, isLastLesson }) {
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>{lesson.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <video
            src={lesson.videoUrl}
            controls
            className="w-full h-full object-cover rounded-lg"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex justify-between mt-4 mb-6">
          <Button onClick={onPrevious} disabled={isFirstLesson}>
            <ChevronLeft className="mr-2 h-4 w-4" /> Previous Lesson
          </Button>
          <Button onClick={onNext} disabled={isLastLesson}>
            Next Lesson <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Lesson Notes</h3>
          <p>{lesson.notes}</p>
        </div>
      </CardContent>
    </Card>
  );
}
