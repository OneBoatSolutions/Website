import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { CourseCardSkeleton, CourseDetailsSkeleton } from './SkeletonLoader'
import { ShoppingCart, Star, Check, Filter } from 'lucide-react'

const courses = [
  {
    id: "1",
    title: "React Mastery",
    description: "Master React and build complex applications",
    price: 99.99,
    thumbnail: "/placeholder.svg?height=200&width=300",
    domain: "Frontend",
    rating: 4.8,
    duration: 20,
    skillLevel: "Intermediate",
    perks: ["Lifetime access", "10 real-world projects", "Certificate of completion"],
    content: [
      "Introduction to React",
      "Components and Props",
      "State and Lifecycle",
      "Hooks",
      "Routing",
      "State Management",
      "Testing",
      "Deployment",
    ],
  },
  {
    id: "2",
    title: "Node.js Backend Development",
    description: "Build scalable backend services with Node.js",
    price: 89.99,
    thumbnail: "/placeholder.svg?height=200&width=300",
    domain: "Backend",
    rating: 4.7,
    duration: 25,
    skillLevel: "Advanced",
    perks: ["24/7 support", "5 backend projects", "Code reviews"],
    content: [
      "Node.js Basics",
      "Express.js",
      "RESTful APIs",
      "Database Integration",
      "Authentication",
      "Websockets",
      "Microservices",
      "Deployment with Docker",
    ],
  },
  {
    id: "3",
    title: "Full Stack Web Development",
    description: "Become a full stack developer with MERN stack",
    price: 149.99,
    thumbnail: "/placeholder.svg?height=200&width=300",
    domain: "Full Stack",
    rating: 4.9,
    duration: 40,
    skillLevel: "Beginner",
    perks: ["Job placement assistance", "15 full stack projects", "One-on-one mentoring"],
    content: [
      "HTML/CSS/JavaScript",
      "React Frontend",
      "Node.js Backend",
      "MongoDB",
      "RESTful APIs",
      "Authentication and Authorization",
      "Deployment",
      "Performance Optimization",
    ],
  },
  {
    id: "1",
    title: "JavaScript Essentials",
    description: "Learn JavaScript from scratch and master the fundamentals.",
    price: 49.99,
    thumbnail: "/placeholder.svg?height=200&width=300",
    domain: "Programming",
    rating: 4.6,
    duration: 15,
    skillLevel: "Beginner",
    perks: ["Lifetime access", "Code challenges", "Certificate of completion"],
    content: [
      "Introduction to JavaScript",
      "Variables and Data Types",
      "Functions and Scope",
      "DOM Manipulation",
      "Event Handling",
      "ES6+ Features",
      "Asynchronous JavaScript",
      "Project: Interactive Webpage",
    ],
  },
  {
    id: "2",
    title: "Python for Data Science",
    description: "Analyze data and build predictive models with Python.",
    price: 119.99,
    thumbnail: "/placeholder.svg?height=200&width=300",
    domain: "Data Science",
    rating: 4.8,
    duration: 30,
    skillLevel: "Intermediate",
    perks: ["Access to datasets", "Python notebooks", "Community support"],
    content: [
      "Python Basics",
      "Data Manipulation with Pandas",
      "Data Visualization with Matplotlib",
      "Statistics for Data Science",
      "Introduction to Machine Learning",
      "Building Predictive Models",
      "Working with Big Data",
      "Project: Predictive Analytics",
    ],
  },
  {
    id: "3",
    title: "UI/UX Design Fundamentals",
    description: "Create stunning designs with a focus on user experience.",
    price: 74.99,
    thumbnail: "/placeholder.svg?height=200&width=300",
    domain: "Design",
    rating: 4.7,
    duration: 18,
    skillLevel: "Beginner",
    perks: ["Design templates", "Portfolio projects", "Expert reviews"],
    content: [
      "Introduction to UI/UX",
      "Understanding User Behavior",
      "Wireframing and Prototyping",
      "Typography and Color Theory",
      "Design Tools: Figma & Adobe XD",
      "Responsive Design",
      "Accessibility in Design",
      "Project: Design a Mobile App",
    ],
  },
  {
    id: "4",
    title: "Cybersecurity Basics",
    description: "Learn to protect systems and networks from cyber threats.",
    price: 89.99,
    thumbnail: "/placeholder.svg?height=200&width=300",
    domain: "Security",
    rating: 4.5,
    duration: 20,
    skillLevel: "Advanced",
    perks: ["Simulated attacks", "Security tools", "Certification preparation"],
    content: [
      "Introduction to Cybersecurity",
      "Types of Cyber Threats",
      "Network Security Basics",
      "Cryptography",
      "Penetration Testing",
      "Incident Response",
      "Security Frameworks",
      "Project: Secure a Web Application",
    ],
  },
];



