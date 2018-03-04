import React from 'react';
import { observer } from 'mobx-react';

const Settings = ({ settings, onChangeSettings, onClickClose }) => (
  <div>
    <div>
      <span>Selecting sec</span>
      {': '}
      <label>
        <span>min</span>
        <input
          type="number"
          value={settings.minSelectingSec}
          onChange={ev => onChangeSettings('minSelectingSec', ev.target.value)}
        />
      </label>
      {' / '}
      <label>
        <span>max</span>
        <input
          type="number"
          value={settings.maxSelectingSec}
          onChange={ev => onChangeSettings('maxSelectingSec', ev.target.value)}
        />
      </label>
    </div>
    <hr />
    <label>
      <span>Frame rate</span>
      {': '}
      <input
        type="number"
        value={settings.frameRate}
        onChange={ev => onChangeSettings('frameRate', ev.target.value)}
      />
    </label>
    <hr />
    <label>
      <span>Preset</span>
      {': '}
      <select
        value={settings.selectedPreset}
        onChange={ev => onChangeSettings('presetIdx', ev.target.value)}
      >
        { settings.presets.map((label, idx) => (
          <option key={label} value={idx}>{label}</option>
        )) }
      </select>
    </label>
    <hr />
    <label>
      <span>Output dir</span>
      {': '}
      <input
        type="text"
        value={settings.outputDir}
        onChange={ev => onChangeSettings('ouputDir', ev.target.value)}
      />
    </label>
    <hr />
    <button onClick={() => onClickClose()}>OK</button>
  </div>
);

export default observer(Settings);
