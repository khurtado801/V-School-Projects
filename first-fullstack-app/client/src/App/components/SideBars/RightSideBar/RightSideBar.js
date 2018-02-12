import React, { Component } from 'react'

import SearchForm from '../../../components/SearchForm/SearchForm.js';
import Modules from '../../../pages/Modules/Modules.js';

import './RightSideBar.css';

class RightSideBar extends Component {
    render () {
        return (
            <div className='right-side-wrapper'>
                <div className='right-side-items'>
                    <div className='right-side-item'>
                        <p>VCO – Voltage Controlled Oscillator, a continuous voltage source, which will output a signal whose frequency is a function of the settings. In its basic form these may be simple waveforms (most usually a square wave or a sawtooth wave, but also includes pulse, triangle and sine waves), however these can be dynamically changed through such controls as sync, frequency modulation, and self-modulation.</p>
                        <p>LFO - A Low Frequency Oscillator may or may not be voltage-controlled. It is generally used as a control voltage for another module. For example, modulating a VCO will produce frequency modulation, and may create vibrato, while modulating a VCA will produce amplitude modulation, and may create tremolo, depending on the control frequency. The rectangular wave can be used as a logic / timing / trigger function.</p>
                        <p>EG - An envelope generator is a transient voltage source. A trigger in the presence of a gate, applied to an Envelope Generator produces a single, shaped voltage. It controls the amplitude of a VCA or the center frequency of a VCF, but the patchable structure of the synthesizer makes it possible to use the envelope generator to modulate other parameters such as the frequency or pulse width of the VCO.</p>
                        <p>VCF - Voltage Controlled Filter, which attenuates frequencies below (high-pass), above (low-pass) or both below and above (band-pass) a certain frequency. VCFs can also be configured to provide band-reject (notch), whereby the high and low frequencies remain while the middle frequencies are attenuated. Most VCFs have variable resonance, sometimes voltage-controlled.</p>
                        <p>VCA - Voltage Controlled Amplifier, is usually a unity-gain amplifier which varies the amplitude of a signal in response to an applied control voltage. The response curve may be linear or exponential. Also called a two-quadrant multiplier.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default RightSideBar