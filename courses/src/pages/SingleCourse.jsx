import React, { useState } from 'react';
import { CourseHeader } from '../components/CourseHeader';
import { CourseTabs } from '../components/CourseTabs';
import { CourseDescription } from '../components/courseDescription';
import { LearningObjectives } from '../components/LearningObjectives';
import { CourseRequirements } from '../components/CourseRequirements';
import { CourseSidebar } from '../components/CourseSidebar';
import { RelatedCourses } from '../components/RelatedCourses';
import { Curriculum } from '../components/Curriculum';
import { Instructor } from '../components/Instructor';
import { Reviews } from '../components/Reviews';

function SingleCourse() {
  const [activeTab, setActiveTab] = useState('Overview');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <>
            <CourseDescription />
            <LearningObjectives />
            <CourseRequirements />
          </>
        );
      case 'Curriculum':
        return <Curriculum />;
      case 'Instructor':
        return <Instructor />;
      case 'Reviews':
        return <Reviews />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with navigation */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Pages</span>
            <span>-</span>
            <span className="text-gray-900">Course Details</span>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Course image */}
            <div className="bg-gray-200 rounded-lg aspect-video mb-8"></div>

            <CourseHeader
              title="UI/UX Design And Graphics Learning Bootcamp 2022"
              category="Data Science"
              trainer="Md Shamim Hossain"
              lastUpdate="10 February, 2022"
            />

            <CourseTabs activeTab={activeTab} onTabChange={setActiveTab} />

            {renderTabContent()}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <CourseSidebar />
          </div>
        </div>

        <RelatedCourses />
      </main>
    </div>
  );
}

export default SingleCourse;