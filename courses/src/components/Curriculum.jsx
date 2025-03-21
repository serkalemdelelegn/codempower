import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Video, Headphones, FileText, Lock } from 'lucide-react';

export const Curriculum = () => {
  const [expandedSection, setExpandedSection] = useState('Introduction');

  const sections = [
    {
      title: 'Introduction',
      lectures: '3 Lectures',
      duration: '34:51 min',
      content: [
        { type: 'video', title: 'Getting Started And Introductions', duration: '12:30', preview: true },
        { type: 'video', title: 'Getting Started And Introductions', duration: '10:15', preview: true },
        { type: 'audio', title: 'Getting Started And Introductions', duration: '08:45', preview: false },
        { type: 'document', title: 'Getting Started And Introductions', duration: '03:21', preview: false }
      ]
    },
    {
      title: 'Introduction',
      lectures: '3 Lectures',
      duration: '34:51 min',
      content: []
    },
    {
      title: 'Introduction',
      lectures: '3 Lectures',
      duration: '34:51 min',
      content: []
    }
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'video':
        return Video;
      case 'audio':
        return Headphones;
      case 'document':
        return FileText;
      default:
        return Video;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-8 text-sm text-gray-600 mb-6">
        <span>Level Beginner</span>
        <span>12 Lectures</span>
        <span>Total: 5 Hours 56 Minutes 24 Seconds</span>
      </div>

      {sections.map((section) => (
        <div key={section.title} className="border rounded-lg overflow-hidden">
          <button
            onClick={() => setExpandedSection(section.title === expandedSection ? '' : section.title)}
            className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50"
          >
            <div className="flex items-center gap-4">
              {section.title === expandedSection ? (
                <ChevronUp className="w-5 h-5 text-teal-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-teal-500" />
              )}
              <div className="text-left">
                <h3 className="font-medium">{section.title}</h3>
                <p className="text-sm text-gray-500">
                  {section.lectures} • {section.duration}
                </p>
              </div>
            </div>
          </button>

          {section.title === expandedSection && section.content.length > 0 && (
            <div className="border-t divide-y">
              {section.content.map((item, index) => {
                const Icon = getIcon(item.type);
                return (
                  <div key={index} className="px-6 py-4 flex items-center justify-between bg-white">
                    <div className="flex items-center gap-4">
                      <Icon className="w-5 h-5 text-gray-400" />
                      <span>{item.title}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-500">{item.duration}</span>
                      {item.preview ? (
                        <button className="text-sm text-pink-500 hover:text-pink-600">Preview</button>
                      ) : (
                        <Lock className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};