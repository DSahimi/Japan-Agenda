import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Train, 
  Calendar, 
  Clock, 
  CheckCircle, 
  Coffee, 
  Camera, 
  Info,
  Check,
  PenLine
} from 'lucide-react';
import { ITINERARY_DATA, CHECKLIST_ITEMS } from '../constants';
import { ItineraryKey } from '../types';

const ItineraryApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ItineraryKey>('tokyo');
  
  // State for tracking completed activities (keyed by "Date-Index")
  const [completedActivities, setCompletedActivities] = useState<Record<string, boolean>>({});
  
  // State for daily notes (keyed by Date)
  const [dailyNotes, setDailyNotes] = useState<Record<string, string>>({});

  // Load state from local storage on mount
  useEffect(() => {
    const savedActivities = localStorage.getItem('japan_trip_activities');
    const savedNotes = localStorage.getItem('japan_trip_notes');
    
    if (savedActivities) setCompletedActivities(JSON.parse(savedActivities));
    if (savedNotes) setDailyNotes(JSON.parse(savedNotes));
  }, []);

  // Save to local storage whenever state changes
  useEffect(() => {
    localStorage.setItem('japan_trip_activities', JSON.stringify(completedActivities));
  }, [completedActivities]);

  useEffect(() => {
    localStorage.setItem('japan_trip_notes', JSON.stringify(dailyNotes));
  }, [dailyNotes]);

  const toggleActivity = (date: string, index: number) => {
    const key = `${date}-${index}`;
    setCompletedActivities(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const updateNote = (date: string, text: string) => {
    setDailyNotes(prev => ({
      ...prev,
      [date]: text
    }));
  };
  
  const currentData = ITINERARY_DATA[activeTab];
  const theme = currentData.theme;

  return (
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800 pb-10 relative">
      {/* App Header */}
      <header className={`${theme.bg} text-white p-6 shadow-lg sticky top-0 z-50 transition-colors duration-500`}>
        <div className="flex justify-between items-center max-w-md mx-auto">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <MapPin size={24} /> Japan 2025
            </h1>
            <p className="text-sm opacity-90 mt-1">Dec 17 - Dec 30 • Family of 4</p>
          </div>
          <div className="bg-white/20 p-2 rounded-full cursor-pointer hover:bg-white/30 transition-colors">
            <Camera size={24} />
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="flex bg-white shadow-sm sticky top-20 z-40 max-w-md mx-auto">
        {Object.keys(ITINERARY_DATA).map((key) => {
          const section = ITINERARY_DATA[key];
          const isActive = activeTab === key;
          
          return (
            <button
              key={key}
              onClick={() => setActiveTab(key as ItineraryKey)}
              className={`flex-1 py-4 text-sm font-bold uppercase tracking-wide border-b-4 transition-all duration-300 ${
                isActive
                  ? `${section.theme.border} text-gray-800 bg-gray-50`
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              {section.label}
            </button>
          );
        })}
      </div>

      {/* Main Content */}
      <main className="p-4 max-w-md mx-auto">
        <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">{currentData.title}</h2>
          <div className="flex items-center gap-2 text-gray-600 mt-2 text-sm">
            <Train size={16} />
            <span className="font-medium">Base: {currentData.base}</span>
          </div>
        </div>

        <div className="space-y-8">
          {currentData.days.map((day, dayIndex) => (
            <div 
              key={dayIndex} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            >
              {/* Image Banner */}
              <div className="h-48 bg-gray-200 relative group">
                <img 
                  src={day.image} 
                  alt={day.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
                  <div className="flex items-center gap-2 text-white/90 text-xs font-bold uppercase tracking-wider mb-1">
                    <Calendar size={12} /> {day.date}
                  </div>
                  <h3 className="text-white text-2xl font-bold leading-tight drop-shadow-sm">{day.title}</h3>
                </div>
              </div>

              {/* Logistics Banner */}
              <div className="bg-gray-50 px-4 py-3 flex items-start gap-3 border-b border-gray-100">
                <div className={`p-1.5 rounded-full ${theme.bg} bg-opacity-10 ${theme.text} shrink-0`}>
                  <Info size={16} />
                </div>
                <p className="text-sm text-gray-700 font-medium pt-0.5">{day.logistics}</p>
              </div>

              {/* Timeline */}
              <div className="p-5">
                <div className="space-y-6 relative">
                  {/* Vertical Line */}
                  <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gray-100"></div>
                  
                  {day.activities.map((act, actIndex) => {
                    const isCompleted = completedActivities[`${day.date}-${actIndex}`];
                    
                    return (
                      <div 
                        key={actIndex} 
                        className="flex gap-4 relative z-10 cursor-pointer group"
                        onClick={() => toggleActivity(day.date, actIndex)}
                      >
                        {/* Icon / Checkbox */}
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-md border-4 border-white transition-all duration-300 ${
                          isCompleted 
                            ? 'bg-green-500 text-white' 
                            : `${theme.bg} text-white`
                        }`}>
                          {isCompleted ? (
                            <Check size={20} />
                          ) : (
                            act.time.toLowerCase().includes("dinner") || act.time.toLowerCase().includes("lunch") 
                              ? <Coffee size={16} /> 
                              : <Clock size={16} />
                          )}
                        </div>

                        {/* Content */}
                        <div className={`pt-1 flex-1 transition-opacity duration-300 ${isCompleted ? 'opacity-50' : 'opacity-100'}`}>
                          <span className="text-xs font-bold text-gray-400 block uppercase tracking-wider mb-0.5">
                            {act.time}
                          </span>
                          <p className={`text-base font-medium leading-snug transition-all ${
                            isCompleted ? 'text-gray-500 line-through decoration-2 decoration-gray-300' : 'text-gray-800'
                          }`}>
                            {act.text}
                          </p>
                          {/* Details Section */}
                          {act.details && (
                             <p className={`text-sm mt-1 leading-relaxed ${
                               isCompleted ? 'text-gray-400' : 'text-gray-500'
                             }`}>
                               {act.details}
                             </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Daily Notes Section */}
                <div className="mt-8 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 mb-2 text-gray-500">
                    <PenLine size={14} />
                    <span className="text-xs font-bold uppercase tracking-wide">Travel Notes</span>
                  </div>
                  <textarea
                    value={dailyNotes[day.date] || ''}
                    onChange={(e) => updateNote(day.date, e.target.value)}
                    placeholder={`Notes for ${day.date}...`}
                    className="w-full bg-yellow-50/50 p-3 rounded-lg text-sm text-gray-700 border border-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-200 resize-none h-24 placeholder-gray-400"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Pre-Trip Checklist */}
      <div className="p-4 max-w-md mx-auto mt-4">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-gray-900">
            <CheckCircle size={20} className="text-green-600" /> 
            Critical Action Items
          </h3>
          <div className="space-y-3">
            {CHECKLIST_ITEMS.map((item, i) => {
               // We reuse the generic checkbox logic but key it with "checklist-"
               const listKey = `checklist-${i}`;
               const isChecked = completedActivities[listKey];

               return (
                <label key={i} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group">
                  <div className="relative flex items-center">
                    <input 
                      type="checkbox" 
                      checked={!!isChecked}
                      onChange={() => toggleActivity("checklist", i)}
                      className="peer w-5 h-5 border-2 border-gray-300 rounded text-blue-600 focus:ring-blue-500 checked:bg-blue-600 checked:border-blue-600 transition-all cursor-pointer" 
                    />
                  </div>
                  <span className={`text-sm font-medium transition-colors ${
                    isChecked ? 'text-gray-400 line-through' : 'text-gray-700 group-hover:text-gray-900'
                  }`}>
                    {item}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryApp;