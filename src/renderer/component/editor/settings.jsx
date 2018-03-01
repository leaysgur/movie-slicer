import React from 'react';

const Settings = ({ settings, onChangeSettings }) => (
  <div>
    <label>
      <span>Output dir</span>
      <input
        type="text"
        value={settings.outputDir}
        onChange={ev => onChangeSettings('ouputDir', ev.target.value)}
      />
    </label>
    <hr />
    <label>
      <span>Frame rate</span>
      <input
        type="number"
        value={settings.frameRate}
        onChange={ev => onChangeSettings('frameRate', ev.target.value)}
      />
    </label>
    <hr />
    <label>
      <span>Preset</span>
      <input
        type="text"
        value={settings.preset}
        onChange={ev => onChangeSettings('preset', ev.target.value)}
      />
    </label>
    <hr />
    <button>OK</button>
  </div>
);

export default Settings;
