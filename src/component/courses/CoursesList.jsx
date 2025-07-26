import React from "react";
import { Clock, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";

const CoursesList = ({ classes }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {classes.length > 0 ? (
        classes.map((classData) => (
          <div
            key={classData.id}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-in card-hover"
          >
            {/* Image Section */}
            <div className="relative h-56 bg-gray-200">
              <img
                src={classData.image}
                alt={classData.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {classData.name}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {classData.description}
                </p>

                <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {classData.duration} min
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(classData.schedule).toLocaleString()}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {classData.max_capacity} spots
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-xs font-medium">
                      {/* Instructor initials not available, show placeholder */}
                      {classData.instructor?.profile?.profile_picture}
                    </span>
                  </div>
                  <span className="ml-2 text-sm font-medium">
                    {/* Instructor name not available, show ID or fallback */}
                     {classData.instructor?.profile?.name}
                  </span>
                </div>

                <Link to={`/courses/${classData.id}`}>
                  <button className="text-sm px-3 py-1 border rounded">
                    View Details
                  </button>
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