export default function CourseCatalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [selectedSkillLevels, setSelectedSkillLevels] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      course.price >= priceRange[0] &&
      course.price <= priceRange[1] ||
      (selectedDomain === null || course.domain === selectedDomain) ||
      (selectedRating === null || course.rating >= selectedRating) ||
      (selectedDuration === null || course.duration <= selectedDuration) ||
      (selectedSkillLevels.length === 0 || selectedSkillLevels.includes(course.skillLevel))
  );

  const domains = Array.from(new Set(courses.map((course) => course.domain)));
  const skillLevels = ['Beginner', 'Intermediate', 'Advanced'];

  const handleSkillLevelChange = (level) => {
    setSelectedSkillLevels((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };

  const handleCourseClick = (course) => {
    setIsLoadingDetails(true);
    setSelectedCourse(course);
    setTimeout(() => {
      setIsLoadingDetails(false);
    }, 3000);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <Input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow"
          />
          <Button onClick={() => setShowFilters(!showFilters)}>
            <Filter className="w-4 h-4 mr-2" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </div>

        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Price Range: ${priceRange[0]} - ${priceRange[1]}</Label>
              <Slider
                min={0}
                max={200}
                step={10}
                value={priceRange}
                onValueChange={setPriceRange}
              />
            </div>
            <div>
              <Label>Domain</Label>
              <Select
                onValueChange={(value) => setSelectedDomain(value === 'all' ? null : value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Domain" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Domains</SelectItem>
                  {domains.map((domain) => (
                    <SelectItem key={domain} value={domain}>
                      {domain}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Minimum Rating</Label>
              <Select
                onValueChange={(value) =>
                  setSelectedRating(value === 'all' ? null : Number(value))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Rating</SelectItem>
                  {[4, 4.5].map((rating) => (
                    <SelectItem key={rating} value={rating.toString()}>
                      {rating}+ Stars
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Maximum Duration (hours)</Label>
              <Select
                onValueChange={(value) =>
                  setSelectedDuration(value === 'all' ? null : Number(value))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Duration</SelectItem>
                  {[20, 30, 40, 50].map((duration) => (
                    <SelectItem key={duration} value={duration.toString()}>
                      {duration} hours or less
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="mb-2 block">Skill Level</Label>
              {skillLevels.map((level) => (
                <div key={level} className="flex items-center space-x-2 mb-2">
                  <Checkbox
                    id={level}
                    checked={selectedSkillLevels.includes(level)}
                    onCheckedChange={() => handleSkillLevelChange(level)}
                  />
                  <Label htmlFor={level}>{level}</Label>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {selectedCourse ? (
        isLoadingDetails ? (
          <CourseDetailsSkeleton />
        ) : (
          <CourseDetails course={selectedCourse} onBack={() => setSelectedCourse(null)} />
        )
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <CourseCardSkeleton key={index} />
              ))
            : filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onClick={() => handleCourseClick(course)}
                />
              ))}
        </div>
      )}
    </div>
  );
}

function CourseCard({ course, onClick }) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <img
          src={course.thumbnail}
          alt={course.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="flex-grow">
        <CardTitle className="mb-2">{course.title}</CardTitle>
        <p className="text-sm text-gray-600 mb-2">{course.description}</p>
        <div className="flex items-center mb-2">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
          <span className="text-sm font-medium">{course.rating.toFixed(1)}</span>
        </div>
        <Badge>{course.domain}</Badge>
        <Badge variant="outline" className="ml-2">{course.skillLevel}</Badge>
        <p className="text-sm text-gray-600 mt-2">{course.duration} hours</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-lg font-bold">${course.price.toFixed(2)}</span>
        <div>
          <Button variant="outline" size="sm" className="mr-2" onClick={onClick}>
            View Details
          </Button>
          <Button size="sm">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
function CourseDetails({ course, onBack }){
  return (
    <Card>
      <CardHeader>
        <Button variant="outline" onClick={onBack} className="mb-4">Back to Courses</Button>
        <div className="flex flex-col md:flex-row gap-4">
          <img
            src={course.thumbnail}
            alt={course.title}
            width={300}
            height={200}
            className="w-full md:w-1/3 h-48 object-cover rounded-lg border-red-500"
          />
          <div className="flex-grow">
            <CardTitle className="mb-2">{course.title}</CardTitle>
            <p className="text-sm text-gray-600 mb-2">{course.description}</p>
            <div className="flex items-center mb-2">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="text-sm font-medium">{course.rating.toFixed(1)}</span>
            </div>
            <Badge className="mb-2 mr-2">{course.domain}</Badge>
            <Badge variant="outline" className="mb-2 mr-2">{course.skillLevel}</Badge>
            <Badge variant="secondary">{course.duration} hours</Badge>
            <p className="text-lg font-bold mt-2">${course.price.toFixed(2)}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Course Content</h3>
            <ul className="list-disc list-inside">
              {course.content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Course Perks</h3>
            <ul className="space-y-2">
              {course.perks.map((perk, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-4 h-4 mr-2 text-green-500" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
