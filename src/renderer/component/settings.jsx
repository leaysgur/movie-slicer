import React from 'react';
import { observer } from 'mobx-react';

import { MainHeading, SubHeading } from './heading';
import Icon from './icon';

const Settings = ({ settings, onChangeSettings, onClickClose, onClickUrl }) => (
  <div className="Settings">
    <MainHeading>Settings</MainHeading>

    <div className="Settings_Section">
      <SubHeading>General</SubHeading>
      <ul>
        <li>
          <label className="Settings_Item">
            <span>Selecting sec(min): </span>
            <input
              type="number"
              value={settings.minSelectingSec}
              onChange={ev => onChangeSettings('minSelectingSec', ev.target.value)}
            />
          </label>
        </li>
        <li>
          <label className="Settings_Item">
            <span>Selecting sec(max): </span>
            <input
              type="number"
              value={settings.maxSelectingSec}
              onChange={ev => onChangeSettings('maxSelectingSec', ev.target.value)}
            />
          </label>
        </li>
        <li>
          <label className="Settings_Item">
            <span>Output dir: </span>
            <input
              type="text"
              value={settings.outputDir}
              onChange={ev => onChangeSettings('ouputDir', ev.target.value)}
            />
          </label>
        </li>
      </ul>
    </div>

    <div className="Settings_Section">
      <SubHeading>Movie</SubHeading>
      <ul>
        <li>
          <label className="Settings_Item">
            <span>Frame rate: </span>
            <input
              type="number"
              value={settings.frameRate}
              onChange={ev => onChangeSettings('frameRate', ev.target.value)}
            />
          </label>
        </li>
      </ul>
    </div>

    <div className="Settings_Section">
      <SubHeading>H.264</SubHeading>
      <ul>
        <li>
          <label className="Settings_Item">
            <span><a href="#" onClick={() => onClickUrl('https://trac.ffmpeg.org/wiki/Encode/H.264#Preset')}>Preset</a>: </span>
            <select
              value={settings.selectedPreset}
              onChange={ev => onChangeSettings('presetIdx', ev.target.value)}
            >
              { settings.presets.map((label, idx) => (
                <option key={label} value={idx}>{label}</option>
              )) }
            </select>
          </label>
        </li>
      </ul>
    </div>

    <div className="Settings_Note">
      Spec: <a href="#" onClick={() => onClickUrl('https://help.twitter.com/ja/using-twitter/twitter-videos')}>Twitter</a>
    </div>

    <div className="Settings_End">
      <Icon
        onClick={() => onClickClose()}
        name="check"
        size="m"
      />
    </div>
  </div>
);

export default observer(Settings);
