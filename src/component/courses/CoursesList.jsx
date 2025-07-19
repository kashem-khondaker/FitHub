import React from "react";

const CoursesList = () => {
  return (
    <div className="space-y-6">
      {filteredCourses.length > 0 ? (
        filteredCourses.map((course) => (
          <div
            key={course.id}
            className="flex flex-col md:flex-row bg-white rounded-lg shadow hover:shadow-md transition-shadow overflow-hidden animate-fade-in"
          >
            {/* Image Section */}
            <div className="md:w-1/3 h-64 md:h-auto bg-gray-100">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col justify-between md:w-2/3">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-semibold">{course.title}</h3>
                  <span className="bg-gray-100 text-sm px-3 py-1 rounded-full">
                    {course.level}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex flex-wrap text-sm text-gray-500 gap-4 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {course.schedule.split(" - ")[0]}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.capacity} spots
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-xs font-medium">
                      {course.instructor
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <span className="ml-2 text-sm font-medium">
                    {course.instructor}
                  </span>
                </div>

                <Link to={`/courses/${course.id}`}>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-900 mb-2">
            No courses found
          </h3>
          <p className="text-gray-500">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default CoursesList;
