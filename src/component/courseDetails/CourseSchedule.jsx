import { motion } from "framer-motion";
import { Calendar, Clock, Users } from "lucide-react";

const CourseSchedule = ({ schedules }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <h2 className="text-3xl font-bold mb-6 text-gray-900">Class Schedule</h2>
    <div className="space-y-4">
      {schedules.map((schedule, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ scale: 1.01 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 border border-gray-200 rounded-2xl bg-white hover:shadow-md transition-all"
        >
          <div className="flex items-center gap-2 text-gray-800">
            <Calendar className="h-5 w-5 text-blue-700" />
            <span className="font-medium">{schedule.day}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-800">
            <Clock className="h-5 w-5 text-gray-600" />
            <span>{schedule.time}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-800">
            <Users className="h-5 w-5 text-gray-600" />
            <span>With {schedule.instructor}</span>
          </div>
          <button className="rounded-full px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold shadow-md hover:shadow-lg transition-all">
            Book Now
          </button>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default CourseSchedule;
