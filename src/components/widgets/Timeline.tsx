import React, { Fragment } from 'react';
import './Widget.css';
import icon from './timeline.svg';

import { useTextKitWidget } from '@statflo/textkit-widget-sdk-react'

const Widget = () => {

    const { state } = useTextKitWidget() || {};

    return (
        <div style={{
            borderRadius: 6,
            backgroundColor: '#FFFFFF',
            margin: 8,
            height: '100%'
        }}>
            <div className='widget-container' style={{ height: state ? state?.maxHeight : 100 }}>
                <div className='widget-flex-container'>
                    <img src={icon} alt="Icon" />

                    <h1 className='widget-title'>
                        This is a Timeline Widget.
                    </h1>

                    <p className='widget-copy'>This widget is accessed by clicking the Timeline toggle in the right sidebar and is meant to provide the user with a scrollable, chronological view of a contact's events without leaving the conversation.</p>

                    <p className='widget-copy'>The Timeline Widget can connect to various external systems to understand a contact's history.</p>

                    <a href='https://docs.textkit.io' rel='noreferrer' target="_blank" className='widget-link widget-link__doc'>Read our docs to learn more.</a>
                </div>
                <div className='widget-flex-container flush-bottom'>
                    
                    <p className='widget-more'>Try scrolling to the bottom</p>
                    <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.8003 11.892C7.7498 11.7702 7.66433 11.6661 7.55468 11.5929C7.44503 11.5197 7.31614 11.4806 7.1843 11.4807H5.16696C5.14505 11.4808 5.12334 11.4765 5.10308 11.4682C5.08282 11.4598 5.06441 11.4475 5.04891 11.432C5.03342 11.4166 5.02115 11.3981 5.0128 11.3779C5.00446 11.3576 5.00021 11.3359 5.0003 11.314V1C5.0003 0.734783 4.89494 0.48043 4.7074 0.292893C4.51987 0.105357 4.26551 0 4.0003 0C3.73508 0 3.48072 0.105357 3.29319 0.292893C3.10565 0.48043 3.0003 0.734783 3.0003 1V11.314C3.0003 11.3582 2.98274 11.4006 2.95148 11.4319C2.92022 11.4631 2.87783 11.4807 2.83363 11.4807H0.814962C0.683129 11.4807 0.554263 11.5198 0.444657 11.5931C0.33505 11.6663 0.249624 11.7704 0.199177 11.8922C0.14873 12.014 0.135528 12.1481 0.16124 12.2774C0.186951 12.4067 0.250422 12.5254 0.343629 12.6187L3.5283 15.804C3.59021 15.866 3.66374 15.9152 3.74467 15.9487C3.8256 15.9823 3.91235 15.9995 3.99996 15.9995C4.08757 15.9995 4.17432 15.9823 4.25526 15.9487C4.33619 15.9152 4.40971 15.866 4.47163 15.804L7.65696 12.6187C7.75003 12.5253 7.81332 12.4064 7.83883 12.2771C7.86434 12.1477 7.85093 12.0137 7.8003 11.892Z" fill="#B2B2B2"/>
                    </svg>
                </div>
            </div>
            <div className='widget-scroll-bottom'>
                <h2 className='widget-title'>Wow!</h2>
                <p className='widget-copy'>You've hit the beginning of time.</p>
            </div>
        </div>
    )
}

export default Widget;