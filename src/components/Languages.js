import React, { useState } from 'react';

function Selected() {
  const [language, setLanguage] = useState('');
  const [languageLevel, setLanguageLevel] = useState('');

  const languages = ['English', 'Spanish', 'French', 'German', 'Italian', 'Chinese', 'Japanese', 'Korean'];
  const languageLevels = ['Native', 'Fluent', 'Proficient', 'Intermediate', 'Beginner'];

  return (
    <div className="Select ">
      <label htmlFor="language">Language:</label>
      <Select
        name="language"
        value={language}
        onChange={event => setLanguage(event.target.value)}
        options={languages}
      />
      <br />
      <label htmlFor="language-level">Language level:</label>
      <Select
        name="language-level"
        value={languageLevel}
        onChange={event => setLanguageLevel(event.target.value)}
        options={languageLevels}
      />
    </div>
  );
}

const Select = ({ name, value, onChange, options }) => (
  <select name={name} value={value} onChange={onChange} >
    {options.map(option => (
      <option key={option} value={option} >
        {option}
      </option>
    ))}
  </select>
);

export default Selected;
